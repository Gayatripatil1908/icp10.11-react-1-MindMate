import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import emptyFolder from "../../assets/empty-folder.png"
import CheckinCard from "../../components/CheckinHistory";
import Swal from "sweetalert2";

function CheckinHistory() {
  const storedCheckins = JSON.parse(localStorage.getItem("checkins")) || [];
  const [checkins, setCheckins] = useState(storedCheckins);

  const handleDelete = (index) => {
  const updated = [...checkins];
  updated.splice(index, 1);
  localStorage.setItem("checkins", JSON.stringify(updated));
  setCheckins(updated);

  if (updated.length === 0) {
    Swal.fire({
      icon: "info",
      title: "All check-ins deleted",
      text: "Your check-in history is now empty.",
      confirmButtonColor: "#159ab7",
    });
  }
};

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-[#f5f5f5] flex-grow text-[#1e5067] p-8">
        <div className="flex items-center justify-center mb-10 px-2 sm:px-0">
          <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 text-[#1e5067] drop-shadow-lg">
            <Calendar size={26} className="text-[#1e5067]" /> Check-in History
          </h1>
        </div>

        {checkins.length === 0 ? (
          <div className="max-w-md mx-auto mt-20 bg-white rounded-2xl p-8 shadow-lg text-center border border-[#159ab7]/30">
            <img
              src={emptyFolder}
              className="mx-auto mb-6 w-24 h-24"
            />
            <p className="text-[#1e5067] font-semibold text-lg">
              Your check-in history is empty.
            </p>
            <p className="mt-2 text-sm text-[#1e5067]/70 italic">
              "Start checking in to track your progress!"
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {checkins.map((entry, index) => (
              <CheckinCard
                key={index}
                entry={entry}
                index={index}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-10 mb-[-20px]">
          <Link
            to="/dashboard"
            className="border border-[#1e5067] text-[#1e5067] hover:text-[#a71c1c] hover:border-[#a71c1c] transition
              rounded-lg px-4 py-2 sm:px-6 sm:py-3 font-medium bg-white shadow-sm flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Back to Dashboard
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CheckinHistory;
