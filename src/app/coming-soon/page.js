'use client';

import { useState, useEffect } from 'react';

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  // CHANGE TA DATE DE LANCEMENT ICI
  const launchDate = "January 1, 2026 20:00:00";

  // Liste de phrases qui changent toutes les 10 secondes
  const phrases = [
    "Préparez le pop-corn...",
    "Des milliers de films et séries vous attendent 🍿",
    "Bientôt en illimité, sans pub, gratuit !",
    "Le meilleur du cinéma arrive enfin...",
    "Marathon séries incoming !",
    "Qualité HD, streaming fluide, zéro attente",
    "Votre nouvelle plateforme préférée arrive...",
    "On peaufine les derniers détails 🎬",
    "Patience... ça va valoir le coup !",
    "CINEXTMA : le futur du streaming gratuit",
  ];

  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);

  // Countdown
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(launchDate).getTime() - new Date().getTime();

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

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  // Change la phrase toutes les 10 secondes
  useEffect(() => {
    const phraseTimer = setInterval(() => {
      setCurrentPhrase((prev) => {
        const currentIndex = phrases.indexOf(prev);
        const nextIndex = (currentIndex + 1) % phrases.length;
        return phrases[nextIndex];
      });
    }, 10000); // 10 secondes

    return () => clearInterval(phraseTimer);
  }, []);

  // Cache la navbar complètement
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      nav, header, .z-40.flex.gap-4.w-full.flex-row.relative {
        display: none !important;
      }
      .border-background.bg-background.absolute.inset-0 {
        display: none !important;
      }
      .flex.basis-0.flex-row.flex-grow,
      .flex.gap-4.h-full.flex-row.flex-nowrap.items-center {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-red-900 opacity-60"></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-wider">
          CINEXTMA
        </h1>
        <p className="text-2xl md:text-4xl mb-12 text-yellow-400">
          🍿 Le meilleur du streaming arrive 🍿
        </p>

        <div className="flex justify-center gap-8 md:gap-16 flex-wrap mb-12">
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-bold bg-white/10 backdrop-blur-md rounded-3xl px-10 py-12 shadow-2xl">
              {timeLeft.days}
            </div>
            <p className="mt-6 text-2xl uppercase tracking-wider">Jours</p>
          </div>
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-bold bg-white/10 backdrop-blur-md rounded-3xl px-10 py-12 shadow-2xl">
              {timeLeft.hours}
            </div>
            <p className="mt-6 text-2xl uppercase tracking-wider">Heures</p>
          </div>
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-bold bg-white/10 backdrop-blur-md rounded-3xl px-10 py-12 shadow-2xl">
              {timeLeft.minutes}
            </div>
            <p className="mt-6 text-2xl uppercase tracking-wider">Minutes</p>
          </div>
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-bold bg-white/10 backdrop-blur-md rounded-3xl px-10 py-12 shadow-2xl">
              {timeLeft.seconds}
            </div>
            <p className="mt-6 text-2xl uppercase tracking-wider">Secondes</p>
          </div>
        </div>

        {/* Phrase qui change toutes les 10 secondes */}
        <p className="mt-20 text-xl md:text-3xl font-light animate-pulse">
          {currentPhrase}
        </p>
      </div>

      <div className="absolute bottom-10 text-white/60 text-sm">
        © 2025 CINEXTMA
      </div>
    </div>
  );
}