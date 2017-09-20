import React from 'react';
import { Link } from 'react-router';

const LittleBlog = (props) => {
    const { post } = props;
    return (
        <div className="col-sm-6 col-md-4">
            <div className="thumbnail rex-blog-section">
            <img src={post.smallPostImage} alt="..."/>
            <div className="rex-caption">
                <Link to={`/${post.id}/`}>
                    <h6>{post.title}</h6>
                </Link>
                <p>{post.smallPostDescription}</p>
                <Link to={`/${post.id}/`}>Read more</Link>
            </div>
            <div className="post-meta">
                {/* <a href="javascript:void(0)"><i className="fa fa-share-alt"></i></a>
                <a href="javascript:void(0)"><i className="fa fa-comment"></i>20</a>
                <a href="javascript:void(0)"><i className="fa fa-heart"></i>65</a> */}
            </div>
            </div>
        </div>
    );
};

const postToLittleBlog = (post) => {
    return (
        <LittleBlog key={post.id} post={post}/>
    );
};

const BlogSection = (props) => {
    const littleBlogPosts = props.posts.map(post => postToLittleBlog(post));
    return (
        <div className="active-section" id="blog">
        <section className="section-block">
          <h4 className="title">Blog Post</h4>
          <div className="row">
            <div className="col-md-12">
                <div id="rex-blog-slider">
                    {littleBlogPosts}
                </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default BlogSection;
