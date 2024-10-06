"use client";

import React, { useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";

import axios from "axios";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import { NextResponse } from "next/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import ClientLayout from "../../components/layout/ClientLayout";
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
        `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
        {
          nik,
          password,
        },
       
      );

      // console.log(response);
      if (response.status === 201) {
        // Pastikan token ada di dalam respons
        let token = response.data.token;
        let role = response.data.data.role;

        if (!token) {
          throw new Error("Token tidak ditemukan dalam respons API.");
        }
        // Simpan token dan role ke cookie agar middleware bisa mengaksesnya
        Cookies.set("token", token, { expires: 1, path: "/", secure: true }); // token berlaku selama 1 hari
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
    <div className="flex min-h-screen items-center justify-center p-6">
      <Card className="mx-auto max-w-5xl flex">
        <div className=" w-[350px] p-6 md:block hidden pr-10">
          <div className="bg-ungut bg-indigo-600 text-white h-full rounded-2xl">
            Informasi Untuk login
          </div>
        </div>
        <div>
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
                      className="ml-auto inline-block text-sm underline"
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
                <Button type="submit" className="w-full">
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
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="underline">
                  Sign up
                </Link>
              </div>
            </form>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Login;
