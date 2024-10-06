import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import Image from "next/image";
const CardFormasi = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 space-y-5 w-full sm:px-10 mt-16 px-3 ">
      <div>
        <Image
          src="/images/poster.jpg"
          alt="poster"
          width={550}
          height={600}
          className="rounded-3xl"
        />
      </div>
      <Card x-chunk="dashboard-07-chunk-0" className="w-full">
        <CardHeader>
          <CardTitle>Formasi Details</CardTitle>
          <CardDescription>
            Lipsum dolor sit amet, consectetur adipiscing elit
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6">
          <div className="grid gap-6 h-full ">
            <div className="grid gap-3">
              <Label htmlFor="name">Name Formasi</Label>
              <Select>
                <SelectTrigger className="text-sm">
                  <SelectValue
                    placeholder="Select a fruit"
                    className="text-sm"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana" className="text-sm">
                      Pelaksana Pembayaran Jaminan Kesehatan – Costing
                    </SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Kualifikasi </Label>
              <Textarea
                id="description"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                className="min-h-32"
              />
            </div>
            <Button className="w-full bottom-0 ">Daftar</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardFormasi;
