import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  const { nik, password } = await request.json();

  try {
    const response = await axios.post("http://127.0.0.1:8000/api/login", {
      nik,
      password,
    });

    if (response.status === 200) {
      const data = response.data;
      return NextResponse.json({ token: data.token }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Login gagal" }, { status: 401 });
    }
  } catch (error) {
    console.error("Error login:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan saat login" },
      { status: 500 }
    );
  }
}