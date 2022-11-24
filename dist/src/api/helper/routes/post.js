"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: "GET",
            path: "/posts/approved",
            handler: "post.listApprovedPosts",
        },
        {
            method: "GET",
            path: "/posts/mine",
            handler: "post.listMyPosts",
        },
    ],
};
