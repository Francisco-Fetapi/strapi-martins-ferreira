/**
 * validation router
 */

// import { factories } from "@strapi/strapi";

// export default factories.createCoreRouter("api::validation.validation");

export default {
  routes: [
    {
      method: "POST",
      path: "/send-email",
      handler: "email.sendEmail",
    },
  ],
};
