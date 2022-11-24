"use strict";
/**
 * post controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController("api::post.post", () => {
    return {
        async listApprovedPosts(ctx) {
            const res = await strapi.db.query("api::post.post").findPage({
                where: { approved: true },
                orderBy: { publishedAt: "DESC" },
                populate: ["user", "photo", "post-comment", "post-react"],
            });
            return ctx.send(res);
        },
        async listMyPosts(ctx) {
            const posts = await strapi.db.query("api::post.post").findPage({
                where: { user: ctx.state.user },
                orderBy: { publishedAt: "DESC" },
                populate: ["photo"],
            });
            return ctx.send(posts);
        },
        async listFeaturesPosts(ctx) {
            // order by num_comentarios, num_reacts
            // strapi.db.query('api::article.article').findMany({
            //     orderBy: {
            //       author: {
            //         name: 'asc',
            //       },
            //     },
            //   });
        },
    };
});
