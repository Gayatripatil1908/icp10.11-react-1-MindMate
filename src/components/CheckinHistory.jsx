import {
  Calendar,
  Smile,
  Activity,
  Wind,
  Heart,
  StickyNote,
  Moon,
  Zap,
  Trash2,
} from "lucide-react";

function CheckinCard({ entry, onDelete, index }) {
  return (
    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#159ab7]/20 to-[#9ac5d3]/10 shadow-md border border-[#159ab7]/30 hover:border-[#159ab7] transition hover:scale-[1.02]">
      <button
        onClick={() => onDelete(index)}
        className="absolute top-4 right-4 text-[#a71c1c] hover:text-red-600 transition cursor-pointer"
        aria-label="Delete check-in"
      >
        <Trash2 size={20} />
      </button>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#159ab7]/10 to-transparent pointer-events-none"></div>

      <p className="text-lg font-semibold text-[#1e5067] mb-4 flex items-center gap-2">
        <Calendar size={20} />
        <span className="tracking-wide">{entry.date}</span>
      </p>

      <div className="space-y-2 text-sm">
        <p className="flex items-center gap-2">
          <Smile size={18} className="text-yellow-400" />
          <span className="font-medium">Mood:</span> {entry.mood}
        </p>

        <p className="flex items-center gap-2">
          <Moon size={18} className="text-[#159ab7]" />
          <span className="font-medium">Sleep:</span> {entry.sleep} hrs
        </p>

        <p className="flex items-center gap-2">
          <Activity size={18} className="text-[#9ac5d3]" />
          <span className="font-medium">Activities:</span>
          <span>{entry.selectedActivities.join(", ") || "None"}</span>
        </p>

        <p className="flex items-center gap-2">
          <Zap size={18} className="text-red-400" />
          <span className="font-medium">Stress:</span> {entry.stress}
        </p>

        <p className="flex items-center gap-2">
          <Zap size={18} className="text-yellow-400" />
          <span className="font-medium">Energy:</span> {entry.energy}
        </p>

        <p className="flex items-center gap-2">
          <Wind size={18} className="text-[#9ac5d3]" />
          <span className="font-medium">Weather:</span> {entry.weather}
        </p>

        <p className="flex items-center gap-2">
          <Heart size={18} className="text-pink-400" />
          <span className="font-medium">Health:</span> {entry.health}
        </p>

        <p className="flex items-start gap-2">
          <StickyNote size={18} className="text-[#9ac5d3] mt-1" />
          <span className="font-medium">Notes:</span>
          <span>{entry.notes || "No notes"}</span>
        </p>

        <p className="flex items-center gap-2">
          <Heart size={18} className="text-green-400" />
          <span className="font-medium">Habits Done:</span>
          <span>{entry.doneHabits.join(", ") || "None"}</span>
        </p>
      </div>
    </div>
  );
}

export default CheckinCard;