import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import enhanceCollection from 'phenomic/lib/enhance-collection';

const defaultNumberOfPosts = 6;

const LittleBlog = (props) => {
    const { post } = props;
    return (
        <div className="col-sm-6 col-md-4">
            <Link to={`${post.__url}`}>
                <div className="thumbnail rex-blog-section">
                    <img src={post.smallPostImage} alt="Image Alt"/>
                    <div className="rex-caption">
                            <h6>{post.title}</h6>
                        <p>{post.smallPostDescription}</p>
                    </div>
                    <div className="post-meta">
                        {/* <a href="javascript:void(0)"><i className="fa fa-share-alt"></i></a>
                        <a href="javascript:void(0)"><i className="fa fa-comment"></i>20</a>
                        <a href="javascript:void(0)"><i className="fa fa-heart"></i>65</a> */}
                    </div>
                </div>
            </Link>
            
        </div>
    );
};

const postToLittleBlog = (post, index) => {
    return (
        <LittleBlog key={index} post={post}/>
    );
};

const BlogSection = (props, { collection }) => {
    const latestPosts = enhanceCollection(collection, {
        filter: { layout: 'Post' },
        sort: 'date',
        reverse: true
    })
    .slice(0, props.numberOfPosts || defaultNumberOfPosts);

    let postIndex = 0;
    const posts = latestPosts.map(post => postToLittleBlog(post, postIndex++));
    return (
        <div className="active-section" id="blog">
        <section className="section-block">
          <h4 className="title">Latest Blog Posts</h4>
          <div className="row">
            <div className="col-md-12">
                <div id="rex-blog-slider">
                    {posts}
                </div>
            </div>
          </div>
        </section>
      </div>
    );
};

BlogSection.propTypes = {
    numberOfPosts: PropTypes.number
};

BlogSection.contextTypes = {
    collection: PropTypes.array.isRequired
};

export default BlogSection;
