import ClientLayout from "@/components/layout/ClientLayout";
import React from "react";
import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineComputerDesktop,
  HiOutlineCubeTransparent,
  HiOutlineMap,
  HiOutlineScale,
} from "react-icons/hi2";
const Home = () => {
  return (
    <ClientLayout className="w-full ">
      <div className=" px-8 mt-5 w-full">
        <p className="text-md">
          Welcome,{" "}
          <span className="text-lg font-semibold text-red-500">
            Rusman Priadi
          </span>
        </p>
        <span className="text-xs text-muted-foreground">Selamar datang di website rekrutmen karyawan Rumah Sakit Universitas Hasanuddin </span>
        <div className="flex items-center mt-8 flex-wrap">
          <div className="flex items-center  relative">
            <div className="rounded-xl px-3 w-[180px] h-[150px]  transition duration-500 ease-in-out flex flex-col items-center justify-center border-2  space-y-3 bg-red-400 hover:bg-red-500  text-white">
              <HiOutlineClipboardDocumentCheck className="w-8 h-8 " />
              <p className="text-sm text-white">Registration Berkas</p>
            </div>
          </div>
          <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-red-400"></div>
          <div className="flex items-center  relative ">
            <div className="rounded-xl px-3 w-[180px] h-[150px] justify-center transition duration-500 ease-in-out flex flex-col items-center text-center border-2 border-muted space-y-3 bg-red-400 hover:bg-red-500  text-white">
              <HiOutlineComputerDesktop className="w-8 h-8 " />
              <p className="text-sm">Seleksi Kemampuan Dasar (SKD)</p>
            </div>
          </div>
          <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-red-400 "></div>
          <div className="flex items-center  relative ">
            <div className="rounded-xl px-3 w-[180px] h-[150px] justify-center transition duration-500 ease-in-out flex flex-col items-center text-center border-2 border-muted space-y-3 text-slate-400">
              <HiOutlineCubeTransparent className="w-8 h-8  " />
              <p className="text-sm">Seleksi Kemampuan Bidang (SKB)</p>
            </div>
          </div>
          <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-slate-400"></div>
          <div className="flex items-center  relative">
            <div className="rounded-xl px-3 w-[180px] h-[150px]   justify-center transition duration-500 ease-in-out flex flex-col items-center border-2 border-muted space-y-3 text-slate-400">
              <HiOutlineMap className="w-8 h-8 " />
              <p className="text-sm">Wawancara</p>
            </div>
          </div>
          <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-slate-400"></div>
          <div className="flex items-center  relative">
            <div className="rounded-xl px-3 w-[180px] h-[150px] justify-center transition duration-500 ease-in-out flex flex-col items-center border-2 border-muted space-y-3 text-slate-400">
              <HiOutlineScale className="w-8 h-8 " />
              <p className="text-sm">Hasil</p>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Home;
