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

      // findPage
      const res = await strapi.db.query("api::post.post").findMany({
        where: { approved: true, ...othersFilters },
        orderBy: { updatedAt: "DESC" },
        populate: [
          "user",
          "user.photo",
          "photo",
          "post_comments",
          "post_reacts",
          "post_reacts.user",
        ],
      });

      return ctx.send(res);
    },
    async listMyPosts(ctx) {
      // findPage
      const posts = await strapi.db.query("api::post.post").findMany({
        where: { user: ctx.state.user },
        orderBy: { updatedAt: "DESC" },
        populate: [
          "user.photo",
          "photo",
          "post_comments",
          "post_reacts",
          "post_reacts.user",
        ],
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
          orderBy: { updatedAt: "DESC" },
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
