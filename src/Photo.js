import React, { PureComponent } from "react";
import { Card, Icon } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

export default class Photo extends PureComponent {
  render() {
    const {
      id,
      imgSrc,
      caption,
      likes,
      comments = {},
      i,
      onLikeIncrement
    } = this.props;

    return (
      <Card
        hoverable
        style={{ width: 300 }}
        cover={<img alt="example" src={imgSrc} />}
        actions={[
          <b>
            {likes} <Icon type="heart" onClick={() => onLikeIncrement(i)} />
          </b>,
          <span>
            {comments[id] ? comments[id].length : 0} <Icon type="message" />
          </span>
        ]}
      >
        <Link to={`/feed/2/${id}`}>
          <Meta description={caption} />
        </Link>
      </Card>
    );
  }
}
