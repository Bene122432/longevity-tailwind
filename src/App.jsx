import React from "react";

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
    color: "border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
  },
  {
    name: "David Sinclair",
    image: "/experts/sinclair.png",
    color: "border-purple-400 shadow-[0_0_10px_rgba(139,92,246,0.5)]"
  },
  {
    name: "Peter Attia",
    image: "/experts/attia.jpg",
    color: "border-red-400 shadow-[0_0_10px_rgba(248,113,113,0.5)]"
  },
  {
    name: "Andrew Huberman",
    image: "/experts/huberman.jpg",
    color: "border-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"
  },
  {
    name: "Bene",
    image: "/experts/bene.jpg",
    color: "border-yellow-400 shadow-[0_0_10px_rgba(253,224,71,0.5)]"
  }
];

export default function SupplementExplorer() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Supplements</h1>
        <p className="text-center text-gray-600 mb-6">
          Explore the most trusted longevity supplements used by leading health experts. Click a product to view recommended brands and affiliate links.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {expertList.map((expert, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white px-5 py-3 rounded-full shadow-sm border hover:shadow-md transition"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className={`w-16 h-16 rounded-full border-2 ${expert.color} object-cover mb-1`}
              />
              <span className="text-sm font-medium text-gray-700">{expert.name}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {supplements.map((supplement, index) => (
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
                  const expertColor = expertList.find((e) => e.name === expert.name)?.color || "border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]";
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
                        className={`w-10 h-10 rounded-full object-cover border-2 ${expertColor}`}
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
