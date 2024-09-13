"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { Button } from "../../../../components/ui/button";
import { GiPlainCircle } from "react-icons/gi";
import {
  HiMiniCheckBadge,
  HiMiniClock,
  HiMiniXCircle,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";
import { useRouter } from "next/navigation";
import Header from "./Header";

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

const Details = ({ params }) => {
  const id = parseInt(params.id);
  const [applicants, setApplicants] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false); // Loading state
  const router = useRouter();
  useEffect(() => {
    const index = applicants.findIndex(
      (applicant) => applicant.id.toString() === id
    );
    if (index !== -1) {
      setCurrentIndex(index);
    }
  }, [id]);
  useEffect(() => {
    async function fetchApplicants() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/pelamar`);
        setApplicants(response.data);

        const initialIndex = response.data.findIndex(
          (pelamar) => pelamar.id === id
        );
        setCurrentIndex(initialIndex >= 0 ? initialIndex : 0);
      } catch (error) {
        console.error("Failed to fetch applicants:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    }

    fetchApplicants();
  }, [id]);

  const handleNext = () => {
    if (currentIndex < applicants.length - 1) {
      const nextId = applicants[currentIndex + 1].id;
      router.push(`/pelamar/${nextId}`); // Update path
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevId = applicants[currentIndex - 1].id;
      router.push(`/pelamar/${prevId}`); // Update path
    }
  };
  const handleBack = () => {
    router.push("/pelamar");
  };

  const pelamar = applicants[currentIndex];
  const isLastApplicant = currentIndex === applicants.length - 1;
  const isFirstApplicant = currentIndex === 0;

  const StatusStyle = StatusMap[pelamar?.status] || {
    color: "text-gray-600 bg-gray-100",
    icon: GiPlainCircle,
    iconColor: "bg-gray-400 text-gray-600",
  };
  const StatusIcon = StatusStyle.icon;
  return (
    <div>
      <Header
        handlePrev={handlePrev}
        handleNext={handleNext}
        isFirstApplicant={isFirstApplicant}
        isLastApplicant={isLastApplicant}
        handleBack={handleBack}
      />

      <section className="px-4">
        {loading ? (
          <div>Loading ...</div> // Show loading only in the specific section
        ) : (
          <div>
            <div className="flex items-center space-x-4">
              <img
                src={`${`http://127.0.0.1:8000/storage/pelamar/${pelamar?.image}`}`}
                alt="image"
                className="rounded-full w-[60px] h-[60px] object-cover"
              />
              <div>
                <div className="flex items-center space-x-3">
                  <h4 className="text-xl font-semibold">{pelamar?.name}</h4>
                  <div
                    className={`flex items-center space-x-1 px-2 py-1 text-[10px] ${StatusStyle.color} font-medium  rounded-full `}
                  >
                    <div className="flex items-center space-x-1">
                      <StatusIcon className={`w-3 h-3`} />
                      <span>{pelamar?.status}</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-700">{pelamar?.formasi}</p>
              </div>
            </div>

            <div className="mt-10">
              <h1>
                The Product ID is <b>{pelamar?.id}</b>
              </h1>
              <p>{pelamar?.email}</p>
              <p>{pelamar?.status}</p>
              <p>{pelamar?.phone}</p>
              <p>{pelamar?.apply}</p>
              <p>{pelamar?.nik}</p>
              <p>{pelamar?.tempat_lahir}</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Details;
