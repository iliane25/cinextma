'use client';

import { useState, useEffect } from 'react';

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
        const minutes = Math.floor((difference / (1000 * 60)) % 60).toString().padStart(2, '0');
        const seconds = Math.floor((difference / 1000) % 60).toString().padStart(2, '0');

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      }
    };

    calculateTimeLeft(); // Au chargement
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-6 md:gap-10 text-white py-10">
      <div className="text-center">
        <div className="text-5xl md:text-7xl font-bold bg-black/60 backdrop-blur-sm rounded-2xl px-6 py-8 shadow-2xl">
          {timeLeft.days}
        </div>
        <p className="mt-4 text-lg md:text-xl uppercase tracking-wider">Jours</p>
      </div>
      <div className="text-center">
        <div className="text-5xl md:text-7xl font-bold bg-black/60 backdrop-blur-sm rounded-2xl px-6 py-8 shadow-2xl">
          {timeLeft.hours}
        </div>
        <p className="mt-4 text-lg md:text-xl uppercase tracking-wider">Heures</p>
      </div>
      <div className="text-center">
        <div className="text-5xl md:text-7xl font-bold bg-black/60 backdrop-blur-sm rounded-2xl px-6 py-8 shadow-2xl">
          {timeLeft.minutes}
        </div>
        <p className="mt-4 text-lg md:text-xl uppercase tracking-wider">Minutes</p>
      </div>
      <div className="text-center">
        <div className="text-5xl md:text-7xl font-bold bg-black/60 backdrop-blur-sm rounded-2xl px-6 py-8 shadow-2xl">
          {timeLeft.seconds}
        </div>
        <p className="mt-4 text-lg md:text-xl uppercase tracking-wider">Secondes</p>
      </div>
    </div>
  );
}