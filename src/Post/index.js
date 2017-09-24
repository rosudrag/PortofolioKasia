import React, { PropTypes } from 'react';
import Page from '../Page';
import BlogPostWithoutImage from '../components/BlogPostWithoutImage';

const Post = (props) => {
    return (
        <div>
            <section className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <BlogPostWithoutImage {...props}/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const PostContainer = (props) => {
    return (
    <Page { ...props }>
        <Post {...props}/>
    </Page>
    );
};

PostContainer.propTypes = {
    head: PropTypes.object.isRequired
};

export default PostContainer;
