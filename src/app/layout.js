"use client";

import { useState } from "react";
import { Inter, Manrope } from "next/font/google";
import "../styles/globals.css";


const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <html lang="en">
      <body className={manrope.className}>
        {children}
        
      </body>
    </html>
  );
}
