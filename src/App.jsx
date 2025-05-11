import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const supplements = [
  {
    name: "NMN (Nicotinamide Mononucleotide)",
    image: "/supplements/nmn.jpg",
    description:
      "NMN is a precursor to NAD+, a molecule crucial for cellular energy production and DNA repair. Supplementation with NMN may support longevity, metabolic health, and cognitive performance by enhancing NAD+ levels, which decline with age.",
    dosage: "500 mg per day",
    healthTags: ["Longevity", "Energy", "Cognitive Support"],
    experts: [
      {
        name: "Bryan Johnson",
        image: "/experts/bryan.jpg",
        brand: "Jinfinty",
        link: "https://example.com/nmn-jinfinty"
      },
      {
        name: "David Sinclair",
        image: "/experts/sinclair.jpg",
        brand: "Thorne",
        link: "https://example.com/nmn-thorne"
      },
      {
        name: "Bene",
        image: "/experts/bene.jpg",
        brand: "Longevity Hackers",
        link: "https://www.longevity-hackers.com"
      }
    ]
  },

const allExperts = [
  "Bryan Johnson",
  "David Sinclair",
  "Peter Attia",
  "Bene"
];

export default function SupplementExplorer() {
  const [selectedExpert, setSelectedExpert] = useState("");

  const filteredSupplements = selectedExpert
    ? supplements.filter(s =>
        s.experts.some(ex => ex.name === selectedExpert)
      )
    : supplements;

  return (
    <div className="flex items-center justify-between mb-6">
      <img src="/logo.png" alt="Longevity Hackers Logo" className="h-10 w-auto" />
    </div>
    <div className="p-6 max-w-7xl mx-auto bg-gray-100 min-h-screen font-[Avenir,ui-sans-serif]">
      <h1 className="text-5xl font-extrabold mb-6 text-center text-gray-900">Supplements</h1>
      <p className="mb-8 text-gray-600 text-center max-w-3xl mx-auto text-lg">
        Explore the most trusted longevity supplements used by leading health experts. Click a product to view recommended brands and affiliate links.
      </p>

      {/* Expertenfilter */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {allExperts.map(expert => (
          <button
            key={expert}
            onClick={() => setSelectedExpert(prev => (prev === expert ? "" : expert))}
            className={`px-4 py-2 text-sm rounded-full border transition font-medium ${
              selectedExpert === expert
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
            }`}
          >
            {expert}
          </button>
        ))}
      </div>

      {/* Karten */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSupplements.map((supplement, idx) => (
          <div
            key={idx}
            className="border rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-200 bg-white"
          >
            <img
              src={supplement.image}
              alt={supplement.name}
              className="w-full h-48 object-cover object-center rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2 text-gray-900">
              {supplement.name}
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              {supplement.description}
            </p>
            <p className="text-sm font-medium text-gray-900 mb-3">
              Dosage: <span className="text-gray-700">{supplement.dosage}</span>
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {supplement.healthTags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="space-y-2">
              {supplement.experts.map((expert, eIdx) => (
                <a
                  key={eIdx}
                  href={expert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 border p-3 rounded-lg hover:bg-blue-50"
                >
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-10 h-10 rounded-xl object-cover border-2 border-blue-400 shadow-[0_0_10px_2px_rgba(59,130,246,0.5)]"
                  />
                  <div className="text-sm">
                    <p className="font-semibold text-gray-800">{expert.name}</p>
                    <p className="text-gray-500 text-xs">{expert.brand}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
