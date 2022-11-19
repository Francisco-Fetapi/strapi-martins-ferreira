/**
 * post controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::post.post", () => {
  return {
    async index(ctx) {
      ctx.send({ message: "This route is running!" });
    },
    async isEmailValid(ctx) {
      let res = await strapi.db
        .query("plugin::users-permissions.user")
        .findWithCount({
          select: ["username", "email"],
          where: { email: ctx.query.email },
        });
      return res;
    },
    async isUsernameValid(ctx) {
      let res = await strapi.db
        .query("plugin::users-permissions.user")
        .findWithCount({
          select: ["username"],
          where: { username: ctx.query.username },
        });
      return res;
    },
    async isPhoneNumberValid(ctx) {
      let res = await strapi.db
        .query("plugin::users-permissions.user")
        .findWithCount({
          select: ["username", "phoneNumber"],
          where: { phoneNumber: ctx.query.phoneNumber },
        });
      return res;
    },
  };
});
