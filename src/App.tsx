import { useState } from "react";

const plantInstructions: Record<string, string> = {
  "Christmas Tree": "Watering Schedule: ...",
  "Money Tree": "Watering Schedule: ...",
  Bonsai: "Watering Schedule: ...",
};

const defaultPlants = Object.keys(plantInstructions);

export default function App() {
  const [selectedPlant, setSelectedPlant] = useState("");

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-start py-12 px-4">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl flex flex-col gap-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-green-400">
          🌿 Daily Plant Care
        </h1>

        {/* Dropdown */}
        <div className="flex justify-center">
          <select
            value={selectedPlant}
            onChange={(e) => setSelectedPlant(e.target.value)}
            className="w-64 md:w-72 lg:w-80 px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-200"
          >
            <option value="">Select a plant</option>
            {defaultPlants.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* Instructions Card */}
        {selectedPlant && (
          <div className="relative rounded-3xl p-6 max-w-md mx-auto shadow-2xl overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-[1.03] bg-gradient-to-tr from-green-800 via-green-500 to-green-300">
            <div className="relative z-10">
              <h2 className="text-xl font-semibold mb-3 text-white text-center">
                {selectedPlant} Instructions
              </h2>
              <p className="text-gray-100 text-center">
                {plantInstructions[selectedPlant]}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
