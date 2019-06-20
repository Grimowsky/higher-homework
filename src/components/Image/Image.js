import React from "react";

const Image = ({ id }) => {
  return (
    <div>
      <img alt="" src={`http://source.unsplash.com/${id}`} />
    </div>
  );
};

export default Image;
