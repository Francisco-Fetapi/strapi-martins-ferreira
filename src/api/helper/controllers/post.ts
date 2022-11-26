/**
 * post controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::post.post", () => {
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
    async postComment(ctx) {
      const { content, post } = ctx.request.body;
      const user = ctx.state.user;

      const entry = await strapi.db
        .query("api::post-comment.post-comment")
        .create({
          data: {
            content,
            post,
            user,
            publishedAt: new Date(),
          },
          populate: ["user", "post"],
        });

      return ctx.send(entry);
    },
    async getAllComments(ctx) {
      const post_id = ctx.query.post_id;

      const entry = await strapi.db
        .query("api::post-comment.post-comment")
        .findMany({
          where: {
            post: {
              id: post_id,
            },
          },
          populate: [
            "user",
            "user.photo",
            "comment_reacts",
            "comment_reacts.user",
          ],
        });

      return ctx.send(entry);
    },
  };
});