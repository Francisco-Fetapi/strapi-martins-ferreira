/**
 * post controller
 */

import { factories } from "@strapi/strapi";

interface IPost {
  publishedAt: string;
  id: number;
  title: string;
  content: string;
  approved: boolean;
  createdAt: string;
  updatedAt: string;
  num_reacts: number;
  num_comments: number;
}

export default factories.createCoreController("api::post.post", () => {
  return {
    async listApprovedPosts(ctx) {
      const res = await strapi.db.query("api::post.post").findPage({
        where: { approved: true },
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
