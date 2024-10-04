"use client";

import { useState } from "react";
import { Inter, Manrope } from "next/font/google";
import "../styles/globals.css";
import DefaultLayout from "../components/layout/DefaultLayout";
import Footer from "../components/footer";

const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <html lang="en">
      <body className={manrope.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
