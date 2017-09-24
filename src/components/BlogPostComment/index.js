import React from 'react';

const PostComment = () => {
    return (
        <div className="form single-blog-list">
            <h4 className="title">Post a Comment</h4>
            <form className="form">
                <div className="row">
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control col-md-12" placeholder="Name"/>
                    </div>
                    <div className="form-group col-md-6">
                        <input type="email" className="form-control col-md-12" placeholder="Email"/>
                    </div>
                    <div className="col-md-12">
                        <textarea className="form-control" rows="3" placeholder="Message"></textarea>
                    </div>
                    <div className="contact-btn">
                        <a className="btn btn-default rex-primary-btn-effect-No dark-color" href="#" role="button"><span>Cancel</span></a>
                        <a className="btn btn-default rex-primary-btn-effect" href="#" role="button">Send</a>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PostComment;

