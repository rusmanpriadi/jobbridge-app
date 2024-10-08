import { NextResponse } from "next/server";

export function middleware(req) {
  // Mendapatkan token dan role dari cookies
  const refreshTokenCookie = req.cookies.get("refreshToken");
  const roleCookie = req.cookies.get("role");

  const token = refreshTokenCookie ? refreshTokenCookie.value : null;
  const role = roleCookie ? roleCookie.value : null;

  const { pathname } = req.nextUrl;

  // Jika tidak ada token, redirect ke halaman login
  if (!token) {
    console.log("Tidak ada token, redirect ke login.");
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (pathname.startsWith("/admin") && role !== "admin") {
    console.log("Akses ditolak untuk non-admin.");
    return NextResponse.redirect(new URL("/user/home", req.url));
  }

  if (pathname.startsWith("/user") && role !== "pelamar") {
    console.log("Akses ditolak untuk non-user.");
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }

  return NextResponse.next();
}

// Tentukan pada rute mana middleware ini akan dijalankan
export const config = {
  matcher: ["/admin/:path*", "/user/:path*"],
};
