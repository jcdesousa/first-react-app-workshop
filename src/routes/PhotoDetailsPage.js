import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Comment, Avatar } from "antd";
import moment from "moment";
import { Col, Row } from "antd";
import Photo from "../components/Photo";
import CommentList from "../components/ComentList";
import CommentForm from "../components/ComentForm";
import mockPosts from "../mockPosts";
import base from "../rebase";
import { addComent, likeIncrement } from "../utils/rebaseUtils";

export default class PhotoDetailsPage extends PureComponent {
    static propTypes = {
        match: PropTypes.object.isRequired
    }

    state = {
        value: "",
        posts: [],
        loading: true
    };

    componentDidMount() {
        this.ref = base.syncState("/posts", {
            context: this,
            asArray: true,
            state: "posts",
            defaultValue: mockPosts,
            then: () => {
                this.setState({ loading: false });
            }
        });
    }

    _onSubmit = () => {
        if (!this.state.value) {
            return;
        }

        const posts = addComent(this.state.posts, this.props.match.params.postId, {
            author: "Han Solo",
            avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            content: this.state.value,
            datetime: moment().fromNow()
        });

        this.setState({
            value: "",
            posts
        });
    };

    _onLikeIncrement = () => {
        const posts = likeIncrement(this.state.posts, this.props.match.params.postId);

        this.setState({
            posts
        });
    };

    _onCommentChange = (e) => {
        this.setState({
            value: e.target.value
        });
    };

    _renderCommentList = (post) => {
        const { comments } = post;

        return Array.isArray(comments) && comments.length > 0 && <CommentList comments={comments} />;
    };

    render() {
        const { value, loading } = this.state;

        if (loading) {
            return "Loading...";
        }

        const post = this.state.posts.find((postElement) => postElement.id === this.props.match.params.postId);

        return (
            <div>
                <Row gutter={40}>
                    <Col key={"image_col"} span={10}>
                        <Photo {...post} onLikeIncrement={this._onLikeIncrement} />
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
                                    onChange={this._onCommentChange}
                                    onSubmit={this._onSubmit}
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
