const nodemailer = require("nodemailer");

const emailEvent = async (remail, subject, message) => {
  try {
    const email = "birbaproject@midklick.com";
    const password = "1717rightCT";

    // SMTP configuration
    const smtpConfig = {
      host: "midklick.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: email,
        pass: password,
      },
    };

    // Email content
    const mailOptions = {
      from: email,
      to: remail,
      subject: subject,
      text: message,
    };

    // Create a transporter
    const transporter = nodemailer.createTransport(smtpConfig);

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error:", error.message);
        return false;
      } else {
        console.log("Email sent:", info.response);   
        return true;
      }

      // Close the transporter
      transporter.close();
    });
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = emailEvent;
