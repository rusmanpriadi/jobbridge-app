"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

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
          console.error("Failed to fetch pelamar details:", error);
        }
      }

      fetchPelamar();
    }, [id]); // Dependency pada ID agar data diambil ulang saat ID berubah

    if (!pelamar) {
      return <div>Loading...</div>; // Tampilkan loading jika data belum ada
    }
  return (
    <div className="bg-slate-500 w-96 text-center my-20 p-10 mx-20">
      <h1>
        The Product ID is <b>{pelamar.id}</b>
      </h1>
      <h4>{pelamar.name}</h4>
      <img
        src={`${`http://127.0.0.1:8000/storage/posts/${pelamar.image}`}`}
        alt={pelamar.name}
        width={200}
        height={200}
      />
    </div>
  );
};

export default Details;
