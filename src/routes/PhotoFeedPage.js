import React, { PureComponent } from "react";
import PhotoFeed from "../components/PhotoFeed";
import posts from "../mockPosts";

export default class PhotoFeedPage extends PureComponent {
  state = {
    posts
  };

  handleLikeIncrement = index => {
    const post = this.state.posts[index];

    post.likes = post.likes + 1;

    this.setState({
      posts : [
        ...this.state.posts
      ]
    })
  }

  render() {
    return (
      <PhotoFeed
        posts={this.state.posts}
        onLikeIncrement={this.handleLikeIncrement}
      />
    );
  }
}
