"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { Button } from "../../../components/ui/button";

import { HiArrowLeft, HiChevronDown, HiChevronUp } from "react-icons/hi2";

const Details = ({ params }) => {
  const id = params.id;
  const [pelamar, setPelamar] = useState(null);

  useEffect(() => {
    async function fetchPelamar() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/pelamar/${id}`
        );
        setPelamar(response.data);
      } catch (error) {
        // console.error("Failed to fetch pelamar details:", error);
      }
    }

    fetchPelamar();
  }, [id]); // Dependency pada ID agar data diambil ulang saat ID berubah

  if (!pelamar) {
    return <div>Loading...</div>; // Tampilkan loading jika data belum ada
  }
  return (
    <div className=" ">
      <header className="px-5 py-3 flex items-center justify-between h-[70px] w-full ">
        <div className="flex items-center space-x-3">
          <HiArrowLeft className="cursor-pointer text-lg" />
          <section className="flex items-center space-x-2">
            <div className=" p-[1px] rounded-full border border-slate-300">
              <HiChevronDown className="cursor-pointer text-lg  font-semibold text-slate-900 " />
            </div>
            <div className=" p-[1px] rounded-full border border-slate-300">
              <HiChevronUp className="cursor-pointer text-lg  font-semibold text-slate-900 " />
            </div>
          </section>
        </div>
        <Button className="text-xs">Add Pelamar</Button>
      </header>
      <section className="px-4">
        <div className="flex items-center space-x-4">
          <img
            src={`${`http://127.0.0.1:8000/storage/pelamar/${pelamar.image}`}`}
            alt="image"
            className="rounded-full w-[80px] h-[80px] object-cover"
          />
          <div>
            <h4 className="text-2xl font-semibold">{pelamar.name}</h4>
            <p className="text-md text-slate-7     00">{pelamar.formasi}</p>
          </div>
        </div>

        <div className="mt-10">
          <h1>
            The Product ID is <b>{pelamar.id}</b>
          </h1>
          <p>{pelamar.email}</p>
          <p>{pelamar.status}</p>
          <p>{pelamar.phone}</p>
          <p>{pelamar.apply}</p>
          <p>{pelamar.nik}</p>
          <p>{pelamar.tempat_lahir}</p>
        </div>
      </section>
    </div>
  );
};

export default Details;
