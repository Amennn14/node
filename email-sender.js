const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'email@gmail.com',
    pass: 'mot_de_passe',
  },
});

const mailOptions = {
  from: 'email@gmail.com',
  to: 'destinataire.email@example.com',
  subject: 'Test Email',
  text: 'Hello from Node.js!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent: ' + info.response);
});
