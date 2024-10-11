"use client";

import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "../../../components/ui/select";
import axios from "axios";
import Cookies from "js-cookie";

const BasicInfo = ({ setBasicInfoData }) => {
  const idPelamar = Cookies.get("id");
  const [startDate, setStartDate] = useState(new Date());
  const [nik, setNik] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [pelamarId, setPelamarId] = useState(idPelamar); // Ini bisa diganti sesuai logika rute dinamis

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchPelamarData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/pelamar/${idPelamar}`
        );
        const data = response.data;

        // Update state dengan data yang diterima
        setNik(data.nik);
        setName(data.name);
        setEmail(data.email);
        setJenisKelamin(data.pelamar.jenis_kelamin);
        setNomorTelepon(data.pelamar.nomor_tlp);
        setTempatLahir(data.pelamar.tempat_lahir);
        setStartDate(new Date(data.pelamar.tgl_lahir));
      } catch (error) {
        console.error("Error fetching pelamar data:", error);
      }
    };

    fetchPelamarData();
  }, [idPelamar]);

  // Update parent component with current state
   // Push data to parent component whenever state changes
  useEffect(() => {
    setBasicInfoData({
      nik,
      name,
      email,
      jenis_kelamin: jenisKelamin,
      nomor_tlp: nomorTelepon,
      tempat_lahir: tempatLahir,
      tgl_lahir: startDate.toISOString().split("T")[0], // Format the date as "YYYY-MM-DD"
    });
  }, [nik, name, email, jenisKelamin, nomorTelepon, tempatLahir, startDate, setBasicInfoData]);
  return (
    <Card className=" col-span-2">
      <CardHeader>
        <CardTitle className="text-sm">Basic information</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you're done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 w-full mt-4">
        <div className="grid gap-6 sm:grid-cols-2 w-full">
          <div className="grid gap-3">
            <Label htmlFor="category">NIK</Label>
            <Input
              id="category"
              type="text"
              value={nik}
              onChange={(e) => setNik(e.target.value)}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="name">Nama Lengkap</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <section className="grid gap-6 sm:grid-cols-2 w-full pt-2">
          <article className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </article>
          <article className="grid gap-3">
            <Label htmlFor="jenis_kelamin">Jenis Kelamin</Label>
            <Select value={jenisKelamin} onValueChange={setJenisKelamin}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select " />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Pria">Pria</SelectItem>
                  <SelectItem value="Wanita">Wanita</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </article>
          <article className="grid gap-3">
            <Label htmlFor="phone">Nomor Telepon</Label>
            <Input
              id="phone"
              type="number"
              value={nomorTelepon}
              onChange={(e) => setNomorTelepon(e.target.value)}
            />
          </article>
          <article className="grid gap-3">
            <Label htmlFor="ttl">Tempat, Tanggal Lahir (Sesuai KTP)</Label>
            <div className=" gap-2 grid grid-cols-2">
              <Input
                id="ttl"
                type="text"
                value={tempatLahir}
                onChange={(e) => setTempatLahir(e.target.value)}
              />

              <div className="relative max-w-sm flex">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Pilih tanggal lahir"
                  maxDate={new Date()}
                  showYearDropdown
                  scrollableYearDropdown
                  yearDropdownItemNumber={100}
                  className={
                    "block w-full px-3 h-10 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xs"
                  }
                />
              </div>
            </div>
          </article>
        </section>
      </CardContent>
    </Card>
  );
};

export default BasicInfo;
