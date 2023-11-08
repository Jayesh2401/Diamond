import React, { useState } from "react";
import axios from "axios";
// import tinify from "tinify";
const TinyPNGCompressor = () => {
//   console.log(tinify);
  const [selectedImage, setSelectedImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const compressImage = async () => {
    if (!selectedImage) return;

    try {
      const apiKey = "GQ2p1HHKrRQ04ZJtQScynFG5ZZw96BzZ";
      const formData = new FormData();
      formData.append("file", selectedImage);

      const response = await axios.post(
        `https://api.tinify.com/shrink`,
        formData,
        {
          auth: {
            username: "api",
            password: apiKey,
          },
        }
      );

      setCompressedImage(response.data.output.url);
    } catch (error) {
      console.error("Error compressing image:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={compressImage}>Compress Image</button>
      {compressedImage && <img src={compressedImage} alt="Compressed" />}
    </div>
  );
};

export default TinyPNGCompressor;
