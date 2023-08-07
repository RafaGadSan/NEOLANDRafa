const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const server = express();
const router = express.Router();

const URL = process.env.URL;
const PORT = process.env.PORT;

router.get("/sendNewMail", (req, res) => {
  const EMAILNODEMAILER = process.env.EMAIL_ENV;
  const PASSWORD = process.env.PASSWORD_ENV;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAILNODEMAILER,
      pass: PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: EMAILNODEMAILER,
    to: "laurasanchez0301@gmail.com",
    subject: "Confirmation Code",
    text: "Todo ok 👌🏽",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    console.log(info);
    if (error) {
      return error;
    } else {
      return res.status(200).json("Email enviado" + info.response);
    }
  });
});

server.use("/", router);

server.listen(PORT, () => {
  console.log(`Server running on ${URL}`);
});
