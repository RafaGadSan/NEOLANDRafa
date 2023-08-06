const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const randomCode = require("../../utils/randomCode");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../models/user.model");
const nodemailer = require("nodemailer");
const { generateToken } = require("../../utils/token");
const randomPassword = require("../../utils/randomPassword");

const registerSlow = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    // actualizamos los indexes de los elementos unicos por si acaso han variado
    await User.syncIndexes();
    // creamos el code con la funcion randomCode que os la mostramos antes en la page user
    let confirmationCode = randomCode();
    // hacemos destructuring de email y name
    const { email, name } = req.body;
    // aqui buscamos uno que tenga como elemento unico email y name
    // recordar si no son elemento así se pone: { email: req.body.email, name: req.body.name }
    const userExist = await User.findOne(
      { email: req.body.email },
      { name: req.body.name }
    );

    // si no tenemos el usuario entonces si hacemos el registro
    if (!userExist) {
      // le metemos el code de confirmacion que generamos
      const newUser = new User({ ...req.body, confirmationCode });
      // si tenemos un archivo entonces  le metemos ese archivo sino una imagen por defecto
      if (req.file) {
        newUser.image = req.file.path;
      } else {
        newUser.image = "https://pic.onlinewebfonts.com/svg/img_181369.png";
      }
      // hacemos el guardado del elemento en mongodb
      try {
        // hacemos el guardado
        const userSave = await newUser.save();
        // si existe el usuario guardado hacemos el envio del email
        if (userSave) {
          const emailEnv = process.env.EMAIL;
          const password = process.env.PASSWORD;

          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: emailEnv,
              pass: password,
            },
          });

          const mailOptions = {
            from: emailEnv,
            to: email,
            subject: "Confirmation code",
            text: `tu codigo es ${confirmationCode}, gracias por confiar en nosotros ${name}`,
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
              /// si ha habido un error en el envio del codigo lanzamos un 404
              return res.status(404).json({
                user: userSave,
                confirmationCode: "error, resend code",
              });
            } else {
              console.log("Email sent: " + info.response);
              /// si se ha enviado el código lanzamos el código con el user
              return res.status(200).json({
                user: userSave,
                confirmationCode,
              });
            }
          });
        }
      } catch (error) {
        return res.status(404).json(error.message);
      }
    } else {
      // SI EXISTE EL USUARIO ENTONCES BORRAMOS LA IMAGEN QUE SUBIO EL MIDDLEWARE
      if (req.file) deleteImgCloudinary(catchImg);
      return res.status(409).json("this user already exist");
    }
  } catch (error) {
    // SIEMPRE QUE HAY UN ERROR GENERAL TENEMOS QUE BORRAR LA IMAGEN QUE HA SUBIDO EL MIDDLEWARE
    if (req.file) deleteImgCloudinary(catchImg);
    return next(error);
  }
};

//!------------------------------------CHECK CODECONFIRMATION USER NUEVO--------------

const checkNewUser = async (req, res, next) => {
  try {
    //! nos traemos de la req.body el email y codigo de confirmation
    const { email, confirmationCode } = req.body;

    //! hay que ver que el usuario exista porque si no existe no tiene sentido hacer ninguna verificacion
    const userExists = await User.findOne({ email });
    if (!userExists) {
      //!No existe----> 404 de no se encuentra
      return res.status(404).json("User not found");
    } else {
      // cogemos que comparamos que el codigo que recibimos por la req.body y el del userExists es igual
      if (confirmationCode === userExists.confirmationCode) {
        // si coinciden los codigos hacemos la actualizacion de check
        try {
          await userExists.updateOne({ check: true });
          // hacemos un testeo de que este user se ha actualizado correctamente, hacemos un findOne
          const updateUser = await User.findOne({ email });

          // este finOne nos sirve para hacer un ternario que nos diga si la propiedad vale true o false
          return res.status(200).json({
            testCheckOk: updateUser.check == true ? true : false,
          });
        } catch (error) {
          return res.status(404).json(error.message);
        }
      } else {
        /// En caso dec equivocarse con el codigo lo borramos de la base datos y lo mandamos al registro
        const deleteUser = await User.findByIdAndDelete(userExists._id);

        // borramos la imagen
        deleteImgCloudinary(userExists.image);
        // metemos 200 aunque no ha salido bien el controlador porque sino salta el error primero
        /// si le ponemos 404 salta el error de arriba de User not found aunque si lo ha borrado
        // devolvemos un 200 con el test de ver si el delete se ha hecho correctamente
        return res.status(200).json({
          userExists,
          check: false,
          delete: (await User.findById(userExists._id))
            ? "error delete user"
            : "ok delete user",
        });
      }
    }
  } catch (error) {
    // siempre en el catch devolvemos un 500 con el error general
    return next(setError(500, "General error check code"));
  }
};

