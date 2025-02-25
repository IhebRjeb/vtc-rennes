"use client";

import { useState } from 'react'

export default function FareCalculator() {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [vehicleType, setVehicleType] = useState('sedan')
  const [fare, setFare] = useState<number | null>(null)

  const calculateFare = async (e: React.FormEvent) => {
    e.preventDefault()
    // Implement fare calculation logic here
    // For now, let's just set a dummy fare
    setFare(50)
  }

  return (
    <form onSubmit={calculateFare} className="bg-gray-100 p-4 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Calculer votre tarif</h3>
      <input
        type="text"
        placeholder="Adresse de départ"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        className="w-full mb-2 p-2 rounded"
      />
      <input
        type="text"
        placeholder="Adresse d'arrivée"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="w-full mb-2 p-2 rounded"
      />
      <select
        value={vehicleType}
        onChange={(e) => setVehicleType(e.target.value)}
        className="w-full mb-2 p-2 rounded"
      >
        <option value="sedan">Berline</option>
        <option value="van">Van</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Calculer
      </button>
      {fare && <p className="mt-4">Tarif estimé: {fare}€</p>}
    </form>
  )
}