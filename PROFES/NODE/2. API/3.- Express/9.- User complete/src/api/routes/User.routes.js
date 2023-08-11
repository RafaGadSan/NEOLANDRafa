const { isAuth } = require('../../middleware/auth.moddleware');
const { upload } = require('../../middleware/files.middleware');
const {
  register,
  registerSlow,
  registerWithRedirect,
  sendCode,
  login,
  autoLogin,
  resendCode,
  checkNewUser,
  changePassword,
  sendPassword,
  modifyPassword,
  update,
  addFavCharacter,
  addFavMovie,
  deleteUser,
} = require('../controllers/User.controllers');

const UserRoutes = require('express').Router();

UserRoutes.post('/registerUtil', upload.single('image'), register);
UserRoutes.post('/register', upload.single('image'), registerSlow);
UserRoutes.post(
  '/registerRedirect',
  upload.single('image'),
  registerWithRedirect
);
UserRoutes.post('/login', login);
UserRoutes.post('/login/autologin', autoLogin);
UserRoutes.post('/resend', resendCode);
UserRoutes.post('/check', checkNewUser);
UserRoutes.patch('/forgotpassword/forgotpassword', changePassword);
UserRoutes.patch('/changepassword', [isAuth], modifyPassword);
UserRoutes.patch('/update/update', [isAuth], upload.single('image'), update);
UserRoutes.patch('/addFavCharacter', [isAuth], addFavCharacter);
UserRoutes.patch('/addFavMovie', [isAuth], addFavMovie);
UserRoutes.delete('/', [isAuth], deleteUser);

//! --------------------- rutas que sirven como un redirects ---------------------
UserRoutes.post('/register/sendMail/:id', sendCode);
UserRoutes.patch('/sendPassword/:id', sendPassword);

module.exports = UserRoutes;
