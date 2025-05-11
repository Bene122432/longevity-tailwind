import React, { useState } from "react";

const supplements = [
  {
    name: "NMN (Nicotinamide Mononucleotide)",
    image: "/supplements/nmn.png",
    description:
      "NMN is a precursor to NAD+, a molecule crucial for cellular energy production and DNA repair. Supplementation with NMN may support longevity, metabolic health, and cognitive performance by enhancing NAD+ levels, which decline with age.",
    dosage: "500 mg per day",
    healthTags: ["Longevity", "Energy", "Cognitive Support"],
    experts: [
      {
        name: "Bryan Johnson",
        image: "/experts/johnson.jpg",
        brand: "Jinfinty",
        link: "https://example.com/nmn-jinfinty",
      },
      {
        name: "David Sinclair",
        image: "/experts/sinclair.png",
        brand: "Thorne",
        link: "https://example.com/nmn-thorne",
      },
    ],
  },
  {
    name: "Ca-AKG (Calcium Alpha-Ketoglutarate)",
    image: "/supplements/ca-akg.webp",
    description:
      "Ca-AKG is a form of alpha-ketoglutarate combined with calcium. It plays a vital role in the Krebs cycle and has been studied for its ability to extend lifespan in mice by supporting mitochondrial and bone health.",
    dosage: "1,000 mg per day",
    healthTags: ["Longevity", "Bone Health", "Mitochondrial Function"],
    experts: [
      {
        name: "David Sinclair",
        image: "/experts/sinclair.png",
        brand: "Renue by Science",
        link: "https://example.com/akg-renue",
      },
    ],
  },
  {
    name: "Berberine",
    image: "/supplements/berberin.webp",
    description:
      "Berberine is a natural plant alkaloid shown to support healthy blood sugar levels, improve insulin sensitivity, and act as a powerful AMPK activator — often compared to metformin in its metabolic effects.",
    dosage: "500 mg twice daily",
    healthTags: ["Blood Sugar Control", "Metabolic Health", "Longevity"],
    experts: [
      {
        name: "Bryan Johnson",
        image: "/experts/johnson.jpg",
        brand: "DoNotAge",
        link: "https://example.com/berberine-dna",
      },
    ],
  },
];

export default function SupplementExplorer() {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const filteredSupplements = selectedExpert
    ? supplements.filter((s) =>
        s.experts.some((e) => e.name === selectedExpert)
      )
    : supplements;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Supplements</h1>
        <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
          Explore the most trusted longevity supplements used by leading health experts.
          Click a product to view recommended brands and affiliate links.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[...new Set(supplements.flatMap((s) => s.experts.map((e) => e.name)))].map((expert) => (
            <button
              key={expert}
              onClick={() => setSelectedExpert(expert === selectedExpert ? null : expert)}
              className={`px-4 py-2 rounded-full border font-medium ${
                selectedExpert === expert ? "bg-blue-600 text-white" : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {expert}
            </button>
          ))}
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredSupplements.map((supplement, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <img
                src={supplement.image}
                alt={supplement.name}
                className="w-full h-40 object-contain rounded-xl border border-gray-200 mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{supplement.name}</h2>
              <p className="text-gray-700 text-sm mb-3">{supplement.description}</p>
              <p className="text-sm text-gray-600 font-medium mb-3">Dosage: {supplement.dosage}</p>
              <div className="flex flex-wrap gap-2 mb-3">
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
    </div>
  );
}
