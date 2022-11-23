export default ({ env }) => ({
  email: {
    provider: "smtp",
    providerOptions: {
      host: "smtp.gmail.com", //SMTP Host
      port: 465, //SMTP Port 587
      secure: true,
      username: "franciscofetapi10@gmail.com",
      password: "edielwzaxaqxaiog",
      rejectUnauthorized: true,
      requireTLS: true,
      connectionTimeout: 5,
    },
    settings: {
      from: "franciscofetapi10@gmail.com",
      replyTo: "franciscofetapi10@gmail.com",
    },
  },
});
