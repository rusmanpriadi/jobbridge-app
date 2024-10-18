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
import { Textarea } from "../../../components/ui/textarea";

const InfoLanjutan = ({ setInfoLanjutan }) => {
     const idPelamar = Cookies.get("id");
  const [agama, setAgama] = useState("");
  const [domisili, setDomisili] = useState("");
  const [alamatLengkap, setAlamatLengkap] = useState("");

  useEffect(() => {
    const fetchPelamarData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/pelamar/${idPelamar}`
        );
        const data = response.data;

        // Update state dengan data yang diterima
        setAgama(data.pelamar?.agama ?? "");
        setDomisili(data.pelamar?.domisili ?? "");
        setAlamatLengkap(data.pelamar?.alamat_lengkap ?? "");
      } catch (error) {
        console.error("Error fetching pelamar data:", error);
      }
    };

    fetchPelamarData();
  }, [idPelamar]);

  useEffect(() => {
    setInfoLanjutan({
      agama,
      domisili,
      alamat_lengkap: alamatLengkap,
    });
  }, [agama, domisili, alamatLengkap, setInfoLanjutan]);

  return (
    <Card className="w-full mt-5 col-span-2">
      <CardHeader>
        <CardTitle className="text-sm">Informasi Lanjutan</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you're done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 w-full m">
        <section className="grid gap-6 sm:grid-cols-2 w-full pt-3">
          <article className="grid gap-3">
            <Label htmlFor="agama">Agama</Label>
            <Select value={agama} onValueChange={setAgama}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select " />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Islam">Islam</SelectItem>
                  <SelectItem value="Kristen">Kristen</SelectItem>
                  <SelectItem value="Hindu">Hindu</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </article>
          <article className="grid gap-3">
            <Label htmlFor="domisili">Domisili</Label>
            <Input id="domisili" type="text" placeholder="Domisili" value={domisili} onChange={(e) => setDomisili(e.target.value)} />
          </article>
        </section>
        <article className="w-full grid gap-3 ">
          <Label htmlFor="alamat_lengkap" className="text-xs mt-4">
            Alamat Lengkap
          </Label>
          <Textarea placeholder="Type your message here." value={alamatLengkap} onChange={(e) => setAlamatLengkap(e.target.value)} />
        </article>
      </CardContent>
    </Card>
  );
};

export default InfoLanjutan;
