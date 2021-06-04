const router = require("express").Router();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.client_ID,
  process.env.client_S, // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);
oauth2Client.setCredentials({
  refresh_token: process.env.refresh_token,
});

const accessToken = oauth2Client.getAccessToken();

console.log(
  "------------------------------------------------------------------------------------------------"
);
console.log(
  "------------------------------------------------------------------------------------------------"
);
console.log(accessToken);
console.log(
  "------------------------------------------------------------------------------------------------"
);
console.log(
  "------------------------------------------------------------------------------------------------"
);

const mailer = (req, res) => {
  const userData = req.body.userData;
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.email,
      pass: process.env.mail_pass,
      clientId: process.env.client_ID,
      clientSecret: process.env.client_S,
      refreshToken: process.env.refresh_token,
      accessToken: accessToken,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  smtpTransport.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`);
  });

  const mailOptions = {
    from: process.env.email,
    to: userData.email,
    subject: "Welcome to Healthy Habits!",
    generateTextFromHTML: true,
    html: `<b>Hey there ${userData.name}! </b><br> Thank you very much for signing up with Healthy Habits! We're excited to begin this journey and <br> can't wait to see what the future has in store for you! This email address will be used to send you weekly reports <br> on the habits you are tracking and goals you would like to achieve. If you have any questions or concerns <br> don't be afraid to reach out to us at this email address!`,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransport.close();
  });
  res.end();
};

router.post("/", mailer);

module.exports = router;
