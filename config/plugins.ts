export default ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "franciscofetapi10@gmail.com",
        defaultReplyTo: "franciscofetapi10@gmail.com",
      },
    },
  },
});
