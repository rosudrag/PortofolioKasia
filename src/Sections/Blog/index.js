import React from 'react';

const BlogSection = (props) => {
    return (
        <div className="active-section" id="blog">
        <section className="section-block">
          <h4 className="title">Blog Post</h4>
          <div className="row">
            <div className="col-md-12">
              <div id="rex-blog-slider">
                <div className="col-sm-6 col-md-4">
                  <div className="thumbnail rex-blog-section">
                    <img src="http://placehold.it/312x184" alt="..."/>
                    <div className="rex-caption">
                      <a href="single-blog.html">
                        <h6>Standard blog post with image </h6>
                      </a>
                      <p>Lorem ipsum dolor sit amet, consectetur nos trud exercitation ullamco.</p>
                      <a href="javascript:void(0)" className="">Read more</a>
                    </div>
                    <div className="post-meta">
                      <a href="javascript:void(0)"><i className="fa fa-share-alt"></i></a>
                      <a href="javascript:void(0)"><i className="fa fa-comment"></i>20</a>
                      <a href="javascript:void(0)"><i className="fa fa-heart"></i>65</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="thumbnail rex-blog-section">
                    <img src="http://placehold.it/312x184" alt="..."/>
                    <div className="rex-caption">
                      <a href="single-blog.html">
                        <h6>Standard blog post with image </h6>
                      </a>
                      <p>Lorem ipsum dolor sit amet, consectetur nos trud exercitation ullamco.</p>
                      <a href="javascript:void(0)" className="">Read more</a>
                    </div>
                    <div className="post-meta">
                      <a href="javascript:void(0)"><i className="fa fa-share-alt"></i></a>
                      <a href="javascript:void(0)"><i className="fa fa-comment"></i>20</a>
                      <a href="javascript:void(0)"><i className="fa fa-heart"></i>65</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="thumbnail rex-blog-section">
                    <img src="http://placehold.it/312x184" alt="..."/>
                    <div className="rex-caption">
                      <a href="single-blog.html">
                        <h6>Standard blog post with image </h6>
                      </a>
                      <p>Lorem ipsum dolor sit amet, consectetur nos trud exercitation ullamco.</p>
                      <a href="javascript:void(0)" className="">Read more</a>
                    </div>
                    <div className="post-meta">
                      <a href="javascript:void(0)"><i className="fa fa-share-alt"></i></a>
                      <a href="javascript:void(0)"><i className="fa fa-comment"></i>20</a>
                      <a href="javascript:void(0)"><i className="fa fa-heart"></i>65</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default BlogSection;
