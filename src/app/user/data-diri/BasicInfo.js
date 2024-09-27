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
  SelectLabel,
} from "../../../components/ui/select";

const BasicInfo = () => {
  const [startDate, setStartDate] = useState(new Date());

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
            <Input id="category" type="text" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="name">Nama Lengkap</Label>
            <Input id="name" type="text" />
          </div>
        </div>
        <section className="grid gap-6 sm:grid-cols-2 w-full pt-2">
          <article className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="example@gmail.com" />
          </article>
          <article className="grid gap-3">
            <Label htmlFor="jenis_kelamin">Jenis Kelamin</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select " />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="pria">Pria</SelectItem>
                  <SelectItem value="wanita">Wanita</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </article>
          <article className="grid gap-3">
            <Label htmlFor="phone">Nomor Telepon</Label>
            <Input id="phone" type="number" />
          </article>
          <article className="grid gap-3">
            <Label htmlFor="ttl">Tempat, Tanggal Lahir (Sesuai KTP)</Label>
            <div className=" gap-2 grid grid-cols-2">
              <Input id="ttl" type="text" />

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
