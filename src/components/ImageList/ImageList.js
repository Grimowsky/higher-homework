import React from "react";
import Image from "../Image/Image";

function ImageList(props) {
  const { pictures, lastIndex, picturesAmount } = props;
  return (
    <>
      {pictures.slice(lastIndex, lastIndex + picturesAmount).map(id => (
        <Image key={id} id={id} />
      ))}
    </>
  );
}

export default ImageList;
