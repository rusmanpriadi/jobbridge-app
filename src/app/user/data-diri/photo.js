"use client";

import React, { useState, useRef } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import { Input } from "../../../components/ui/input";

/*************  ✨ Codeium Command ⭐  *************/
/**
 * FormPhoto component.
 *
 * FormPhoto is a component that renders a form with file input,
 * a preview of the uploaded photo, and buttons to upload and remove the photo.
 *
 * @returns {React.ReactElement} The FormPhoto component.
 */
/******  2a16d8ce-23c7-45d4-a319-6a55efbe1bc1  *******/const FormPhoto = () => {
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
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-sm">Foto Profile</CardTitle>
      </CardHeader>
      <CardContent className="relative space-y-2 w-full  mt-2 flex items-center flex-col justify-between">
        <div className="relative w-[170px] h-[170px] rounded-full overflow-hidden border-2 border-gray-300">
          {photo ? (
            <Image
              src={photo}
              alt="Profile Photo"
              layout="fill"
              objectFit="cover"
              className=" w-full rounded-lg max-w-[170px]  h-[170px] object-cover"
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
          onChange={handleFileChange}
          ref={fileInputRef}

          className="hidden"
        />
        <div className="flex items-center space-x-4">
        <Button
          vaiant="outline"
          size="none"
          type="file"
          className="bg-indigo-500 hover:bg-indigo/85 hover:text-white text-white text-xs px-5 py-2 shadow-lg"
          onClick={handleUploadClick}
        >
          {photo ? "Change Photo" : "Upload Photo"}
        </Button>
        {photo && (
          <Button
            onClick={() => setPhoto(null)}
            variant="outline"
            size="none"
            className="bg-red-500 hover:bg-indigo/85 hover:text-white text-white text-xs px-5 py-2 shadow-lg"
            >
            Remove Photo
          </Button>
        )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FormPhoto;
