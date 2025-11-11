import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#000c47] text-gray-300 text-center py-6 mt-12">
      <p>© {new Date().getFullYear()} Brandname. All rights reserved.</p>
    </footer>
  );
}
