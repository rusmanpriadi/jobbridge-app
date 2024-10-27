"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import axios from "axios";
import Cookies from "js-cookie";

const FormPhoto = ({ setPhotoData }) => {
  const [photo, setPhoto] = useState(null); // Store File object for upload
  const [photoPreview, setPhotoPreview] = useState(null); // Store base64 for preview
  const fileInputRef = useRef(null);
  const [uploadError, setUploadError] = useState("");
  const id = Cookies.get("id");
  console.log("Photo:", photo);
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        // Check file size (2 MB)
        setUploadError("File size exceeds 2 MB.");
        return;
      }
      if (!file.type.startsWith("image/")) {
        setUploadError("Only image files are allowed.");
        return;
      }

      setPhoto(file); // Store the File object
      setUploadError(""); // Reset error on valid upload

      // Create base64 string for image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPhoto(null);
      setPhotoPreview(null);
    }
  };

  const handleUploadClick = async () => {
    fileInputRef.current.click();
    
  };


   const handleUploadToServer = async () => {
     if (!photo) {
       setUploadError("No photo selected.");
       return;
     }

     const formData = new FormData();
     formData.append("photo", photo); // Append the File object
       formData.append("id", id);

     try {
       console.log("Uploading photo:", photo); // Debugging
        await axios.post(
         `${process.env.NEXT_PUBLIC_API_URL}/api/pelamar/upload`,
         formData,
         {
           headers: {
             "Content-Type": "multipart/form-data",
           },
         }

       );
       console.log("Photo uploaded successfully!");
     } catch (error) {
       setUploadError("Failed to upload photo: " + error.message);
     }
   };


  // useEffect(() => {
  //   setPhotoData({
  //     photo: photoPreview,
  //   });
  // }, [photoPreview, setPhotoData]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-sm">Foto Profile</CardTitle>
      </CardHeader>
      <CardContent className="relative space-y-2 w-full mt-2 flex items-center flex-col justify-between">
        <div className="relative w-[170px] h-[170px] rounded-full overflow-hidden border-2 border-gray-300">
          {photoPreview ? (
            <Image
              src={photoPreview}
              alt="Profile Photo"
              layout="fill"
              objectFit="cover"
              className="w-full rounded-lg max-w-[170px] h-[170px] object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-400">
              No Photo
            </div>
          )}
        </div>
        <div className="flex flex-col items-center text-slate-600">
          <p className="text-xs font-semibold">Latar Merah, Max 2 MB</p>
          <p className="text-xs font-semibold pb-3">type : jpg, png</p>
        </div>
        <input
          type="file"
          accept="image/*"
          name="photo"
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden"
        />
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="none"
            className="bg-indigo-500 hover:bg-indigo/85 hover:text-white text-white text-xs px-5 py-2 shadow-lg"
            onClick={handleUploadClick}
          >
            {photo ? "Change Photo" : "Upload Photo"}
          </Button>
          {photo && (
            <Button
              onClick={() => {
                setPhoto(null);
                setPhotoPreview(null);
              }}
              variant="outline"
              size="none"
              className="bg-red-500 hover:bg-indigo/85 hover:text-white text-white text-xs px-5 py-2 shadow-lg"
            >
              Remove Photo
            </Button>
          )}
          <Button
            variant="outline"
            size="none"
            className="bg-green-500 hover:bg-green/85 hover:text-white text-white text-xs px-5 py-2 shadow-lg"
            onClick={handleUploadToServer}
          >
            Upload to Server
          </Button>
        </div>
        {uploadError && <p className="text-red-500 text-xs">{uploadError}</p>}
      </CardContent>
    </Card>
  );
};

export default FormPhoto;
