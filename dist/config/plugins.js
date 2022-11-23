"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
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
