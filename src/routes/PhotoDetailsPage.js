import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Comment, Avatar } from "antd";
import moment from "moment";
import { Col, Row } from "antd";
import Photo from "../components/Photo";
import CommentList from "../components/ComentList";
import CommentForm from "../components/ComentForm";
import { getState, handleAddComent, handleLikeIncrement } from "../app/store";

export default class PhotoDetailsPage extends PureComponent {
    static propTypes = {
        match: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            submitting: false,
            value: ""
        };
    }

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true
        });

        setTimeout(() => {
            handleAddComent(this.props.match.params.postId, {
                author: "Han Solo",
                avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                content: <p>{this.state.value}</p>,
                datetime: moment().fromNow()
            });
            this.setState({
                submitting: false,
                value: ""
            });
        }, 1000);
    };

  handleChange = (e) => {
      this.setState({
          value: e.target.value
      });
  };

  _renderCommentList = (post) => {
      const { comments } = post;

      return comments.length > 0 && <CommentList comments={comments} />;
  };

  render() {
      const { submitting, value } = this.state;
      const post = getState().posts.find((postElement) => postElement.id === this.props.match.params.postId);


      return (
          <div>
              <Row gutter={40}>
                  <Col key={"image_col"} span={10}>
                      <Photo {...post} onLikeIncrement={handleLikeIncrement} />
                  </Col>
                  <Col key={"comments_col"} span={14}>
                      { this._renderCommentList(post) }

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
