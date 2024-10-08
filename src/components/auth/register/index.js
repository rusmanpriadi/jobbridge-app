"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { HiOutlineCheckCircle } from "react-icons/hi2";

export const description =
  "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account";
const Register = () => {
  const [nik, setNik] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi password dan konfirmasi password
    if (password !== confirmPassword) {
      setError("Password dan Konfirmasi Password tidak cocok.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
        {
          nik,
          name,
          email,
          password,
          confirmPassword,
        }
      );
      console.log(response);

      if (response.status === 201) {
        setSuccess("Registrasi berhasil! Silakan login.");
        setNik("");
        setEmail("");
        setName("");
        setPassword("");
        setConfirmPassword("");
        setError("");
        router.push("/"); // Redirect ke halaman login setelah sukses
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(
          error.response.data.message || "Registrasi gagal. Silakan coba lagi."
        );
      } else if (error.request) {
        // The request was made but no response was received
        setError(
          "Tidak ada respon dari server. Periksa koneksi internet Anda."
        );
      } else {
        // Something happened in setting up the request that triggered an Error
        setError("Terjadi kesalahan. Silakan coba lagi.");
      }
      console.error("Error:", error);
    }
  };
  return (
    <div className="py-2">
      <Card className="w-full  flex border-none shadow-none">
        <div className=" w-[340px] px-1 md:block hidden ">
          <div className=" bg-indigo-500 text-white h-full rounded-2xl p-2 shadow-lg">
            <h2 className="text-lg font-extrabold mb-4 ms-4 mt-3">
              Information!
            </h2>
            <ul className="space-y-3 text-xs p-2">
              <li className="flex items-start">
             <span className="inline-block  rounded-full p-1 text-white mr-2">
                 <HiOutlineCheckCircle className="w-5 h-5" />
                </span>
                Gunakan NIK yang valid dan sesuai dengan data kependudukan.
              </li>
              <li className="flex items-start">
             <span className="inline-block  rounded-full p-1 text-white mr-2">
                 <HiOutlineCheckCircle className="w-5 h-5" />
                </span>
                Masukkan email aktif yang akan digunakan untuk verifikasi dan
                informasi penting.
              </li>
              <li className="flex items-start">
             <span className="inline-block  rounded-full p-1 text-white mr-2">
                 <HiOutlineCheckCircle className="w-5 h-5" />
                </span>
                Buat password yang kuat untuk melindungi akun Anda. Gunakan
                kombinasi huruf, angka, dan simbol.
              </li>
              <li className="flex items-start">
             <span className="inline-block  rounded-full p-1 text-white mr-2">
                 <HiOutlineCheckCircle className="w-5 h-5" />
                </span>
                Pastikan password dan konfirmasi password sama sebelum submit.
              </li>
              <li className="flex items-start">
             <span className="inline-block  rounded-full p-1 text-white mr-2">
                 <HiOutlineCheckCircle className="w-5 h-5" />
                </span>
                Setelah registrasi, Anda akan diarahkan ke halaman login untuk
                mengakses akun.
              </li>
            </ul>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </div>
        <div className="w-full">
          <CardHeader>
            <CardTitle className="text-xl">Register</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">NIK</Label>
                  <Input
                    id="first-name"
                    placeholder="Nomor Induk Kependudukan"
                    value={nik}
                    onChange={(e) => setNik(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Nama Lengkap"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  placeholder="Min. 8 karakter"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="konfpassword">Konfirmasi Password</Label>
                <Input
                  id="konfpassword"
                  type="password"
                  name="password_confirmation"
                  placeholder="Password yang sama"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Create an account
              </Button>
            </form>
          
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Register;
