import React from "react";
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

const FormPhoto = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-sm">Foto Profile</CardTitle>
      </CardHeader>
      <CardContent className="relative space-y-2 w-full  mt-2 flex items-center flex-col justify-between">
        <Image
          src="/images/profile.jpg"
          alt="image"
          width={170}
          height={170}
          className=" w-full rounded-lg max-w-[170px]  h-[170px] object-cover"
        />
        <div className="flex flex-col items-center text-slate-600">
          <p className="text-xs font-semibold">Latar Merah, Max 2 MB</p>
          <p className="text-xs font-semibold pb-3">type : jpg, png</p>
        </div>
        <Button
          vaiant="outline"
          size="none"
          type="file"
          className="bg-indigo-500 hover:bg-indigo/85 hover:text-white text-white text-xs px-8 py-2 shadow-lg"
        >
          Upload Photo
        </Button>
      </CardContent>
    </Card>
  );
};

export default FormPhoto;
