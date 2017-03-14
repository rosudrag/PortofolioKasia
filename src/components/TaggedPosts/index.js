import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PagesList from "../../components/PagesList"

import styles from "./index.css"

const defaultNumberOfPosts = 6

const TaggedPosts = (props, { collection }) => {
  const taggedPosts = enhanceCollection(collection, {
    filter: { layout: "Post", tags: props.tags },
    sort: "date",
    reverse: true,
  })
  .slice(0, props.numberOfPosts || defaultNumberOfPosts)

  return (
    <div>
      <h2 className={ styles.latestPosts }>
        { props.title + " Posts" }
      </h2>
      <PagesList pages={ taggedPosts } />
    </div>
  )
}

TaggedPosts.propTypes = {
  numberOfPosts: PropTypes.number,
  tags: PropTypes.string,
  title: PropTypes.string
}

TaggedPosts.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default TaggedPosts
