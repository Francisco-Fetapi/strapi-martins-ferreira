/**
 * post controller
 */

import { factories } from "@strapi/strapi";
import crypto from "crypto";

export default factories.createCoreController("api::post.post", () => {
  return {
    async sendEmailConfirmation(ctx) {
      const body = ctx.request.body;
      const sendTo = body.email;

      const codeGenerated = crypto
        .randomBytes(12)
        .toString("hex")
        .substring(0, 4);
      try {
        const emailOptions = {
          to: sendTo,
          subject: "Portal Martins Ferreira - Confirmação do Email",
          html: `<p>O seu código de confirmação é <b>${codeGenerated}</b></p>`,
        };
        await strapi.plugins["email"].services.email.send(emailOptions);
        ctx.send({ status: "success", code: codeGenerated });
      } catch (err) {
        ctx.send({ status: "error", code: codeGenerated });
      }
    },
  };
});
