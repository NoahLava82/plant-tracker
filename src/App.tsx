import { useState } from "react";

const plantInstructions: Record<string, string> = {
  "Aloe Vera":
    "Water lightly every 2-3 weeks. Keep in bright, indirect sunlight.",
  "Snake Plant": "Water once a month. Tolerates low light. Avoid overwatering.",
  Monstera: "Water weekly. Prefers bright, indirect light and high humidity.",
  Basil: "Water every 1-2 days. Needs lots of sunlight and warm temperatures.",
};

const defaultPlants = Object.keys(plantInstructions);

export default function App() {
  const [selectedPlant, setSelectedPlant] = useState("");

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center py-12 px-4">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-gray-800 rounded-3xl p-6 shadow-xl flex flex-col gap-6 mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-green-400">
          🌿 Daily Plant Care
        </h1>

        {/* Dropdown */}
        <div className="flex flex-col gap-4 items-center">
          <label htmlFor="plant-select" className="sr-only">
            Select Plant
          </label>
          <select
            id="plant-select"
            value={selectedPlant}
            onChange={(e) => setSelectedPlant(e.target.value)}
            className="w-64 md:w-72 lg:w-80 px-4 py-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400 appearance-none cursor-pointer transition duration-200"
          >
            <option value="">Select a plant</option>
            {defaultPlants.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* Instructions */}
        {selectedPlant && (
          <div className="bg-gray-700 rounded-2xl p-4 text-gray-100 shadow-md transition transform hover:scale-[1.01]">
            <h2 className="text-xl font-semibold mb-2">{selectedPlant}</h2>
            <p className="text-gray-300">{plantInstructions[selectedPlant]}</p>
          </div>
        )}
      </div>
    </div>
  );
}
