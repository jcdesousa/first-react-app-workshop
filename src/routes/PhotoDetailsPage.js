import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Comment, Avatar } from "antd";
import moment from "moment";
import { Col, Row } from "antd";
import posts from "../mockPosts";
import Photo from "../components/Photo";
import CommentList from "../components/ComentList";
import CommentForm from "../components/ComentForm";

export default class PhotoDetailsPage extends PureComponent {
  static propTypes = {
      match: PropTypes.object.isRequired
  }

  state = {
      post: posts.find((post) => post.id === this.props.match.params.postId),
      comments: [],
      submitting: false,
      value: ""
  };

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

  handleChange = (e) => {
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
                  <Col key={"image_col"} span={10}>
                      <Photo {...post} />
                  </Col>
                  <Col key={"comments_col"} span={14}>
                      { this._renderCommentList() }

                      <Comment
                          avatar={(
                              <Avatar
                                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                  alt="Han Solo"
                              />
                          )}
                          content={(
                              <CommentForm
                                  onChange={this.handleChange}
                                  onSubmit={this.handleSubmit}
                                  submitting={submitting}
                                  value={value}
                              />
                          )}
                      />
                  </Col>
              </Row>
          </div>
      );
  }
}
