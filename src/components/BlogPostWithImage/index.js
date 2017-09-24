import React from 'react';
import { BodyContainer } from 'phenomic';


const BlogPostWithImage = (props) => {
    const { title, date } = props.head;
    const { body } = props;
    const postDate = date ? new Date(date) : null;
    return (
    <section className="main single-blog">
		<div className="container">
			<div className="row">
				<div className="col-md-12 select-blog-list">
					<img className="img-responsive" src="http://placehold.it/1140x673" alt=""/>
					<div className="single-blog-list">
						<div className="blog-title">
							<h3>{title}</h3>
							<span>{postDate.toDateString()}</span>
						</div>
                        <BodyContainer>
						    {body}
                        </BodyContainer>
					</div>

				</div>

			</div>
		</div>
	</section>
    );
};

export default BlogPostWithImage;
