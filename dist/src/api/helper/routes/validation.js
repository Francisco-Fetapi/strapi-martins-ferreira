"use strict";
/**
 * validation router
 */
Object.defineProperty(exports, "__esModule", { value: true });
// import { factories } from "@strapi/strapi";
// export default factories.createCoreRouter("api::validation.validation");
exports.default = {
    routes: [
        {
            method: "GET",
            path: "/validation",
            handler: "validation.index",
        },
        {
            method: "GET",
            path: "/validation/email",
            handler: "validation.isEmailValid",
        },
        {
            method: "GET",
            path: "/validation/phoneNumber",
            handler: "validation.isPhoneNumberValid",
        },
        {
            method: "GET",
            path: "/validation/username",
            handler: "validation.isUsernameValid",
        },
    ],
};
