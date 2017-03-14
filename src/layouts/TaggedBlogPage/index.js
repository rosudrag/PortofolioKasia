import React, { PropTypes } from "react";

import TaggedPosts from "../../components/TaggedPosts"
import Page from "../Page"

import warning from "warning"

const TaggedBlogPage = (props) => {
  warning(
    typeof props.head.tags === "string",
    `Your page '${ __filename }' needs tags property such as 'tags: music, dance'`
  )
  return (
    <Page { ...props }>
      <TaggedPosts tags={props.head.tags} title={props.head.title}/>
    </Page>
  )
}

TaggedBlogPage.propTypes = {
  head: PropTypes.object.isRequired
}

export default TaggedBlogPage
