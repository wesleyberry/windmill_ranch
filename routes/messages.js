const path = require("path");
require('dotenv').config();
const router = require('express').Router();
const nodemailer = require('nodemailer');
const emailUser = process.env.EMAIL_USERNAME;
const emailPassword = process.env.EMAIL_PASSWORD;
router.post('/messages', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    const results = `
    <h3>Name: ${name}</h3>
    <h3>Email: ${email}</h3>
    <h3>Subject: ${subject}</h3>
    <br>
    <p>Message: ${message}</p>
    `;

    var transporter = nodemailer.createTransport({
        name: 'mail.berry-development.com',
        host: 'mi3-sr19.supercp.com',
        port: 2525,
        auth: {
          user: emailUser,
          pass: emailPassword
        },
        tls:{
            rejectUnauthorized: false
        }
    });
      
    var mailOptions = {
        from: 'Mailer Contact <test@berry-development.com>',
        to: 'wesleyberry52@gmail.com',
        subject: "You have a new email from your website!",
        html: results
    };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.json("Something went wrong");
        } else {
          console.log('Email sent: ' + info.response);
          res.json(200);
        }
    });
});

module.exports = router;