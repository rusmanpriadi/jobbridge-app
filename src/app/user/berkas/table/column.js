import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../components/ui/dialog";

import { Button } from "../../../../components/ui/button";

import {
  HiOutlineCloudArrowUp,
  HiOutlineCheckCircle,
  HiOutlineExclamationTriangle  ,
} from "react-icons/hi2";
import { Label } from "../../../../components/ui/label";

  const columns = [
  {
    accessorKey: "No",
    header: () => <div className="">No</div>,
    cell: ({ row }) => <div className="lowercase">{row.index + 1}</div>,
  },
  {
    accessorKey: "jenisBerkas",
    header: () => <div className="">Jenis Berkas</div>,
    cell: ({ row }) => <div className="lowercase w-full max-w-[650px]">{row.getValue("jenisBerkas")}</div>,
  },
  {
    accessorKey: "status",
    header: () => <div className="text-center">Status</div>,
    cell: ({ row }) => {
        const status = row.getValue("status");
        let textColor = ""; // default class for text size
        let icontStatus = <HiOutlineCheckCircle />; 

        if (status === "Belum diunggah") {
          textColor = " text-red-500 "; // Tailwind class for red text
          icontStatus = <HiOutlineExclamationTriangle   className="w-3 h-3" />
        } else if (status === "Sudah diunggah") {
          textColor = " text-green-500 "; // Tailwind class for green text
          icontStatus = <HiOutlineCheckCircle className="w-3 h-3" />; 
        }
      return <div className={`font-medium text-[11px] px-3 py-1 rounded-full flex items-center space-x-1 ${textColor}`}><span>{icontStatus}</span>
      <span>{status}</span>
      </div>;
    },
  },
  {
    id: "actions",
    header: () => <div className="text-center">Aksi</div>,
    cell: ({ row }) => {
      return (
        <div className="w-full flex space-x-2 items-center justify-end">
          <Button
            variant="outline"
            size="none"
            className="py-2 px-4 text-xs  text-slate-800 bg-white  hover:bg-muted"
          >
            {/* <HiOutlineEye className="text-lg  font-semibold text-slate-900 hover:text-slate-500" /> */}
            Lihat
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="none"
                className="text-xs py-2 px-4 text-slate-800 bg-white  hover:bg-muted"
              >
                Unggah
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Upload Documents</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Label
                  className="flex flex-col items-center justify-center px-10 py-10 border-dashed border-2 border-sky-500"
                  for="file"
                >
                  <HiOutlineCloudArrowUp className="w-20 h-20 text-sky-500" />
                  <span className="text-xs">Drag and drop file to upload</span>
                  <span className="mt-8 px-4 py-1 rounded-lg cursor-pointer shadow-sm border border-slate-700 text-sm font-medium ">
                    Select file
                  </span>
                  <input type="file" id="file" className="hidden"/>
                </Label>
                <span className="text-xs text-slate-600 mt-3">
                  Maximum 2mb, format(.pdf)
                </span>
              </div>
              {/* <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter> */}
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];

export default columns