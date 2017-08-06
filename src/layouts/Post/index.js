import React, { PropTypes } from 'react';

import LatestPosts from '../../components/LatestPosts';
import Page from '../Page';
import PostHeader from './postHeader';

const defaultTags = 'general';

const Post = (props) => {
    const pageDate = props.head.date ? new Date(props.head.date) : null;
    const tags = props.head.tags ? props.head.tags : defaultTags;

    return (
    <Page { ...props } header={
        <PostHeader pageDate={pageDate} tags={tags}/>
      }
      >
      <hr />
      <LatestPosts />
    </Page>
    );
};

Post.propTypes = {
    head: PropTypes.object.isRequired
};

export default Post;
