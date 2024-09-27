"use client"

import React, { useEffect, useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../../components/ui/select'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card'
import { Input } from '../../../components/ui/input'


 const Alamat = () => {
     const [provinsi, setProvinsi] = useState([]);
     const [selectedProvinsi, setSelectedProvinsi] = useState("");
     const [kabupaten, setKabupaten] = useState([]);
     const [selectedKabupaten, setSelectedKabupaten] = useState("");
     const [kecamatan, setKecamatan] = useState([]);
     const [selectedKecamatan, setSelectedKecamatan] = useState("");
     const [kelurahan, setKelurahan] = useState([]);
     const [selectedKelurahan, setSelectedKelurahan] = useState("");

     // Simulasi API Call untuk mendapatkan data provinsi
     useEffect(() => {
       async function fetchProvinsi() {
         try {
           const response = await fetch(
             `https://api.goapi.io/regional/provinsi?api_key=${process.env.NEXT_PUBLIC_API_KEY_WILAYAH}`
           );
           const result = await response.json();
           if (result.status === "success") {
             setProvinsi(result.data);
           }
         } catch (error) {
           console.error("Error fetching provinsi:", error);
         }
       }
       fetchProvinsi();
     }, []);

     // Ketika provinsi dipilih, muat data kabupaten
     useEffect(() => {
       if (selectedProvinsi) {
         async function fetchKabupaten() {
           try {
             const response = await fetch(
               `https://api.goapi.io/regional/kota?provinsi_id=${selectedProvinsi}&api_key=${process.env.NEXT_PUBLIC_API_KEY_WILAYAH}`
             );
             const result = await response.json();
             if (result.status === "success") {
               setKabupaten(result.data);
             }
           } catch (error) {
             console.error("Error fetching kabupaten:", error);
           }
         }
         fetchKabupaten();
       }
     }, [selectedProvinsi]);

     // Ketika kabupaten dipilih, muat data kecamatan
     useEffect(() => {
       if (selectedKabupaten) {
         async function fetchKecamatan() {
           try {
             const response = await fetch(
               `https://api.goapi.io/regional/kecamatan?kota_id=${selectedKabupaten}&api_key=${process.env.NEXT_PUBLIC_API_KEY_WILAYAH}`
             );
             const result = await response.json();
             if (result.status === "success") {
               setKecamatan(result.data);
             }
           } catch (error) {
             console.error("Error fetching kecamatan:", error);
           }
         }
         fetchKecamatan();
       }
     }, [selectedKabupaten]);

     // Fetch data kelurahan when kecamatan is selected
     useEffect(() => {
       if (selectedKecamatan) {
         async function fetchKelurahan() {
           try {
             const response = await fetch(
               `https://api.goapi.io/regional/kelurahan?kecamatan_id=${selectedKecamatan}&api_key=${process.env.NEXT_PUBLIC_API_KEY_WILAYAH}`
             );
             const result = await response.json();
             if (result.status === "success") {
               setKelurahan(result.data);
             }
           } catch (error) {
             console.error("Error fetching kelurahan:", error);
           }
         }
         fetchKelurahan();
       }
     }, [selectedKecamatan]);

  return (
    <Card className="w-full mt-5 col-span-2">
      <CardHeader>
        <CardTitle className="text-sm">Alamat</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you're done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 w-full m">
        <section className="grid gap-4 sm:grid-cols-2 w-full pt-2">
          <div>
            <label className="text-xs font-medium">Provinsi:</label>
            <Select onValueChange={setSelectedProvinsi}>
              <SelectTrigger className="">
                <SelectValue placeholder="Pilih Provinsi" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Provinsi</SelectLabel>
                  {provinsi.map((prov) => (
                    <SelectItem key={prov.id} value={prov.id}>
                      {prov.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-xs font-medium">Kabupaten:</label>
            <Select
              onValueChange={setSelectedKabupaten}
              disabled={!selectedProvinsi}
            >
              <SelectTrigger className="">
                <SelectValue placeholder="Pilih Kabupaten" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Kabupaten</SelectLabel>
                  {kabupaten.map((kab) => (
                    <SelectItem key={kab.id} value={kab.id}>
                      {kab.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-xs font-medium">Kecamatan:</label>
            <Select
              onValueChange={setSelectedKecamatan}
              disabled={!selectedKabupaten}
            >
              <SelectTrigger className="">
                <SelectValue placeholder="Pilih Kecamatan" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Kecamatan</SelectLabel>
                  {kecamatan.map((kec) => (
                    <SelectItem key={kec.id} value={kec.id}>
                      {kec.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-xs font-medium">Kelurahan:</label>
            <Select
              onValueChange={(value) => console.log(value)}
              disabled={!selectedKecamatan}
            >
              <SelectTrigger className="">
                <SelectValue placeholder="Pilih Kelurahan" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Kelurahan</SelectLabel>
                  {kelurahan.map((kel) => (
                    <SelectItem key={kel.id} value={kel.id}>
                      {kel.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </section>
        <article className="w-full">
          <label className="text-xs font-medium">Detail Alamat:</label>
          <Input id="detail_alamat" type="text" placeholder="Detail Alamat" />
        </article>
      </CardContent>
    </Card>
  );
}


export default Alamat