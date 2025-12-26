import { PlayersProps } from "@/types";

/**
 * Génère une liste de lecteurs de films avec leurs titres et URLs respectifs.
 * Chaque lecteur est construit en utilisant l'ID du film fourni.
 *
 * @param {string | number} id - L'ID du film à intégrer dans les URLs des lecteurs.
 * @param {number} [startAt] - La position de départ en secondes à intégrer dans les URLs. Optionnel.
 * @returns {PlayersProps[]} - Un tableau d'objets, chacun contenant
 * le titre du lecteur et l'URL source correspondante.
 */
export const getMoviePlayers = (id: string | number, startAt?: number): PlayersProps[] => {
  const isFNAF = id === 1228246 || id === '1228246';
  const isZootopie = id === 1084242 || id === '1084242';
  
  return [
    // Source spéciale pour Five Nights at Freddy's
    ...(isFNAF ? [{
      title: "Five Nights at Freddy's 2 (VOD Française)",
      source: `https://supervideo.cc/e/k36vox3wkpjz`,
      recommended: true,
      fast: true,
      ads: false,
      language: 'fr',
      vod: true
    }] : []),
      
    // Source spéciale pour Zootopie 2
    ...(isZootopie ? [{
      title: "Zootopie 2 (VOD Française)",
      source: `https://supervideo.cc/e/ieo92r7hiicb`,
      recommended: true,
      fast: true,
      ads: true,
      language: 'fr',
      vod: true
    }] : []),
    
    // Sources VOD populaires en français
    {
      title: "2Embed (TMDB - VF/VOSTFR)",
      source: `https://www.2embed.cc/embed/${id}?lang=fr`,
      recommended: true,
      fast: true,
      ads: true,
      language: 'fr',
      vod: true
    },
    {
      title: "VidSrc (Multi-sources)",
      source: `https://vidsrc.me/embed/movie?tmdb=${id}&language=fr` as const,
      recommended: true,
      fast: true,
      ads: true,
      language: 'fr',
      vod: true
    },
    {
      title: "VidSrc PRO (HD)",
      source: `https://vidsrc.to/embed/movie/${id}?language=fr` as const,
      recommended: true,
      fast: true,
      ads: true,
      language: 'fr',
      vod: true
    },
    {
      title: "VidCloud (Multi-sources)",
      source: `https://mcloud.to/embed/movie/${id}?lang=fr` as const,
      recommended: true,
      fast: true,
      ads: true,
      language: 'fr',
      vod: true
    },
    {
      title: "NetFilm (Multi-sources)",
      source: `https://netfilm.app/movie/${id}?lang=fr` as const,
      recommended: true,
      fast: true,
      ads: true,
      language: 'fr',
      vod: true
    },
    {
      title: "2Embed (Alternative)",
      source: `https://2embed.org/embed/movie?tmdb=${id}&lang=fr` as const,
      recommended: true,
      fast: true,
      ads: true,
      language: 'fr',
      vod: true
    },
    {
      title: "VidMoly (Multi-sources)",
      source: `https://vidsrc.me/embed/movie?tmdb=${id}&language=fr&source=12` as const,
      recommended: true,
      fast: true,
      ads: true,
      language: 'fr',
      vod: true
    },
    {
      title: "Veed",
      source: `https://supervideo.tv/e/${id}?language=fr` as const,
      ads: true,
      language: 'fr',
      vod: true
    },
    {
      title: "VidGuard",
      source: `https://vidguard.to/e/${id}?language=fr`,
      recommended: true,
      fast: true,
      ads: true,
      language: 'fr',
      vod: true
    },
    {
      title: "Coflex",
      source: `https://coflux.pn/e/${id}?language=fr`,
      ads: true,
      language: 'fr',
      vod: true
    },
    {
      title: "DingezTuni",
      source: `https://dingeztuni.com/e/${id}?language=fr`,
      ads: true,
      language: 'fr',
      vod: true
    },
    // 2Embed - TMDB (Recommandé)
    {
      title: "2Embed (TMDB - VF/VOSTFR)",
      source: `https://www.2embed.cc/embed/${id}?lang=fr`,
      recommended: true,
      fast: true,
      ads: true,
      language: 'fr',
      vod: true
    },
    // 2Embed - IMDB (Alternative)
    {
      title: "2Embed (IMDB - Version Anglaise)",
      source: `https://www.2embed.cc/embed/tt${id}`,
      recommended: false,
      fast: true,
      ads: true,
      language: 'en'
    },
    {
      title: "VidLink (Version Française)",
      source: `https://vidlink.pro/movie/${id}?player=jw&primaryColor=006fee&secondaryColor=a2a2a2&iconColor=eefdec&autoplay=false&startAt=${startAt || ""}&lang=fr`,
      recommended: true,
      fast: true,
      ads: true,
      resumable: true,
      language: 'fr'
    },
    {
      title: "VidLink 2",
      source: `https://vidlink.pro/movie/${id}?primaryColor=006fee&autoplay=false&startAt=${startAt}`,
      recommended: true,
      fast: true,
      ads: true,
      resumable: true,
    },
    {
      title: "VidKing (Version Française)",
      // NOTE: VidKing a un problème connu avec le paramètre 'progress' qui peut bloquer la lecture à un moment donné.
      // Actuellement, ce lecteur peut enregistrer la progression mais ne peut pas reprendre à un moment précis.
      // Le paramètre 'progress' est désactivé jusqu'à résolution du problème.
      source: `https://www.vidking.net/embed/movie/${id}?color=006fee&autoplay=false&lang=fr`, //&progress=${startAt || ""}`,
      recommended: true,
      fast: true,
      resumable: true,
      language: 'fr'
    },
    {
      title: "<Embed>",
      source: `https://embed.su/embed/movie/${id}`,
      ads: true,
    },
    {
      title: "SuperEmbed",
      source: `https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1`,
      fast: true,
      ads: true,
    },
    {
      title: "FilmKu",
      source: `https://filmku.stream/embed/${id}`,
      ads: true,
    },
    {
      title: "NontonGo",
      source: `https://www.nontongo.win/embed/movie/${id}`,
      ads: true,
    },
    {
      title: "AutoEmbed 1",
      source: `https://autoembed.co/movie/tmdb/${id}`,
      fast: true,
      ads: true,
    },
    {
      title: "AutoEmbed 2",
      source: `https://player.autoembed.cc/embed/movie/${id}`,
      ads: true,
    },
    {
      title: "2Embed",
      source: `https://www.2embed.cc/embed/${id}`,
      ads: true,
    },
    {
      title: "VidSrc 1",
      source: `https://vidsrc.xyz/embed/movie/${id}`,
      ads: true,
    },
    {
      title: "VidSrc 2",
      source: `https://vidsrc.to/embed/movie/${id}`,
      ads: true,
    },
    {
      title: "VidSrc 3",
      source: `https://vidsrc.icu/embed/movie/${id}`,
      ads: true,
    },
    {
      title: "VidSrc 4",
      source: `https://vidsrc.cc/v2/embed/movie/${id}?autoPlay=false`,
      ads: true,
    },
    {
      title: "VidSrc 5",
      source: `https://vidsrc.cc/v3/embed/movie/${id}?autoPlay=false`,
      recommended: true,
      fast: true,
      ads: true,
    },
    {
      title: "MoviesAPI",
      source: `https://moviesapi.club/movie/${id}`,
      ads: true,
    },
  ];
};

