import React, { PropTypes } from "react"

import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"

import styles from "./index.css"

const defaultTags = "general";

const Post = (props) => {
  // it's up to you to choose what to do with this layout ;)
  const pageDate = props.head.date ? new Date(props.head.date) : null;
  const tags = props.head.tags ? props.head.tags : defaultTags;

  return (
    <Page
      { ...props }
      header={
        <div>
          <header className={ styles.header }>
              {
                pageDate &&
                <time key={ pageDate.toISOString() }>
                  { pageDate.toDateString() }
                </time>
              }
              <span>
                 Tags: { tags }
              </span>
          </header>
        </div>
      }
    >
      <hr />
      <LatestPosts />
    </Page>
  )
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Post
