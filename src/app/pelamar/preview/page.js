import React from "react";

import { GiPlainCircle } from "react-icons/gi";
import { HiMiniCheckBadge, HiMiniClock, HiMiniXCircle, HiOutlineExclamationCircle  } from "react-icons/hi2";
import PelamarDetailView from "./PelamarDetailView";
// Status Map
const StatusMap = {
  Lulus: {
    color: "text-green-600 bg-green-100",
    icon: HiMiniCheckBadge,
    iconColor: "bg-green-400 text-green-600",
  },
  Proses: {
    color: "text-yellow-600 bg-yellow-100",
    icon: HiMiniClock,
    iconColor: "bg-yellow-400 text-yellow-600",
  },
  Ditolak: {
    color: "text-red-600 bg-red-100",
    icon: HiMiniXCircle,
    iconColor: "bg-red-400 text-red-600",
  },
  Warning: {
    color: "text-orange-600 bg-orange-100",
    icon: HiOutlineExclamationCircle,
    iconColor: "bg-orange-400 text-orange-600",
  },
};


const Preview = ({
  id,
  img,
  name,
  formasi,
  status,
  tgl_lahir,
  apply,
  phone,
  jenis_kelamin,
  email,
  nik,
}) => {
  // Ambil style dari StatusMap berdasarkan status
  const StatusStyle = StatusMap[status] || {
    color: "text-gray-600 bg-gray-100",
    icont: GiPlainCircle,
    iconColor: "bg-gray-400 text-gray-600",
  };
  const StatusIcon = StatusStyle.icon;
  return (
    <section className="">
      <article className="flex items-center space-x-3 px-4">
        <img
          src={`${`http://127.0.0.1:8000/storage/pelamar/${img}`}`}
          alt="image"
          className="rounded-full w-[50px] h-[50px] object-cover"
        />
        <div>
          <div className="flex items-center space-x-3">
            <h4 className="text-xl font-semibold">{name}</h4>
            <div
              className={`flex items-center space-x-1 px-2 py-1 text-[10px] ${StatusStyle.color} font-medium  rounded-full `}
            >
              {/* <GiPlainCircle className={`w-1 h-1 rounded-full `} /> */}
              <div className="flex items-center space-x-1">
                <StatusIcon className={`w-3 h-3`} />
                <span>{status}</span>
              </div>
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
        <PelamarDetailView
          tgl_lahir={tgl_lahir}
          id={id}
          formasi={formasi}
          status={status}
          jenis_kelamin={jenis_kelamin}
          apply={apply}
          email={email}
          phone={phone}
          nik={nik}
        />
      </article>
    </section>
  );
};

export default Preview;
