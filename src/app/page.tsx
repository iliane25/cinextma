'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Chargement dynamique des composants du site normal
const ContinueWatching = dynamic(() => import("@/components/sections/Home/ContinueWatching"));
const HomePageList = dynamic(() => import("@/components/sections/Home/List"));

export default function HomePage() {
  const [isLaunched, setIsLaunched] = useState(false);

  // ⚠️ CHANGE ICI LA DATE ET HEURE EXACTE DE TON LANCEMENT ⚠️
  // Format recommandé : 'YYYY-MM-DDTHH:mm:ss' (heure locale de ton serveur/visiteur)
  const launchDate = new Date('2026-01-01T20:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const [currentPhrase, setCurrentPhrase] = useState('Préparez le pop-corn...');

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

  // Gestion du countdown + détection du lancement
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference <= 0) {
        setIsLaunched(true);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
      const seconds = Math.floor((difference % (1000 * 60)) / 1000).toString().padStart(2, '0');

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [launchDate]);

  // Change la phrase toutes les 10 secondes (seulement en coming-soon)
  useEffect(() => {
    if (isLaunched) return;

    setCurrentPhrase(phrases[0]);
    const phraseInterval = setInterval(() => {
      setCurrentPhrase((prev) => {
        const idx = phrases.indexOf(prev);
        return phrases[(idx + 1) % phrases.length];
      });
    }, 10000);

    return () => clearInterval(phraseInterval);
  }, [isLaunched]);

  // Cache TOUT ce qui reste de la navbar sur la page coming-soon
  useEffect(() => {
    if (isLaunched) return; // Pas besoin de cacher quand le site normal est affiché

    const style = document.createElement('style');
    style.innerHTML = `
      header,
      nav,
      .z-40,
      .w-full,
      .flex.basis-0.flex-row.flex-grow.flex-nowrap.justify-start.bg-transparent.items-center.no-underline.text-medium.whitespace-nowrap.box-border,
      [class*="navbar"],
      [class*="header"],
      [class*="nav"] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [isLaunched]);

  // Si le lancement est passé → affiche le vrai site
  if (isLaunched) {
    return (
      <div className="flex flex-col gap-3 md:gap-8">
        <ContinueWatching />
        <HomePageList />
      </div>
    );
  }

  // Sinon → coming-soon plein écran
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