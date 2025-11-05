import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Droplet, Thermometer, Leaf } from "lucide-react";

const plantCareData: Record<
  string,
  {
    name: string;
    sections: { icon: JSX.Element; title: string; description: string }[];
  }
> = {
  "Christmas Tree": {
    name: "Christmas Tree Guide",
    sections: [
      {
        icon: <Sun className="w-6 h-6 text-yellow-400 yellow" />,
        title: "Light",
        description: "6-8 hours in full sun daily.",
      },
      {
        icon: <Droplet className="w-6 h-6 text-blue-400" />,
        title: "Water",
        description:
          "Water every 3-5 days (Tuesday and Saturday). Water until the water drains from the bottom of the pot.",
      },
      {
        icon: <Thermometer className="w-6 h-6 text-red-400" />,
        title: "Temperature",
        description: "Good in Centreville keep away from 15F or below.",
      },
      {
        icon: <Leaf className="w-6 h-6 text-green-400" />,
        title: "Fertilizer",
        description: "Fertilize in Spring and Fall with a balanced fertilizer.",
      },
    ],
  },
  "Money Tree": {
    name: "Money Tree Care Guide0",
    sections: [
      {
        icon: <Sun className="w-6 h-6 text-yellow-400" />,
        title: "Light",
        description:
          "Bright, indirect sunlight is best for a healthy money tree. It's good as long as the areas don't receive too much direct sunlight. Your plant may adjust to lower lights (although too little light will slow growth and cause the leaves to turn yellow), but direct sunlight will quickly scorch the leaves.",
      },
      {
        icon: <Droplet className="w-6 h-6 text-blue-400" />,
        title: "Water",
        description:
          "Do not over-water. Water your money plant once every one to two weeks, or when the soil volume is 50 to 75% dry. The plant will likely need water more frequently during spring and summer months. Be sure that your planter has drainage holes, so the roots aren't sitting in excess water.",
      },
      {
        icon: <Thermometer className="w-6 h-6 text-red-400" />,
        title: "Temperature",
        description:
          "Your money tree will grow best in a space that's between 60º and 75º Fahrenheit. Keep your plant away from heat and air conditioning vents, as well as any drafty windows or doors.",
      },
      {
        icon: <Leaf className="w-6 h-6 text-green-400" />,
        title: "Fertilizer",
        description: "Fertilize during Spring and Summer",
      },
    ],
  },
  "Bonsai Plant": {
    name: "Bonsai Plant Care Guide",
    sections: [
      {
        icon: <Sun className="w-6 h-6 text-yellow-400" />,
        title: "Light",
        description:
          "The Ficus Ginseng likes a light position out of the full sun, but plenty of sunlight. Place this houseplant in a sunny spot, filtered with a thin curtain or blinds.",
      },
      {
        icon: <Droplet className="w-6 h-6 text-blue-400" />,
        title: "Water",
        description:
          "Water your Ginseng Ficus thoroughly whenever the soil gets slightly dry. It will tolerate some periods of over or underwatering, but prefers moist soil that is not saturated. Do not allow the roots to sit in water.",
      },
      {
        icon: <Thermometer className="w-6 h-6 text-red-400" />,
        title: "Temperature",
        description:
          "The Chinese Banyan prefers temperatures of 60⁰F to 75⁰F. It does not like temperatures below 60⁰F or drafty areas.",
      },
      {
        icon: <Leaf className="w-6 h-6 text-green-400" />,
        title: "Fertilizer",
        description:
          "Fertilize your Ficus bonsai once every two weeks during the growing season, spring until fall.",
      },
    ],
  },
};

const plants = Object.keys(plantCareData);

export default function App() {
  const [selectedPlant, setSelectedPlant] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white flex flex-col items-center py-16 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-10 text-green-400 tracking-wide drop-shadow-lg"
      >
        🌿 Plant Care Assistant
      </motion.h1>

      {/* Dropdown */}
      <motion.select
        value={selectedPlant}
        onChange={(e) => setSelectedPlant(e.target.value)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-8 px-5 py-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
      >
        <option value="">Select your plant</option>
        {plants.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </motion.select>

      {selectedPlant && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl bg-gray-900/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-gray-700"
        >
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-green-300 mb-6 text-center"
          >
            {plantCareData[selectedPlant].name}
          </motion.h2>

          <div className="grid gap-6">
            {plantCareData[selectedPlant].sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 + 0.3, duration: 0.5 }}
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
