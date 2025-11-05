import { useState } from "react";
import { Sun, Droplet, Thermometer, Leaf } from "lucide-react";

const plantCareData: Record<
  string,
  {
    name: string;
    sections: { icon: JSX.Element; title: string; description: string }[];
  }
> = {
  "Aloe Vera": {
    name: "Aloe Vera Care Guide",
    sections: [
      {
        icon: <Sun className="w-6 h-6 text-yellow-400" />,
        title: "Light",
        description:
          "Place in bright, indirect sunlight. Aloe Vera enjoys warmth but avoid prolonged direct afternoon rays.",
      },
      {
        icon: <Droplet className="w-6 h-6 text-blue-400" />,
        title: "Water",
        description:
          "Water once every 2–3 weeks. Ensure the soil dries completely between waterings. Avoid standing water.",
      },
      {
        icon: <Thermometer className="w-6 h-6 text-red-400" />,
        title: "Temperature",
        description:
          "Prefers 60–75°F (15–24°C). Keep away from cold drafts or sudden temperature drops.",
      },
      {
        icon: <Leaf className="w-6 h-6 text-green-400" />,
        title: "Fertilizer",
        description:
          "Feed sparingly — once in spring with diluted balanced fertilizer is enough.",
      },
    ],
  },
  "Snake Plant": {
    name: "Snake Plant Care Guide",
    sections: [
      {
        icon: <Sun className="w-6 h-6 text-yellow-400" />,
        title: "Light",
        description:
          "Tolerates low light but thrives in moderate to bright, indirect light.",
      },
      {
        icon: <Droplet className="w-6 h-6 text-blue-400" />,
        title: "Water",
        description:
          "Water every 2–4 weeks. Less frequent in winter. Allow soil to fully dry between watering.",
      },
      {
        icon: <Thermometer className="w-6 h-6 text-red-400" />,
        title: "Temperature",
        description:
          "Ideal range is 65–85°F (18–29°C). Avoid exposure below 50°F (10°C).",
      },
      {
        icon: <Leaf className="w-6 h-6 text-green-400" />,
        title: "Fertilizer",
        description:
          "Feed once a month in spring and summer with a mild houseplant fertilizer.",
      },
    ],
  },
};

const plants = Object.keys(plantCareData);

export default function App() {
  const [selectedPlant, setSelectedPlant] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl font-extrabold mb-10 text-green-400 tracking-wide drop-shadow-lg">
        🌿 Plant Care Assistant
      </h1>

      {/* Dropdown */}
      <select
        value={selectedPlant}
        onChange={(e) => setSelectedPlant(e.target.value)}
        className="mb-8 px-5 py-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
      >
        <option value="">Select your plant</option>
        {plants.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>

      {selectedPlant && (
        <div className="w-full max-w-2xl bg-gray-900/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-gray-700 transition duration-300 hover:shadow-green-500/20">
          <h2 className="text-3xl font-semibold text-green-300 mb-6 text-center">
            {plantCareData[selectedPlant].name}
          </h2>

          <div className="grid gap-6">
            {plantCareData[selectedPlant].sections.map((section, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 border-b border-gray-800 pb-4 last:border-none"
              >
                <div className="p-3 bg-gray-800 rounded-xl shadow-inner">
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-green-200 mb-1">
                    {section.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
