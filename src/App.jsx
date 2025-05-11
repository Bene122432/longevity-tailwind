import React from "react";

export default function TestImage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Bildtest: Wird NMN angezeigt?</h1>
        <img
          src="/supplements/nmn.png"
          alt="NMN"
          className="w-64 h-64 object-contain border border-gray-300 shadow-md rounded-xl"
        />
      </div>
    </div>
  );
}
