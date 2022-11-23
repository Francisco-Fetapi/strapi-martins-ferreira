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
            method: "POST",
            path: "/send-email",
            handler: "email.sendEmail",
        },
    ],
};
