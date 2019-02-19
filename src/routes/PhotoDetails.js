import React, { PureComponent } from "react";
import { Comment, Avatar } from "antd";
import moment from "moment";
import { Col, Row } from "antd";
import posts from "../mockPosts";
import Photo from "../components/Photo";
import CommentList from "../components/ComentList";
import CommentForm from "../components/ComentForm";

export default class PhotoDetails extends PureComponent {
  state = {
    post: {},
    comments: [],
    submitting: false,
    value: ""
  };

  componentDidMount() {
    const { params } = this.props.match;

    const post = posts.find(post => post.id === params.postId);

    this.setState({
      post
    });
  }

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: "",
        comments: [
          {
            author: "Han Solo",
            avatar:
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow()
          },
          ...this.state.comments
        ]
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  _renderCommentList = () => {
    const { comments } = this.state;

    return comments.length > 0 && <CommentList comments={comments} />;
  };

  render() {
    const { submitting, value, post } = this.state;

    return (
      <div>
        <Row gutter={40}>
          <Col key={`image_col`} span={10}>
            <Photo {...post} />
          </Col>
          <Col key={`comments_col`} span={14}>
           { this._renderCommentList() }

            <Comment
              avatar={
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
                />
              }
              content={
                <CommentForm
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                  submitting={submitting}
                  value={value}
                />
              }
            />
          </Col>
        </Row>
      </div>
    );
  }
}
