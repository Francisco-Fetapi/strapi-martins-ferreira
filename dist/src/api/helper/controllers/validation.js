"use strict";
/**
 * post controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController("api::post.post", () => {
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
