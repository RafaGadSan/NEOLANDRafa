//! importaciones
const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require('nodemailer');
const { setTestEmailSend } = require('../api/state/state.data');

const sendEmail = (userEmail, name, confirmationCode) => {
  setTestEmailSend(false);
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  // nodemailes ------
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: password,
    },
  });

  // opciones del email------

  const mailOptions = {
    from: email,
    to: userEmail,
    subject: 'Confirmation code',
    text: `tu codigo es ${confirmationCode}, gracias por confiar en nosotros ${name}`,
  };

  // hacer el envio del email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      setTestEmailSend(false);
    } else {
      console.log('Email send: ' + info.response);
      setTestEmailSend(true);
    }
  });
};

module.exports = sendEmail;
