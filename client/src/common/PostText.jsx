import React from 'react'

const PostText = props =>(
  <textarea onClick={props.onClick} name={props.name} style={props.style} className="form-control postText ui-autocomplete-input" cols="8" placeholder={props.placeholder} dir="auto">
  </textarea>
)
export default PostText