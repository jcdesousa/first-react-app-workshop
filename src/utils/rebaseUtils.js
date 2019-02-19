import { union, clone } from "lodash";

export function likeIncrement(posts, postId) {
    const clonedPosts = clone(posts);

    const post = clonedPosts.find(({ id }) => id === postId);

    post.likes = post.likes + 1;

    return clonedPosts;
}

export function addComent(posts, postId, commentObject) {
    const clonedPosts = clone(posts);

    const post = clonedPosts.find(({ id }) => id === postId);

    // It's important to create a new array so that PureComponent knows it needs to re-render
    post.comments = union(post.comments, [commentObject]);

    return clonedPosts;
}
