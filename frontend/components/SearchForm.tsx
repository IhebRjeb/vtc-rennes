import { Calendar, Clock, MapPin, Search } from "lucide-react";
import { useState } from "react";

export default function SearchForm() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [differentDestination, setDifferentDestination] = useState(false);
  const [babySeat, setBabySeat] = useState(false);

  return (
    <div className="bg-white rounded-lg p-4 shadow-lg max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Pick-up Location */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 border rounded-md p-2">
            <MapPin className="text-gray-400" />
            <input
              type="text"
              placeholder="Lieu de prise en charge"
              className="w-full outline-none"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            />
          </div>
        </div>

        {/* Pick-up Date */}
        <div className="relative">
          <div className="flex items-center gap-2 border rounded-md p-2">
            <Calendar className="text-gray-400" />
            <input
              type="date"
              className="w-full outline-none"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />
          </div>
        </div>

        {/* Pick-up Time */}
        <div className="relative">
          <div className="flex items-center gap-2 border rounded-md p-2">
            <Clock className="text-gray-400" />
            <input
              type="time"
              className="w-full outline-none"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Additional Options */}
      <div className="flex flex-wrap gap-4 mt-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="rounded text-blue-600"
            checked={differentDestination}
            onChange={() => setDifferentDestination(!differentDestination)}
          />
          <span className="text-gray-700">Destination différente</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="rounded text-blue-600"
            checked={babySeat}
            onChange={() => setBabySeat(!babySeat)}
          />
          <span className="text-gray-700">Besoin d'un siège bébé ?</span>
        </label>
      </div>

      {/* Search Button */}
      <div className="mt-4">
        <a href="/reservation">
          <button className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors flex items-center gap-2">
            <Search size={20} />
            <span>Réserver maintenant</span>
          </button>
        </a>
      </div>
    </div>
  );
}
