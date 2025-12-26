'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Chemins corrects pour ton projet (Home avec H majuscule)
const ContinueWatching = dynamic(() => import("@/components/sections/Home/ContinueWatching"));
const HomePageList = dynamic(() => import("@/components/sections/Home/List"));

export default function HomePage() {
  const [isLaunched, setIsLaunched] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // DATE DE LANCEMENT
  const launchDate = new Date('2026-01-26T18:00:00').getTime();

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

  // Compteur + déclenchement transition
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference <= 0 && !isLaunched) {
        setIsTransitioning(true);
        setTimeout(() => setIsLaunched(true), 1000);
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
  }, [launchDate, isLaunched]);

  // Phrases qui changent
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

  // Cache la navbar
  useEffect(() => {
    if (isLaunched) return;

    const style = document.createElement('style');
    style.innerHTML = `
      header, nav, .z-40, .w-full, 
      .flex.basis-0.flex-row.flex-grow.flex-nowrap.justify-start.bg-transparent.items-center.no-underline.text-medium.whitespace-nowrap.box-border,
      [class*="navbar"], [class*="header"], [class*="nav"] {
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

  // Neige instantanée et fluide (apparaît dès l'ouverture)
  useEffect(() => {
    if (isLaunched) return;

    const snowContainer = document.createElement('div');
    snowContainer.style.position = 'fixed';
    snowContainer.style.inset = '0';
    snowContainer.style.pointerEvents = 'none';
    snowContainer.style.zIndex = '10';
    snowContainer.style.transition = 'opacity 1s ease-out';
    document.body.appendChild(snowContainer);

    const css = `
      @keyframes snow-fall {
        0% { transform: translateY(-100vh) translateX(0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(100vh) translateX(var(--drift)); opacity: 0; }
      }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = css;
    document.head.appendChild(styleSheet);

    for (let i = 0; i < 100; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = `${1.5 + Math.random() * 2.5}px`;
      particle.style.height = particle.style.width;
      particle.style.background = 'white';
      particle.style.borderRadius = '50%';
      particle.style.opacity = `${Math.random() * 0.7 + 0.3}`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`; // Visible dès le début
      const drift = (Math.random() - 0.5) * 250;
      particle.style.setProperty('--drift', `${drift}px`);
      const duration = 10 + Math.random() * 15;
      particle.style.animation = `snow-fall ${duration}s linear infinite`;
      particle.style.animationDelay = `${Math.random() * duration}s`;

      snowContainer.appendChild(particle);
    }

    if (isTransitioning) {
      snowContainer.style.opacity = '0';
    }

    return () => {
      if (document.body.contains(snowContainer)) document.body.removeChild(snowContainer);
      if (document.head.contains(styleSheet)) document.head.removeChild(styleSheet);
    };
  }, [isLaunched, isTransitioning]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Coming-soon avec fade-out */}
      <div
        className={`fixed inset-0 transition-opacity duration-1000 ease-in-out ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        } ${isLaunched ? 'hidden' : ''}`}
      >
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-red-900 opacity-60"></div>
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative z-20 text-center px-6">
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

          <div className="absolute bottom-10 text-white/60 text-sm z-20">
            © 2025 CINEXTMA
          </div>
        </div>
      </div>

      {/* Vrai site avec fade-in */}
      <div
        className={`transition-opacity duration-1000 ease-in-out ${
          isLaunched ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-3 md:gap-8 min-h-screen">
          <ContinueWatching />
          <HomePageList />
        </div>
      </div>
    </div>
  );
}