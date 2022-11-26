"use strict";
/**
 * post controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController("api::post.post", () => {
    return {
        async listApprovedPosts(ctx) {
            const user_id = ctx.query.user_id;
            let othersFilters = {};
            if (user_id) {
                othersFilters = {
                    user: {
                        id: user_id,
                    },
                };
            }
            const res = await strapi.db.query("api::post.post").findPage({
                where: { approved: true, ...othersFilters },
                orderBy: { publishedAt: "DESC" },
                populate: ["user", "photo", "post_comments", "post_reacts"],
            });
            return ctx.send(res);
        },
        async listMyPosts(ctx) {
            const posts = await strapi.db.query("api::post.post").findPage({
                where: { user: ctx.state.user },
                orderBy: { publishedAt: "DESC" },
                populate: ["photo", "post_comments", "post_reacts"],
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
