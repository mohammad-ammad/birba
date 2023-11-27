const nodemailer = require("nodemailer");

const emailEvent = async (email, subject, message) => {
  try {
    // const transporter = nodemailer.createTransport({
    //     host: 'mail.midklick.com',
    //     port: 465,
    //     auth: {
    //       user: 'birbaproject@midklick.com',
    //       pass: '1717rightCT',
    //     },
    //   });

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'bobby20@ethereal.email',
            pass: 'qqVAtb8qS5GzVjRy1R'
        }
    });

    // Email details
    const mailOptions = {
      from: "bobby20@ethereal.email",
      to: "bobby20@ethereal.email",
      subject: subject,
      text: message,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error:", error.message);
      } else {
        console.log("Email sent:", info.response);
      }
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = emailEvent;
