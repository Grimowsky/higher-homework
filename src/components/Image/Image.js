import React from "react";

function Image(props) {
  const { id } = props;
  return <img alt="" src={`http://source.unsplash.com/${id}`} />;
}

export default Image;
