import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Photo from "./Photo";
import { Col, Row } from "antd";

const propTypes = {
    posts: PropTypes.array.isRequired,
    onLikeIncrement: PropTypes.func.isRequired
};

class PhotoFeed extends PureComponent {
    render() {
        const { posts, onLikeIncrement } = this.props;

        return (
            <div className="App-body">
                <Row gutter={40}>
                    {posts.map((post, i) => (
                        <Col key={`col_${post.id}`} span={8}>
                            <Photo i={i} {...post} onLikeIncrement={onLikeIncrement} />
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}

PhotoFeed.propTypes = propTypes;

export default PhotoFeed;

