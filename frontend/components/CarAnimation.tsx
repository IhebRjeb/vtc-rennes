"use client";

import { useEffect, useState } from 'react';
import { Car } from 'lucide-react';

export default function CarAnimation() {
  const [position, setPosition] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        // Reset position when car reaches the end
        if (prev >= 100) {
          return 0;
        }
        return prev + 5;
      });
    }, 150);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative w-full h-10 overflow-hidden">
      <div className="absolute bottom-0 w-full h-1 bg-blue-200 rounded"></div>
      <div 
        className="absolute transition-all duration-150 ease-linear"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <Car className="w-8 h-8 text-blue-600" />
      </div>
    </div>
  );
}