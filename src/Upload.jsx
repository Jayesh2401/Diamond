import React, { useState } from "react";
import Compressor from "compressorjs";

const Upload = () => {
  const [compressedFile, setCompressedFile] = useState(null);

  const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.6,
      success: (compressedResult) => {
        setCompressedFile(compressedResult);
      },
    });
  };

  return (
    <>
      <input
        accept="image/*,capture=camera"
        capture="”camera"
        type="file"
        onChange={(event) => handleCompressedUpload(event)}
      />

      {compressedFile && (
        <img
          src={URL.createObjectURL(compressedFile)}
          alt="Compressed Image"
          style={{ height: "100vh", width: "100vw" }}
        />
      )}
    </>
  );
};

export default Upload;
