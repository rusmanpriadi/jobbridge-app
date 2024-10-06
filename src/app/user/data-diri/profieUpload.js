"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "../../../components/ui/button";

const ProfilePhotoUpload = () => {
  const [photo, setPhoto] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPhoto(null);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
        {photo ? (
          <Image
            src={photo}
            alt="Profile Photo"
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-400">
            No Photo
          </div>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        className="hidden"
      />

      <Button onClick={handleUploadClick} variant="outline">
        {photo ? "Change Photo" : "Upload Photo"}
      </Button>

      {photo && (
        <Button onClick={() => setPhoto(null)} variant="destructive">
          Remove Photo
        </Button>
      )}
    </div>
  );
};

export default ProfilePhotoUpload;
