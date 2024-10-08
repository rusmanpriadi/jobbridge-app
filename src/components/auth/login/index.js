"use client";

import React, { useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";

import axios from "axios";
import { useRouter } from "next/navigation";
import { Button } from "../../ui/button";
import { NextResponse } from "next/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import ClientLayout from "../../layout/ClientLayout";
import { HiOutlineCheckCircle } from "react-icons/hi2";


export const description =
  "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account";

const Login = () => {
  const [nik, setNik] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Tambahkan state isLoading
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Tambahkan setLoading ke state

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          nik,
          password,
        }
      );

      // console.log(response);
      if (response.status === 201) {  
        // Pastikan token ada di dalam respons
        let token = response.data.data.refreshToken;
        let role = response.data.data.role;

        if (!token) {
          throw new Error("Token tidak ditemukan dalam respons API.");
        }
        // Simpan token dan role ke cookie agar middleware bisa mengaksesnya
        Cookies.set("refreshToken", token, {
          expires: 1,
          path: "/",
          secure: true,
        }); // token berlaku selama 1 hari
        Cookies.set("role", role, { expires: 1, path: "/", secure: true });
        // Redirect sesuai role
        if (role === "admin") {
          router.push("/admin/dashboard");
        } else if (role === "pelamar") {
          router.push("/user/home");
        } else {
          router.push("/user/home");
        }
      }
    } catch (error) {
      setError("Login gagal. Periksa nik dan password Anda.");
    } finally {
      setIsLoading(false); // Selesaikan loading setelah selesai
    }
  };
  return (
    <div className="py-2 ">
      <Card className=" w-full flex border-none shadow-none">
        <div className="w-[500px] px-1 md:block hidden">
          <div className="bg-indigo-500 text-white h-full rounded-2xl p-4 shadow-lg">
            <h2 className="text-lg font-extrabold mb-4">
              Information!
            </h2>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start">
                <span className="inline-block  rounded-full p-1 text-white mr-2">
                 <HiOutlineCheckCircle className="w-5 h-5" />
                </span>
                Pastikan NIK yang dimasukkan sesuai dengan data yang terdaftar.
              </li>
              <li className="flex items-start">
                <span className="inline-block  rounded-full p-1 text-white mr-2">
                 <HiOutlineCheckCircle className="w-5 h-5" />
                </span>
                Gunakan password yang benar sesuai dengan yang telah
                didaftarkan.
              </li>
              <li className="flex items-start">
                <span className="inline-block  rounded-full p-1 text-white mr-2">
                 <HiOutlineCheckCircle className="w-5 h-5" />
                </span>
                Lupa password? Klik link "Forgot your password?" untuk
                memulihkan.
              </li>
              <li className="flex items-start">
                <span className="inline-block  rounded-full p-1 text-white mr-2">
                 <HiOutlineCheckCircle className="w-5 h-5" />
                </span>
                Setelah login, Anda akan diarahkan ke dashboard pelamar.
              </li>
              <li className="flex items-start">
                <span className="inline-block  rounded-full p-1 text-white mr-2">
                 <HiOutlineCheckCircle className="w-5 h-5" />
                </span>
                Hubungi admin jika mengalami kesulitan login.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="nik">NIK</Label>
                  <Input
                    id="nik"
                    type="number"
                    placeholder="Nomor Induk Kependudukan"
                    value={nik}
                    onChange={(e) => setNik(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="#"
                      className="ml-auto inline-block text-xs underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <p>{error}</p>}
                <Button type="submit" className="w-full mt-4">
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                      Loading...
                    </div>
                  ) : (
                    "Login"
                  )}
                </Button>
              </div>
              
            </form>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Login;
