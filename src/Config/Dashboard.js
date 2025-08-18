import { BookOpen, Brain, Moon } from "lucide-react";

const activitiesList = [
  { name: "Exercise", icon: "🏃" },
  { name: "Meditation", icon: "🧘" },
  { name: "Socializing", icon: "🗣️" },
  { name: "Hobby", icon: "🎨" },
  { name: "Nature", icon: "🌿" },
  { name: "Work", icon: "💼" },
  { name: "Study", icon: "📚" },
  { name: "Rest", icon: "🛌" },
];

const weatherList = [
  { name: "Sunny", icon: "☀️" },
  { name: "Cloudy", icon: "☁️" },
  { name: "Rainy", icon: "🌧️" },
  { name: "Snowy", icon: "❄️" },
  { name: "Stormy", icon: "⛈️" },
];

const healthList = [
  { name: "Headache", icon: "🤕" },
  { name: "Fatigue", icon: "🥱" },
  { name: "Nausea", icon: "🤢" },
  { name: "Pain", icon: "🤒" },
  { name: "Healthy", icon: "💪" },
];

const habitList = [
  { name: "Meditate", icon: Brain, color: "from-[#159ab7] to-[#1e5067]" },
  { name: "Read 20 min", icon: BookOpen, color: "from-[#1e5067] to-[#159ab7]" },
  { name: "Sleep Early", icon: Moon, color: "from-[#159ab7] to-[#1e5067]" },
];

const stressLevels = {
  1: "Relaxed",
  2: "Calm",
  3: "Manageable",
  4: "Tense",
  5: "Overwhelmed",
};

const energyLevels = {
  1: "Exhausted",
  2: "Tired",
  3: "Okay",
  4: "Active",
  5: "Energetic",
};

export {activitiesList, weatherList, healthList, habitList, stressLevels, energyLevels};