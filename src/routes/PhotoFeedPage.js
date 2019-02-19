import React, { PureComponent } from "react";
import PhotoFeed from "../components/PhotoFeed";
import { getState, handleLikeIncrement } from "../app/store";

export default class PhotoFeedPage extends PureComponent {
    render() {
        return (
            <PhotoFeed
                posts={getState().posts}
                onLikeIncrement={handleLikeIncrement}
            />
        );
    }
}
