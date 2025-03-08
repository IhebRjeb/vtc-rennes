"use client";

import { useState } from 'react';
import { MapPin, Calendar, Clock, Car, Search, Info } from 'lucide-react';

export default function FareCalculator() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [vehicleType, setVehicleType] = useState('sedan');
  const [passengers, setPassengers] = useState(1);
  const [luggage, setLuggage] = useState(0);
  const [babySeat, setBabySeat] = useState(false);
  const [fare, setFare] = useState<{ amount: number; duration: number } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const calculateFare = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!origin || !destination) {
      alert('Veuillez saisir une adresse de départ et d\'arrivée');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call with a delay
    setTimeout(() => {
      // Calculate dummy fare based on vehicle type and passengers
      const baseRate = vehicleType === 'sedan' ? 1.8 : vehicleType === 'van' ? 2.2 : 3;
      const passengerRate = passengers > 2 ? passengers * 0.1 : 0;
      const luggageRate = luggage * 0.05;
      const babySeatRate = babySeat ? 0.1 : 0;
      
      // Dummy distance and duration
      const distance = 25; // km
      const duration = 30; // minutes
      
      const amount = Math.round((baseRate + passengerRate + luggageRate + babySeatRate) * distance);
      
      setFare({ amount, duration });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-blue-600 text-white p-4">
        <h3 className="text-xl font-semibold">Calculer votre tarif</h3>
        <p className="text-sm opacity-80">Obtenez une estimation instantanée pour votre trajet</p>
      </div>
      
      <form onSubmit={calculateFare} className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Adresse de départ</label>
            <div className="flex items-center gap-2 border rounded-md p-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
              <MapPin className="text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Ex: Gare de Rennes"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-full outline-none text-sm"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Adresse d'arrivée</label>
            <div className="flex items-center gap-2 border rounded-md p-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
              <MapPin className="text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Ex: Aéroport de Rennes"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full outline-none text-sm"
                required
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <div className="flex items-center gap-2 border rounded-md p-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
              <Calendar className="text-gray-400 w-5 h-5" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full outline-none text-sm"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Heure</label>
            <div className="flex items-center gap-2 border rounded-md p-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
              <Clock className="text-gray-400 w-5 h-5" />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full outline-none text-sm"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Type de véhicule</label>
            <div className="flex items-center gap-2 border rounded-md p-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
              <Car className="text-gray-400 w-5 h-5" />
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-full outline-none text-sm bg-transparent"
              >
                <option value="sedan">Berline</option>
                <option value="van">Van (jusqu'à 6 pers.)</option>
                <option value="luxury">Véhicule de luxe</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Passagers</label>
            <div className="flex items-center gap-2 border rounded-md p-2">
              <select
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
                className="w-full outline-none text-sm bg-transparent"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'passager' : 'passagers'}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Bagages</label>
            <div className="flex items-center gap-2 border rounded-md p-2">
              <select
                value={luggage}
                onChange={(e) => setLuggage(Number(e.target.value))}
                className="w-full outline-none text-sm bg-transparent"
              >
                {[0, 1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 0 ? 'bagage' : num === 1 ? 'bagage' : 'bagages'}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="babySeat"
            checked={babySeat}
            onChange={() => setBabySeat(!babySeat)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="babySeat" className="ml-2 text-sm text-gray-700">
            Besoin d'un siège bébé ?
          </label>
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex items-center justify-center gap-2 text-white font-medium rounded-md px-4 py-3 ${
            isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
          } transition-colors`}
        >
          {isLoading ? (
            <>
              <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
              <span>Calcul en cours...</span>
            </>
          ) : (
            <>
              <Search className="w-5 h-5" />
              <span>Calculer le tarif</span>
            </>
          )}
        </button>
      </form>
      
      {fare && (
        <div className="bg-blue-50 p-6 border-t border-blue-100">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-lg mb-2">Estimation de votre trajet</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Tarif estimé</p>
                  <p className="text-2xl font-bold text-blue-600">{fare.amount}€</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Durée estimée</p>
                  <p className="text-lg font-medium">{fare.duration} min</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                * Cette estimation est donnée à titre indicatif et peut varier en fonction des conditions de circulation.
              </p>
              <div className="mt-4">
                <a
                  href="/reservation"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium rounded px-4 py-2 transition-colors"
                >
                  Réserver maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}