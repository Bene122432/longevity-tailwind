import React, { useState } from "react";

const supplements = [
  {
    name: "NMN (Nicotinamide Mononucleotide)",
    image: "/supplements/nmn.png",
    description:
      "NMN is a precursor to NAD+, a molecule crucial for cellular energy production and DNA repair. Supplementation with NMN may support longevity, metabolic health, and cognitive performance by enhancing NAD+ levels, which decline with age.",
    healthTags: ["Longevity", "Energy", "Cognitive Support"],
    experts: [
      {
        name: "Bryan Johnson",
        image: "/experts/johnson.jpg",
        brand: "Jinfinty – 10% off with code BENE",
        link: "#"
      },
      {
        name: "David Sinclair",
        image: "/experts/sinclair.png",
        brand: "Thorne",
        link: "#"
      }
    ]
  },
  {
    name: "Ca-AKG (Calcium Alpha-Ketoglutarate)",
    image: "/supplements/ca-akg.webp",
    description:
      "Ca-AKG is a form of alpha-ketoglutarate combined with calcium. It plays a vital role in the Krebs cycle and has been studied for its ability to extend lifespan in mice by supporting mitochondrial and bone health.",
    healthTags: ["Longevity", "Bone Health", "Mitochondrial Function"],
    experts: [
      {
        name: "David Sinclair",
        image: "/experts/sinclair.png",
        brand: "Renue by Science",
        link: "#"
      }
    ]
  },
  {
    name: "Berberine",
    image: "/supplements/berberin.webp",
    description:
      "Berberine is a natural plant alkaloid shown to support healthy blood sugar levels, improve insulin sensitivity, and act as a powerful AMPK activator — often compared to metformin in its metabolic effects.",
    healthTags: ["Blood Sugar Control", "Metabolic Health", "Longevity"],
    experts: [
      {
        name: "Bryan Johnson",
        image: "/experts/johnson.jpg",
        brand: "DoNotAge – 10% off with code BENE",
        link: "#"
      }
    ]
  }
];

const expertList = [
  {
    name: "Bryan Johnson",
    image: "/experts/johnson.jpg",
    color: "border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
  },
  {
    name: "David Sinclair",
    image: "/experts/sinclair.png",
    color: "border-purple-400 shadow-[0_0_15px_rgba(139,92,246,0.8)]"
  },
  {
    name: "Peter Attia",
    image: "/experts/attia.jpg",
    color: "border-red-400 shadow-[0_0_15px_rgba(248,113,113,0.8)]"
  },
  {
    name: "Andrew Huberman",
    image: "/experts/huberman.jpg",
    color: "border-green-400 shadow-[0_0_15px_rgba(74,222,128,0.8)]"
  },
  {
    name: "Bene",
    image: "/experts/bene.jpg",
    color: "border-yellow-400 shadow-[0_0_15px_rgba(253,224,71,0.8)]"
  }
];

export default function SupplementExplorer() {
  const [selectedTag, setSelectedTag] = useState(null);
  const allTags = Array.from(new Set(supplements.flatMap(s => s.healthTags)));

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-4 gap-2">
          <img src="/logo.png" alt="Longevity Hackers" className="h-32 w-auto" />
          <h1 className="text-5xl font-extrabold">Longevity Hackers</h1>
          <p className="text-center text-gray-600 max-w-2xl mt-2">
            Your curated gateway to expert-approved longevity supplements — find out what the top minds in health really use and trust.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {allTags.map((tag, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`text-sm px-4 py-2 rounded-full border transition ${
                tag === selectedTag
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-blue-100"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {expertList.map((expert, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white px-6 py-4 rounded-full shadow-sm border hover:shadow-md transition w-36 h-44 justify-center"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className={`w-28 h-28 rounded-full border-4 ${expert.color} object-cover mb-2`}
              />
              <span className="text-sm font-medium text-center text-gray-700 leading-tight">
                {expert.name}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {supplements
            .filter(s => !selectedTag || s.healthTags.includes(selectedTag))
            .map((supplement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                <img
                  src={supplement.image}
                  alt={supplement.name}
                  className="w-24 h-24 object-contain mx-auto mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{supplement.name}</h2>
                <p className="text-sm text-gray-700 mb-2">{supplement.description}</p>
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
                  {supplement.experts.map((expert, eIdx) => {
                    const expertColor =
                      expertList.find(e => e.name === expert.name)?.color ||
                      "border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]";
                    return (
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
                          className={`w-12 h-12 rounded-full object-cover border-2 ${expertColor}`}
                        />
                        <div className="text-sm">
                          <p className="font-semibold text-gray-800">{expert.name}</p>
                          <p className="text-gray-500 text-xs">{expert.brand}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
