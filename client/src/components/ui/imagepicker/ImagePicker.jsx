import React, { useRef, useState } from "react";
import avatar from "../../../assets/EmptyAvatar.png";

function ImagePicker({ type = "avatar", setImage }) {
  const inputRef = useRef();
  const [currentImage, setCurrentImage] = useState();
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setCurrentImage(file);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-36 h-36 rounded-full p-[2px] border-[1px] cursor-pointer overflow-hidden">
        {type === "avatar" ? (
          <img
            src={currentImage ? URL.createObjectURL(currentImage) : avatar}
            alt=""
            onClick={handleImageClick}
            className="w-full h-full bg-cover rounded-full"
          />
        ) : (
          <img src={logo} alt="" onClick={handleImageClick} />
        )}
      </div>
      <input
        type="file"
        ref={inputRef}
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
}

export default ImagePicker;
