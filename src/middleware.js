import { NextResponse } from "next/server";

export function middleware(req) {
  // Mendapatkan token dan role dari cookies
  const token = req.cookies.get("token")?.value;
  const role = req.cookies.get("role")?.value;

  const { pathname } = req.nextUrl;

  // Jika tidak ada token, redirect ke halaman login

  if (!token) {
    console.log("Tidak ada token, redirect ke login.");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (pathname.startsWith("/admin") && role !== "admin") {
    console.log("Akses ditolak untuk non-admin.");
    return NextResponse.redirect(new URL("/user/home", req.url));
  }

  if (pathname.startsWith("/user") && role !== "user") {
    console.log("Akses ditolak untuk non-user.");
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }

  return NextResponse.next();
}

// Tentukan pada rute mana middleware ini akan dijalankan
export const config = {
  matcher: ["/admin/:path*", "/user/:path*"],
};