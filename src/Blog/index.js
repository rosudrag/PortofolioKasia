import * as React from 'react';
import Head from 'react-helmet';
import Page from '../layouts/Page';

import {
  createContainer,
  query,
  BodyRenderer
} from '@phenomic/preset-react-app/lib/client';

const PostContent = (props) => {
    const { post } = props;
    return (
    <div className="col-md-12">
        <BodyRenderer>{post.body}</BodyRenderer>
    </div>
    );
};

const getPost = (props, nodeName) => {
    const nodes = props.posts.node.list;
    const node = nodes.find(n => n.id === nodeName);
    return node;
};

let BlogContent = (props) => {
    const post = getPost(props, props.params.splat);
    return (
      <div>
        <Head>
            <title>replace</title>
            <meta name="description" content='replace' />
        </Head>
        <section className="main">
          <div className="container">
              <div className="row">
                <PostContent post={post}/>
              </div>
          </div>
        </section>
      </div>
    );
};

const BlogPost = (props) => {
    const { isLoading } = props;
    const notReady = isLoading || props.posts.node === null;
    const content = notReady ? 'Loading...' : <BlogContent {...props}/>;
    return (
      <Page>
        <Head>
          <title>Loading</title>
          <meta name="description" content="Katarzyna Niedziela Portfolio" />
        </Head>
        {content}
      </Page>
    );
};

const BlogContainer = createContainer(BlogPost, props => {
    return {
        posts: query({ path: 'posts' })
    };
});


export default BlogContainer;
