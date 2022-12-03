"use strict";
/**
 * post controller
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
const crypto_1 = __importDefault(require("crypto"));
exports.default = strapi_1.factories.createCoreController("api::post.post", () => {
    return {
        async sendEmailConfirmation(ctx) {
            const body = ctx.request.body;
            const sendTo = body.email;
            const codeGenerated = crypto_1.default.randomBytes(12).toString("hex");
            try {
                const emailOptions = {
                    to: sendTo,
                    subject: "Confirmação do Email - Portal Obadias Malaquias",
                    html: `<p>O seu código de confirmação é <b>${codeGenerated}</b></p>`,
                };
                await strapi.plugins["email"].services.email.send(emailOptions);
                ctx.send({ status: "success", code: codeGenerated });
            }
            catch (err) {
                ctx.send({ status: "error", code: codeGenerated });
            }
        },
    };
});