/**
 * Génère une liste de lecteurs de séries TV avec leurs titres et URLs respectifs.
 * Chaque lecteur est construit en utilisant l'ID de la série, la saison et l'épisode fournis.
 *
 * @param {string | number} id - L'ID de la série TV à intégrer dans les URLs des lecteurs.
 * @param {string | number} [season] - Le numéro de la saison de l'épisode à intégrer.
 * @param {string | number} [episode] - Le numéro de l'épisode à intégrer.
 * @param {number} [startAt] - La position de départ en secondes à intégrer dans les URLs. Optionnel.
 * @returns {PlayersProps[]} - Un tableau d'objets, chacun contenant
 * le titre du lecteur et l'URL source correspondante.
 */
export const getTvShowPlayers = (
  id: string | number,
  season: number,
  episode: number,
  startAt?: number,
): PlayersProps[] => {
  return [
    // Sources VOD populaires en français
    {
      title: `2Embed - S${season}E${episode} (VF/VOSTFR)`,
      source: `https://www.2embed.cc/embedtv/${id}&s=${season}&e=${episode}&lang=fr`,
      recommended: true,
      fast: true,
      ads: true,
      language: 'fr',
      vod: true
    },
    {
      title: `VidSrc - S${season}E${episode} (Multi-sources)`,
      source: `https://vidsrc.me/embed/tv?tmdb=${id}&season=${season}&episode=${episode}&language=fr`,
      recommended: true,
      fast: true,
      ads: true,
      language: 'fr',
      vod: true
    },
    {
      title: `VidSrc PRO - S${season}E${episode} (HD)`,
      source: `https://vidsrc.to/embed/tv/${id}/${season}/${episode}?language=fr`,
      recommended: true,
      fast: true,
      ads: true,
      language: 'fr',
      vod: true
    },
    {
      title: `VidCloud - S${season}E${episode} (Multi-sources)`,
      source: `https://mcloud.to/embed/tv/${id}/${season}-${episode}?lang=fr`,
      recommended: true,
      fast: true,
      ads: true,
      language: 'fr',
      vod: true
    },
    {
      title: `NetFilm - S${season}E${episode} (Multi-sources)`,
      source: `https://netfilm.app/tv/${id}-${season}-${episode}?lang=fr`,
      recommended: true,
      fast: true,
      ads: true,
      language: 'fr',
      vod: true
    },
    {
      title: `2Embed (Alternative) - S${season}E${episode}`,
      source: `https://2embed.org/embedtv?tmdb=${id}&s=${season}&e=${episode}&lang=fr`,
      recommended: true,
      fast: true,
      ads: true,
      language: 'fr',
      vod: true
    },
    {
      title: `VidMoly - S${season}E${episode} (Multi-sources)`,
      source: `https://vidsrc.me/embed/tv?tmdb=${id}&season=${season}&episode=${episode}&language=fr&source=12`,
      recommended: true,
      fast: true,
      ads: true,
      language: 'fr',
      vod: true
    },
    {
      title: `DoodStream - Saison ${season} (VF/VOSTFR)`,
      source: `https://dood.ws/e/tv/${id}/${season}/${episode}?language=fr`,
      recommended: true,
      fast: true,
      ads: true,
      language: 'fr',
      vod: true
    },
    // Lecteurs avec interface et contenu en français
    {
      title: "NontonGo (Français)",
      source: `https://www.nontongo.win/embed/tv/${id}/${season}/${episode}?language=fr`,
      recommended: true,
      fast: true,
      ads: true,
      language: 'fr'
    },
    {
      title: "VidLink (Français)",
      source: `https://vidlink.pro/tv/${id}/${season}/${episode}?player=jw&primaryColor=f5a524&secondaryColor=a2a2a2&iconColor=eefdec&autoplay=false&startAt=${startAt || ""}&language=fr`,
      recommended: true,
      fast: true,
      ads: true,
      resumable: true,
      language: 'fr'
    },
    {
      title: "VidKing (Français)",
      source: `https://www.vidking.net/embed/tv/${id}/${season}/${episode}?color=f5a524&autoplay=false`,
      recommended: true,
      fast: true,
      resumable: true,
      language: 'fr'
    },
    {
      title: "2Embed - Version Française (TMDB)",
      source: `https://www.2embed.cc/embedtv/${id}&s=${season}&e=${episode}`,
      recommended: true,
      fast: true,
      ads: true,
      language: 'fr'
    },
    {
      title: `2Embed - Saison ${season} Épisode ${episode} (Version Française)`,
      source: `https://www.2embed.cc/embedtv/${id}&s=${season}&e=${episode}&lang=fr`,
      recommended: true,
      fast: true,
      ads: true,
      language: 'fr'
    },
    {
      title: `2Embed - Saison ${season} Complète (Version Française)`,
      source: `https://www.2embed.cc/embedtvfull/${id}?lang=fr`,
      recommended: true,
      fast: true,
      ads: true,
      language: 'fr'
    },
    {
      title: "2Embed - Version Alternative (IMDB - Anglais)",
      source: `https://www.2embed.cc/embedtv/tt${id}&s=${season}&e=${episode}`,
      recommended: false,
      fast: true,
      ads: true,
      language: 'en'
    },
    {
      title: "FilmKu (Français)",
      source: `https://filmku.stream/embed/series?tmdb=${id}&sea=${season}&epi=${episode}&language=fr`,
      recommended: true,
      fast: true,
      ads: true,
      language: 'fr'
    },
    {
      title: "VidLink 2 (Multilingue)",
      source: `https://vidlink.pro/tv/${id}/${season}/${episode}?primaryColor=f5a524&autoplay=false&startAt=${startAt}&language=fr`,
      recommended: true,
      fast: true,
      ads: true,
      resumable: true,
    },
    {
      title: "2Embed - Version Alternative (IMDB)",
      source: `https://www.2embed.cc/embedtv/tt${id}&s=${season}&e=${episode}`,
      recommended: false,
      fast: true,
      ads: true,
      language: 'fr'
    },
    {
      title: "<Embed>",
      source: `https://embed.su/embed/tv/${id}/${season}/${episode}`,
      ads: true,
    },
    {
      title: "SuperEmbed",
      source: `https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1&s=${season}&e=${episode}`,
      fast: true,
      ads: true,
    },
    // FilmKu a été déplacé plus haut avec support français
    // NontonGo a été déplacé en haut de la liste avec support français
    {
      title: "AutoEmbed 1",
      source: `https://autoembed.co/tv/tmdb/${id}-${season}-${episode}`,
      fast: true,
      ads: true,
    },
    {
      title: "AutoEmbed 2",
      source: `https://player.autoembed.cc/embed/tv/${id}/${season}/${episode}`,
      ads: true,
    },
    {
      title: "2Embed",
      source: `https://www.2embed.cc/embedtv/${id}&s=${season}&e=${episode}`,
      ads: true,
    },
    {
      title: "VidSrc 1",
      source: `https://vidsrc.xyz/embed/tv/${id}/${season}/${episode}`,
      ads: true,
    },
    {
      title: "VidSrc 2",
      source: `https://vidsrc.to/embed/tv/${id}/${season}/${episode}`,
      ads: true,
    },
    {
      title: "VidSrc 3",
      source: `https://vidsrc.icu/embed/tv/${id}/${season}/${episode}`,
      ads: true,
    },
    {
      title: "VidSrc 4",
      source: `https://vidsrc.cc/v2/embed/tv/${id}/${season}/${episode}?autoPlay=false`,
      ads: true,
    },
    {
      title: "VidSrc 5",
      source: `https://vidsrc.cc/v3/embed/tv/${id}/${season}/${episode}?autoPlay=false`,
      recommended: true,
      fast: true,
      ads: true,
    },
    {
      title: "MoviesAPI",
      source: `https://moviesapi.club/tv/${id}-${season}-${episode}`,
      ads: true,
    },
  ];
};
