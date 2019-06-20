import React from "react";
import Image from "../Image/Image";

const ImageList = ({ pictures, lastIndex }) => {
  return (
    <>
      {pictures.map((id, index) => {
        if (index >= lastIndex && index < lastIndex + 3) {
          return <Image key={index} id={id} />;
        }
      })}
    </>
  );
};

export default ImageList;
