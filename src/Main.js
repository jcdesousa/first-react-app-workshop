import React, { PureComponent } from "react";
import PhotoFeed from "./PhotoFeed";
import posts from "./posts";
export default class Main extends PureComponent {
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
