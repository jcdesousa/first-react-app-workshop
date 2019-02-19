import posts from "../mockPosts";
import { union } from "lodash";

export function handleLikeIncrement(postId) {
    const post = posts.find(({ id }) => id === postId);

    post.likes = post.likes + 1;
}

export function handleAddComent(postId, commentObject) {
    const post = posts.find(({ id }) => id === postId);

    // It's important to create a new array so that PureComponent knows it needs to re-render
    post.comments = union(post.comments, [commentObject]);
}

export function getState() {
    return { posts };
}
