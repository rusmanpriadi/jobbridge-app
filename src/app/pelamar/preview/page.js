import React from "react";

import {
  HiOutlineViewColumns,
  HiMiniSignal,
  HiOutlineCube,
  HiOutlineCheck,
  HiOutlineEyeDropper,
  HiOutlineFunnel,
  HiOutlineBeaker,
  HiMiniCheckBadge,
  HiMiniClock,
  HiOutlineBuildingOffice,
  HiOutlineCubeTransparent,
  HiOutlineCodeBracket,
  HiMiniXCircle,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";
import { GiPlainCircle  } from "react-icons/gi";
import PelamarDetailView from "./PelamarDetailView";
export const statusMap = {
  Lulus: {  color: "text-green-600 bg-green-100" }, iconColor: "bg-green-400 text-green-600",
  Proses: {  color: "text-yellow-600 bg-yellow-100" }, iconColor: "text-yellow-600 bg-green-100  ",
  Ditolak: {  color: "text-red-600 bg-red-100" }, iconColor: "bg-red-400  ",
  Warning: {
    color: "text-orange-600 bg-orange-100",
  }, iconColor: "bg-orange-400 text-orange-600",
  // Tambahkan status lainnya sesuai kebutuhan
};
const Preview = ({ img, name, formasi, status }) => {
 
  return (
    <section>
      <article className="flex items-center space-x-3">
        <img
          src={`${`http://127.0.0.1:8000/storage/pelamar/${img}`}`}
          alt="image"
          className="rounded-full w-[50px] h-[50px] object-cover"
        />
        <div>
          <div className="flex items-center space-x-3">
            <h4 className="text-xl font-semibold">{name}</h4>
            <div
              className={`flex  items-center ${statusMap[status].color} space-x-1 px-2 py-1 text-[10px] font-medium  rounded-full `}
            >
              <GiPlainCircle className={`w-1 h-1 rounded-full `} />
              <p> {status}</p>
            </div>
          </div>
          <p className="text-sm">{formasi}</p>
        </div>
      </article>
      <article className="flex itemms-center w-full mt-5 border-dashed border-muted font-medium border-slate-200 rounded-lg">
        <div className="p-4 px-6 w-full  text-xs border-r">
          <h4 className="text-muted-foreground"> SKD</h4>
          <p className="text-xl font-semibold">90</p>
        </div>
        <div className="p-4 px-6 w-full  text-xs   border-r">
          <h4 className="text-muted-foreground"> SKB</h4>
          <p className="text-xl font-semibold">85</p>
        </div>
        <div className="p-4 px-6 w-full  text-xs   border-r">
          <h4 className="text-muted-foreground">Wawancara</h4>
          <p className="text-xl font-semibold">70</p>
        </div>
        <div className="p-4 px-6 w-full  text-xs  ">
          <h4 className="text-muted-foreground"> Peringkat</h4>
          <p className="text-xl font-semibold">14</p>
        </div>
      </article>
      <article>
        <PelamarDetailView />
      </article>
    </section>
  );
};

export default Preview;