//!----------------RESERND CODE CONFRIMATION USER NUEVO
const resendCode = async (req, res, next) => {
  try {
    //! vamos a configurar nodemailer porque tenemos que enviar un codigo
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass: password,
      },
    });
    //! hay que ver que el usuario exista porque si no existe no tiene sentido hacer ninguna verificacion
    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      const mailOptions = {
        from: email,
        to: req.body.email,
        subject: "Confirmation code",
        text: `tu codigo es ${userExists.confirmationCode}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
          return res.status(200).json({
            resend: true,
          });
        }
      });
    } else {
      return res.status(404).json("User not found");
    }
  } catch (error) {
    return next(setError(500, error.message || "Error general send code"));
  }
};

//!------------ LOGIN----------------------------------------

const login = async (req, res, next) => {
  try {
    // nos traemos
    const { email, password } = req.body;
    const userDB = await User.findOne({ email });

    if (userDB) {
      // comparamos la contrase del body con la del user de la DB
      if (bcrypt.compareSync(password, userDB.password)) {
        // si coinciden generamos el token
        const token = generateToken(userDB._id, email);
        // mandamos la respuesta con el token
        return res.status(200).json({
          user: userDB,
          token,
        });
      } else {
        return res.status(404).json("password dont match");
      }
    } else {
      return res.status(404).json("User no register");
    }
  } catch (error) {
    return next(error);
  }
};

//!----------------AUTOLOGIN---------------------------------

const autoLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userDB = await User.findOne({ email });

    if (userDB) {
      if (password == userDB.password) {
        const token = generateToken(userDB._id, email);
        return res.status(200).json({
          user: userDB,
          token,
        });
      } else {
        return res.status(404).json("password dont match");
      }
    } else {
      return res.status(404).json("User no register");
    }
  } catch (error) {
    return next(error);
  }
};

//! --------------CAMBIAR CONTRASEÑA ANTES DE LOGGEARSE

// BASE_URL_COMPLETE = http://localhost:8080
/// -----> al meter la url al .env, si cambiamos de servidor de aplicaciones como a railway
///... es mas facil cambiar lac url base del proyecto
const changePassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    // si el usuario existe entonces hacemos el redirect para
    const userDb = await User.findOne({ email });
    if (userDb) {
      // recordar podemos poner el code 307 o 308 para que ambos controladores sean un post
      //---> tanto el que hace el redirect como el contralador al que se redirige

      //return res.redirect( 307,
      //  `${BASE_URL_COMPLETE}/api/v1/users/sendPassword/${userDb._id}`
      // );

      return res.redirect(
        307,
        `${BASE_URL_COMPLETE}/api/v1/users/sendPassword/${userDb._id}`
      );
    } else {
      return res.status(404).json("User no register");
    }
  } catch (error) {}
};

const sendPassword = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userDb = await User.findById(id);
    // configuramos el transporte de nodemailer
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass: password,
      },
    });

    // Generamos la password secura con la funcion randomPassword
    let passwordSecure = randomPassword();
    console.log(passwordSecure);
    const mailOptions = {
      from: email,
      to: userDb.email,
      subject: "-----",
      text: `User: ${userDb.name}. Your new code login is ${passwordSecure} Hemos enviado esto porque tenemos una solicitud de cambio de contraseña, si no has sido ponte en contacto con nosotros, gracias.`,
    };

    // enviamos el email
    transporter.sendMail(mailOptions, async function (error, info) {
      if (error) {
        // si hay error quiere decir que ni hemos actualizado el user, ni enviamos email
        console.log(error);
        return res.status(404).json("dont send email and dont update user");
      } else {
        console.log("Email sent: " + info.response);
        // ----> si hemos enviado el correo, hasheamos la contraseña y actualizamos el user
        const newPasswordBcrypt = bcrypt.hashSync(passwordSecure, 10);
        try {
          // actualizamos la contraseña en el back
          await User.findByIdAndUpdate(id, { password: newPasswordBcrypt });
          const userUpdatePassword = await User.findById(id);
          /// comprobamos que se haya actualizado correctamente
          if (bcrypt.compareSync(passwordSecure, userUpdatePassword.password)) {
            return res.status(200).json({
              updateUser: true,
              sendPassword: true,
            });
          } else {
            //// si no se ha actualizado damos feedback de que se envio la contraseña pero
            // ... no se actualizo
            return res.status(404).json({
              updateUser: false,
              sendPassword: true,
            });
          }
        } catch (error) {
          return res.status(404).json(error.message);
        }
      }
    });
  } catch (error) {
    return next(error);
  }
};

//!------------MODIFICAR CONTRASEÑA DESPUÉS DE LOGGEARSE-------

const modifyPassword = async (req, res, next) => {
  try {
    const { password, newPassword } = req.body;
    const { _id } = req.user;
    if (bcrypt.compareSync(password, req.user.password)) {
      const newPasswordHashed = bcrypt.hashSync(newPassword, 10);
      try {
        /// hacemos la actualizacion si las contraseñas coinciden
        await User.findByIdAndUpdate(_id, { password: newPasswordHashed });

        /// hacemos una comprobacion para ver si se ha actualizado las contraseñas
        const userUpdate = await User.findById(_id);
        if (bcrypt.compareSync(newPassword, userUpdate.password)) {
          return res.status(200).json({
            updateUser: true,
          });
        } else {
          return res.status(200).json({
            updateUser: false,
          });
        }
      } catch (error) {
        return res.status(404).json(error.message);
      }
    } else {
      return res.status(404).json("password dont match");
    }
  } catch (error) {
    return next(error);
  }
};

//!----------ACTUALIZAR INOFO USUARIO------------

const update = async (req, res, next) => {
  // guardamos la imagen para si luego hay un error utilizar la URL para borrarla
  let catchImg = req.file?.path;
  try {
    // creamos una nueva instancia del modelo User con el req.body
    const patchUser = new User(req.body);
    // si tiene archivo la request entonces le metemos al usuario creado esa imagen
    if (req.file) {
      patchUser.image = req.file.path;
    }
    // importante quedarnos con el id del usuario antes de actualizarse
    patchUser._id = req.user._id;
    // LA CONTRASEÑA NO SE PUEDE MODIFICAR: ponemos la contraseña de la db
    patchUser.password = req.user.password;
    // Lo mismo con el rol, confirmationCode, check, NO SE PUEDE MODIFICAR POR AQUI
    patchUser.rol = req.user.rol;
    patchUser.confirmationCode = req.user.confirmationCode;
    patchUser.check = req.user.check;
    patchUser.email = req.user.email;

    // Ahora cogemos y actualizamos el usuario

    try {
      await User.findByIdAndUpdate(req.user._id, patchUser);
      if (req.file) {
        deleteImgCloudinary(req.user.image);
      }
      const updateUser = await User.findById(req.user._id);
      // nos traemos del objeto del body sus claves
      const updateKeys = Object.keys(req.body);
      /// -----> venerar un array con los resultados del test en el runtime
      const testUpdate = [];

      // recorremos el objeto con las claves y comprobamos si los valores del back coinciden
      updateKeys.forEach((item) => {
        // si coinciden pushamos un objeto con el nombre del item y un true
        if (updateUser[item] == req.body[item]) {
          testUpdate.push({
            [item]: true,
          });

          // si no coinciden pushamos un objeto con el nombre del item y un true
        } else {
          testUpdate.push({
            [item]: false,
          });
        }
      });

      //// lo mismo que arriba pero ahora con el req.file en caso de haberlo recibido
      if (req.file) {
        updateUser.image == req.file.path
          ? testUpdate.push({
              file: true,
            })
          : testUpdate.push({
              file: false,
            });
      }
      return res.status(200).json({
        testUpdate,
      });
    } catch (error) {
      return res.status(404).json(error.message);
    }
  } catch (error) {
    // siempre que tengamos un error debemos borrar la imagen nueva subida a cloudinary
    if (req.file) {
      deleteImgCloudinary(catchImg);
    }
    return next(error);
  }
};

//!--------------------------DELETE------------------
const deleteUser = async (req, res, next) => {
  try {
    const { _id, image } = req.user;
    await User.findByIdAndDelete(_id);
    if (await User.findById(_id)) {
      return res.status(404).json("Dont delete");
    } else {
      deleteImgCloudinary(image);
      return res.status(200).json("ok delete");
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  autoLogin,
  registerSlow,
  resendCode,
  login,
  changePassword,
  sendPassword,
  modifyPassword,
  update,
  deleteUser,
  checkNewUser,
};
