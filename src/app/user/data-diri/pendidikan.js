"use client";

import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
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
import axios from "axios";
import Cookies from "js-cookie";

const FormPendidikan = ({ setPendidikanData }) => {
   const idPelamar = Cookies.get("id");
  // State to manage form data
  const [pendidikan, setPendidikanTerakhir] = useState("");
  const [nilai_rata, setNilai] = useState("");
  const [jurusan, setJurusan] = useState("");

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchPelamarData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/pelamar/${idPelamar}`
        );
        const data = response.data;

      setPendidikanTerakhir(data.pelamar.pendidikan);
      setNilai(data.pelamar.nilai_rata);
      setJurusan(data.pelamar.jurusan);
      } catch (error) {
        console.error("Error fetching pelamar data:", error);
      }
    };

    fetchPelamarData();
  }, [idPelamar]);
  // Use effect to pass data up to parent whenever state changes
  useEffect(() => {
    setPendidikanData({
      pendidikan,
      nilai_rata,
      jurusan,
    });
  }, [pendidikan, nilai_rata, jurusan, setPendidikanData]);
  return (
    <Card className="w-full mt-5">
      <CardHeader>
        <CardTitle className="text-sm">Pendidikan Terakhir</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you're done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 w-full m">
        <section className="grid gap-6 sm:grid-cols-2 w-full pt-3">
          <article className="grid gap-3">
            <Label htmlFor="jenis_kelamin">Pendidikan Terakhir</Label>
            <Select value={pendidikan} onValueChange={(value) => setPendidikanTerakhir(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select " />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="SMP">SMP</SelectItem>
                  <SelectItem value="SMA">SMA</SelectItem>
                  <SelectItem value="S1">S1</SelectItem>
                  <SelectItem value="D3">D3</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </article>
          <article className="grid gap-3">
            <Label htmlFor="nilai">Nilai</Label>
            <Input
              id="nilai"
              type="number"
              placeholder=""
              value={nilai_rata}
              onChange={(e) => setNilai(e.target.value)}
            />
          </article>
        </section>
        <article className="w-full grid gap-3 ">
          <Label htmlFor="jurusan" className="text-xs mt-4">
            Jurusan/Fakultas
          </Label>
          <Input
            id="jurusan"
            type="text"
            placeholder=""
            value={jurusan}
            onChange={(e) => setJurusan(e.target.value)}
          />
        </article>
      </CardContent>
    </Card>
  );
};

export default FormPendidikan;
