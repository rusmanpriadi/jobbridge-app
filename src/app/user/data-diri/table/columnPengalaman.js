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


  const ColumnPengalaman = [
    {
      accessorKey: "No",
      header: () => <div className="">No</div>,
      cell: ({ row }) => <div className="lowercase text-xs">{row.index + 1}</div>,
    },
    {
      accessorKey: "namaPerusahaan",
      header: () => <div className="">Nama Perusahaan</div>,
      cell: ({ row }) => (
        <div className="lowercase text-xs w-full max-w-[650px]">
          {row.getValue("namaPerusahaan")}
        </div>
      ),
    },
    {
      accessorKey: "jabatan",
      header: () => <div className="">Jabatan</div>,
      cell: ({ row }) => (
        <div className="lowercase text-xs w-full max-w-[650px]">
          {row.getValue("jabatan")}
        </div>
      ),
    },
    {
      accessorKey: "industri",
      header: () => <div className="">Bidang Industri</div>,
      cell: ({ row }) => (
        <div className="lowercase text-xs w-full max-w-[650px]">
          {row.getValue("industri")}
        </div>
      ),
    },
    {
      accessorKey: "mulaiKerja",
      header: () => <div className="">Mulai Bekerja</div>,
      cell: ({ row }) => (
        <div className="lowercase text-xs w-full max-w-[650px]">
          {row.getValue("mulaiKerja")}
        </div>
      ),
    },
    {
      accessorKey: "selesaiKerja",
      header: () => <div className="">Selesai Bekerja</div>,
      cell: ({ row }) => (
        <div className="lowercase text-xs w-full max-w-[650px]">
          {row.getValue("selesaiKerja")}
        </div>
      ),
    },
    // {
    //   accessorKey: "gaji",
    //   header: () => <div className="">Gaji Terakhir</div>,
    //   cell: ({ row }) => (
    //     <div className="lowercase text-xs w-full max-w-[650px]">
    //       {row.getValue("gaji")}
    //     </div>
    //   ),
    // },
    // {
    //   accessorKey: "suratPengalaman",
    //   header: () => <div className="">Surat Pengalaman Kerja</div>,
    //   cell: ({ row }) => (
    //     <div className="lowercase text-xs w-full max-w-[650px]">
    //       {row.getValue("suratPengalaman")}
    //     </div>
    //   ),
    // },

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
              Delete
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="none"
                  className="text-xs py-2 px-4 text-slate-800 bg-white  hover:bg-muted"
                >
                  Edit
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>Upload Documents</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  asas
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

export default ColumnPengalaman