import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Scissors, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Menu, 
  MessageSquare, 
  ArrowRight, 
  Check, 
  Star,
  ShoppingBag,
  Facebook,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Data lists
const galleryImages = [
  {
    url: "https://i.ibb.co/gZ1rR3qN/561385644-797759323008363-3282272037376862143-n.jpg",
    title: "Pastele i wzory w serduszka",
    desc: "Mięciutki, dwustronny hamaczek dla gryzoni w urocze wzory."
  },
  {
    url: "https://i.ibb.co/svKFpQBF/570063413-802776495839979-1952968033200794943-n.jpg",
    title: "Leśny zakątek",
    desc: "Komplet akcesoriów z motywem liści i przytulnym minky."
  },
  {
    url: "https://i.ibb.co/HfZZ8wBQ/665866469-933439069440387-3691320573272293959-n.jpg",
    title: "Różowa norka",
    desc: "Ciepła kieszonka idealna na chłodniejsze dni."
  },
  {
    url: "https://i.ibb.co/SXhFJZQM/668467179-933439079440386-6441045708144796576-n.jpg",
    title: "Wiszący tunel",
    desc: "Doskonałe miejsce do zabawy i odpoczynku dla aktywnych maluchów."
  },
  {
    url: "https://i.ibb.co/21nf316W/665903108-933439116107049-5304792182737683716-n.jpg",
    title: "Komplet Boho",
    desc: "Elegancka kompozycja kolorystyczna pasująca do każdego wnętrza."
  },
  {
    url: "https://i.ibb.co/ymS84hWV/665724025-933439126107048-7717919136693908067-n.jpg",
    title: "Hamak piętrowy",
    desc: "Podwójna dawka miękkości dla większej gromadki."
  },
  {
    url: "https://i.ibb.co/h1xkQSb2/667607110-933439146107046-256278894592420419-n.jpg",
    title: "Kostka z okienkiem",
    desc: "Zabudowany domek dający poczucie bezpieczeństwa."
  },
  {
    url: "https://i.ibb.co/KcrnTDy8/669061399-933439159440378-8976138750928197381-n.jpg",
    title: "Miętowy zestaw",
    desc: "Świeży, radosny design połączony z maksymalnym komfortem."
  },
  {
    url: "https://i.ibb.co/6cGtz3p4/697792689-960382576746036-7717303678143690363-n.jpg",
    title: "Luksusowy pałac",
    desc: "Wieloczęściowy, dopasowany zestaw wykonany na specjalne zamówienie."
  }
];

const testimonials = [
  {
    text: "Serdecznie polecam! Zamówienie zostało sprawnie zrealizowane, kontakt przemiły i bezproblemowy. Hamaczki są solidnie uszyte, mięciutkie, z dobrej jakości materiałów, widać że włożono w nie dużo pracy i serca - wszystko zgodne z opisem i ustaleniami.",
    author: "Karolina",
    role: "Właścicielka trzech szczurków",
    stars: 5
  },
  {
    text: "Polecam z całego serca ❤️🔥❤️🔥❤️🔥 zestaw jest prześliczny. Zrobione bardzo starannie. Pani jest bardzo miła i stara się dla klienta. Bardzo szybko zrobione i dostarczone.",
    author: "Natalia",
    role: "Właścicielka chomika i świnki",
    stars: 5
  },
  {
    text: "Kupiłam jakiś czas temu hamaczki i domki i jestem zachwycona! Żaden się nie zepsuł a moje ogonki uwielbiają w nich spać. Są zrobione bardzo dokładnie i widać, że osoba bardzo się nad nimi stara.",
    author: "Marta",
    role: "Właścicielka stada koszatniczek",
    stars: 5
  }
];

const fbLink = "https://www.facebook.com/profile.php?id=100083229082121";
const logoUrl = "https://i.ibb.co/gbkmdb2S/328431267-529946755869822-6735820464498485539-n.jpg";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle shadow on header scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
    document.body.style.overflow = 'auto';
  };

  const showNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % galleryImages.length);
    }
  };

  const showPrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-[#fff] text-[#020004] font-sans selection:bg-[#eddadc] selection:text-[#020004] antialiased">
      
      {/* HEADER / NAVIGATION */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-[#eddadc]/30 py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and title */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#f39da0] shadow-sm transition-transform duration-300 group-hover:scale-105">
                <img 
                  src={logoUrl} 
                  alt="Hamakowy Zakątek Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg sm:text-xl tracking-tight text-[#020004] group-hover:text-[#f39da0] transition-colors">
                  Hamakowy Zakątek
                </span>
                <span className="text-[10px] sm:text-xs tracking-wider text-gray-500 font-medium">
                  Rękodzieło z sercem 🧵
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-700">
              <a href="#o-marce" className="hover:text-[#f39da0] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#f39da0] hover:after:w-full after:transition-all">O marce</a>
              <a href="#produkty" className="hover:text-[#f39da0] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#f39da0] hover:after:w-full after:transition-all">Nasze produkty</a>
              <a href="#galeria" className="hover:text-[#f39da0] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#f39da0] hover:after:w-full after:transition-all">Galeria</a>
              <a href="#opinie" className="hover:text-[#f39da0] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#f39da0] hover:after:w-full after:transition-all">Opinie</a>
              <a href="#zamowienia" className="hover:text-[#f39da0] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#f39da0] hover:after:w-full after:transition-all">Zamówienia</a>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <a 
                href={fbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#020004] text-white hover:bg-[#f39da0] hover:text-white shadow-sm hover:shadow transition-all duration-300"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Napisz na Facebooku
              </a>
            </div>

            {/* Mobile Hamburger Menu */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#020004] hover:bg-[#eddadc]/30 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-30 md:hidden"
            />
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-35 shadow-2xl p-6 pt-24 flex flex-col justify-between md:hidden"
            >
              <div className="flex flex-col gap-6 font-medium text-lg text-gray-800">
                <a 
                  href="#o-marce" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#f39da0] transition-colors border-b border-[#eddadc]/20 pb-2"
                >
                  O marce
                </a>
                <a 
                  href="#produkty" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#f39da0] transition-colors border-b border-[#eddadc]/20 pb-2"
                >
                  Nasze produkty
                </a>
                <a 
                  href="#galeria" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#f39da0] transition-colors border-b border-[#eddadc]/20 pb-2"
                >
                  Galeria realizacji
                </a>
                <a 
                  href="#opinie" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#f39da0] transition-colors border-b border-[#eddadc]/20 pb-2"
                >
                  Opinie klientów
                </a>
                <a 
                  href="#zamowienia" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#f39da0] transition-colors border-b border-[#eddadc]/20 pb-2"
                >
                  Zamówienia
                </a>
              </div>

              <div className="flex flex-col gap-4">
                <a 
                  href={fbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider bg-[#020004] text-white hover:bg-[#f39da0] transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  Napisz na Facebooku
                </a>
                <p className="text-center text-xs text-gray-400">
                  Rozgość się w naszym zakątku 🌸
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#fcf8f8] via-white to-white">
        {/* Background decorative blurry circles for artsy feeling */}
        <div className="absolute top-20 right-[-10%] w-72 h-72 rounded-full bg-[#eddadc]/30 blur-3xl -z-10" />
        <div className="absolute bottom-10 left-[-5%] w-80 h-80 rounded-full bg-[#f39da0]/10 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Text content */}
            <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#020004] leading-[1.15]"
              >
                Hamakowy Zakątek
              </motion.h1>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-3 text-lg sm:text-xl md:text-2xl font-medium text-[#f39da0] tracking-wide"
              >
                Ręcznie szyte hamaki dla zwierząt 🐭🐹🐰
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-6 text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
              >
                Tworzymy wyjątkowe, mięciutkie i wygodne hamaczki dla małych pupili. Każdy produkt powstaje indywidualnie, z dbałością o szczegóły i komfort zwierząt.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <a 
                  href={fbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-[#020004] text-white hover:bg-[#f39da0] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  Zamów przez Facebook
                </a>
                <a 
                  href="#galeria"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-white border border-[#eddadc] text-gray-700 hover:border-[#f39da0] hover:text-[#f39da0] transition-all duration-300"
                >
                  🐾 Zobacz realizacje
                </a>
              </motion.div>
            </div>

            {/* Hero Image Collage */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0"
            >
              {/* Artsy frame collage */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
                
                {/* Background decorative shape */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#eddadc] to-[#f39da0]/20 rounded-[40px] rotate-6 scale-95 opacity-50 -z-10" />

                {/* Primary main image frame (Top-right) */}
                <div className="absolute top-0 right-4 w-[75%] h-[75%] bg-white p-3 rounded-2xl shadow-xl border border-[#eddadc]/40 rotate-2 hover:rotate-0 transition-transform duration-500 z-10">
                  <div className="w-full h-[85%] rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src={galleryImages[1].url} 
                      alt="Hamakowy Zakątek Realizacja" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      decoding="async"
                    />
                  </div>
                  <div className="h-[15%] flex items-center justify-center">
                    <span className="font-serif text-xs italic text-gray-500">Pracownia Hamaków ♥</span>
                  </div>
                </div>

                {/* Secondary overlapping image frame (Bottom-left) */}
                <div className="absolute bottom-0 left-4 w-[65%] h-[65%] bg-white p-2.5 rounded-2xl shadow-lg border border-[#eddadc]/40 -rotate-6 hover:rotate-0 transition-transform duration-500 z-20">
                  <div className="w-full h-[82%] rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src={galleryImages[0].url} 
                      alt="Hamakowy Zakątek Detale" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      decoding="async"
                    />
                  </div>
                  <div className="h-[18%] flex items-center justify-center">
                    <span className="text-[10px] font-semibold tracking-wider text-[#f39da0] uppercase">100% Handmade</span>
                  </div>
                </div>

                {/* Cute stamp badge */}
                <div className="absolute bottom-[40%] right-[-10px] w-16 h-16 sm:w-20 sm:h-20 bg-[#eddadc] text-[#020004] rounded-full flex flex-col items-center justify-center shadow-lg border-2 border-white rotate-12 z-20">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#f39da0] fill-[#f39da0] animate-pulse" />
                  <span className="text-[8px] sm:text-[9px] font-bold tracking-wider uppercase mt-1">Z Miłości</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* O MARCE */}
      <section id="o-marce" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left side: Beautiful image & brand story backdrop */}
            <div className="relative order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-md aspect-square bg-gradient-to-bl from-[#eddadc]/30 to-[#f39da0]/10 rounded-[3rem] p-4 sm:p-6">
                
                {/* Visual Image with retro rounded margins */}
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
                  <img 
                    src={logoUrl} 
                    alt="Nasza Pracownia" 
                    className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            {/* Right side: Brand Story & USPs */}
            <div className="order-1 lg:order-2 flex flex-col">
              <span className="text-[#f39da0] font-bold text-xs uppercase tracking-widest mb-2 block">Nasza Historia</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#020004] leading-tight">
                Mała pracownia, wielkie serce ❤️
              </h2>
              
              <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg font-light">
                Hamakowy Zakątek powstał z miłości do zwierząt i rękodzieła. Tworzymy akcesoria dla małych pupili, które są nie tylko piękne, ale przede wszystkim wygodne i trwałe. 
                Szyjemy z certyfikowanych i bezpiecznych tkanin, dopasowując każdy szczegół tak, aby sprostać wymaganiom nawet najbardziej wybrednych małych odkrywców.
              </p>

              {/* Highlights List */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#eddadc]/10 transition-colors">
                  <div className="p-2 rounded-lg bg-[#eddadc]/40 text-[#f39da0] shrink-0">
                    <Heart className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#020004]">Handmade</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Każdy produkt szyty ręcznie w domowej pracowni.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#eddadc]/10 transition-colors">
                  <div className="p-2 rounded-lg bg-[#eddadc]/40 text-[#f39da0] shrink-0">
                    <Scissors className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#020004]">Dbałość o szczegóły</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Precyzyjne szwy, ukryte nitki, solidne mocowania.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#eddadc]/10 transition-colors">
                  <div className="p-2 rounded-lg bg-[#eddadc]/40 text-[#f39da0] shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#020004]">Indywidualne projekty</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Szeroki wybór wzorów, kolorów i rozmiarów.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#eddadc]/10 transition-colors">
                  <div className="p-2 rounded-lg bg-[#eddadc]/40 text-[#f39da0] shrink-0">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#020004]">Komfort zwierząt</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Bezpieczne materiały minky, dające niesamowitą miękkość.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NASZE PRODUKTY (OFERTA) */}
      <section id="produkty" className="py-20 bg-[#fcf8f8] border-t border-b border-[#eddadc]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#f39da0] font-bold text-xs uppercase tracking-widest mb-2 block">Dla Kogo Szyjemy</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#020004]">
              Nasze produkty
            </h2>
            <div className="w-12 h-1 bg-[#f39da0] mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-gray-500 text-sm sm:text-base font-light">
              Tworzymy akcesoria tekstylne, które odmienią klatkę lub wybieg Twoich milusińskich w przytulne królestwo.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white rounded-3xl p-8 border border-[#eddadc]/40 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#eddadc]/20 rounded-bl-[80px] -z-0 transition-transform duration-500 group-hover:scale-110" />
              
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#eddadc]/30 flex items-center justify-center text-3xl mb-6 relative z-10 shadow-inner">
                  🐭
                </div>
                <h3 className="font-serif text-xl font-bold text-[#020004] mb-3">
                  Hamaki dla gryzoni
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  Miękkie miejsca odpoczynku dla szczurków, myszy i innych małych pupili. Szyte z grubych, ciepłych warstw zapewniających doskonałą izolację i komfort.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-[#f39da0] text-xs font-bold uppercase tracking-wider">
                <span>Mięciutkie materiały</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white rounded-3xl p-8 border border-[#f39da0]/20 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#f39da0]/10 rounded-bl-[80px] -z-0 transition-transform duration-500 group-hover:scale-110" />
              
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#f39da0]/20 flex items-center justify-center text-3xl mb-6 relative z-10 shadow-inner">
                  🐹
                </div>
                <h3 className="font-serif text-xl font-bold text-[#020004] mb-3">
                  Zestawy dla zwierząt
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  Komplety dopasowane kolorystycznie i funkcjonalnie. Idealny sposób na estetyczne i jednolite wyposażenie całej klatki w pasujące wzory.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-[#f39da0] text-xs font-bold uppercase tracking-wider">
                <span>Zgrane komplety</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white rounded-3xl p-8 border border-[#eddadc]/40 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#eddadc]/20 rounded-bl-[80px] -z-0 transition-transform duration-500 group-hover:scale-110" />
              
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#eddadc]/30 flex items-center justify-center text-3xl mb-6 relative z-10 shadow-inner">
                  🐰
                </div>
                <h3 className="font-serif text-xl font-bold text-[#020004] mb-3">
                  Produkty na zamówienie
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  Możliwość indywidualnego wyboru wzorów, kolorów i rozmiarów. Jeśli Twój pupil ma specyficzne potrzeby lub nietypową klatkę – uszyjemy coś specjalnego!
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-[#f39da0] text-xs font-bold uppercase tracking-wider">
                <span>Wybierz swój styl</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* GALERIA REALIZACJI */}
      <section id="galeria" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#f39da0] font-bold text-xs uppercase tracking-widest mb-2 block">Nasze Portfolio</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#020004]">
              Galeria realizacji
            </h2>
            <div className="w-12 h-1 bg-[#f39da0] mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-gray-500 text-sm sm:text-base font-light">
              Zobacz efekty pracy naszej domowej pracowni. Każde zdjęcie przedstawia gotowe, zrealizowane z miłością zamówienie. Kliknij na zdjęcie, aby je powiększyć.
            </p>
          </div>

          {/* Pinterest-like Masonry / Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => openLightbox(idx)}
                className="group relative cursor-pointer bg-white rounded-3xl overflow-hidden border border-[#eddadc]/30 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Image Wrap */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    decoding="async"
                  />
                </div>

                {/* Hover overlay element */}
                <div className="absolute inset-0 bg-[#020004]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-white/90 shadow-md flex items-center justify-center text-[#f39da0] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Sparkles className="w-5 h-5 fill-current" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OPINIE KLIENTÓW */}
      <section id="opinie" className="py-20 bg-[#fcf8f8] border-t border-b border-[#eddadc]/20 relative overflow-hidden">
        {/* Soft background shape */}
        <div className="absolute top-1/2 right-[-5%] w-60 h-60 rounded-full bg-[#eddadc]/20 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#f39da0] font-bold text-xs uppercase tracking-widest mb-2 block">Satysfakcja Pupili</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#020004]">
              Co mówią nasi klienci ❤️
            </h2>
            <div className="w-12 h-1 bg-[#f39da0] mx-auto mt-4 rounded-full" />
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] p-8 border border-[#eddadc]/40 shadow-sm relative flex flex-col justify-between"
              >
                {/* Decorative quotes block */}
                <div className="absolute top-6 right-8 text-6xl font-serif text-[#eddadc]/40 select-none pointer-events-none">
                  “
                </div>

                <div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic font-light relative z-10">
                    "{test.text}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#eddadc]/40 flex items-center justify-center text-[#f39da0]">
                    <Heart className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-700">
                      {test.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ZAMÓWIENIA & KONTAKT */}
      <section id="zamowienia" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-tr from-[#fcf8f8] via-[#eddadc]/10 to-[#eddadc]/45 rounded-[3rem] p-8 sm:p-12 md:p-16 border border-[#eddadc]/50 shadow-md relative overflow-hidden">
            
            {/* Soft decorative background bubble */}
            <div className="absolute bottom-[-50px] right-[-50px] w-48 h-48 rounded-full bg-[#f39da0]/20 blur-xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">
              
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md border border-[#eddadc]/40 text-2xl mb-6">
                💌
              </div>

              <span className="text-[#f39da0] font-bold text-xs uppercase tracking-widest mb-2 block">
                Jak złożyć zamówienie?
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#020004] mb-4">
                Wygodne zamówienia przez Facebook
              </h2>

              <p className="text-gray-600 max-w-xl leading-relaxed text-sm sm:text-base mb-8 font-light">
                Zamówienia realizujemy poprzez wiadomość prywatną na Facebooku. Kliknij przycisk poniżej, opisz czego potrzebujesz (wymiary, kolory, preferowany zwierzak), a my doradzimy i przygotujemy dla Ciebie wycenę!
              </p>

              {/* Order process steps */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl mb-10 text-left">
                
                <div className="bg-white/80 p-5 rounded-2xl border border-[#eddadc]/30 flex flex-col">
                  <span className="text-xs font-bold text-[#f39da0] mb-2 uppercase tracking-wider">Krok 1</span>
                  <span className="font-bold text-xs text-[#020004] mb-1">Napisz do nas</span>
                  <span className="text-[11px] text-gray-500 font-light">Wybierz wzory z galerii lub opisz swój własny pomysł.</span>
                </div>

                <div className="bg-white/80 p-5 rounded-2xl border border-[#eddadc]/30 flex flex-col">
                  <span className="text-xs font-bold text-[#f39da0] mb-2 uppercase tracking-wider">Krok 2</span>
                  <span className="font-bold text-xs text-[#020004] mb-1">Ustalamy detale</span>
                  <span className="text-[11px] text-gray-500 font-light">Dobieramy wymiary, kolory tkanin i potwierdzamy wycenę.</span>
                </div>

                <div className="bg-white/80 p-5 rounded-2xl border border-[#eddadc]/30 flex flex-col">
                  <span className="text-xs font-bold text-[#f39da0] mb-2 uppercase tracking-wider">Krok 3</span>
                  <span className="font-bold text-xs text-[#020004] mb-1">Szyjemy z sercem</span>
                  <span className="text-[11px] text-gray-500 font-light">Ręcznie wykonujemy akcesoria i szybko wysyłamy do Ciebie.</span>
                </div>

              </div>

              <a 
                href={fbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-full text-sm font-bold uppercase tracking-wider bg-[#020004] text-white hover:bg-[#f39da0] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Facebook className="w-4 h-4 fill-current" />
                Napisz wiadomość na Facebooku
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-[#fcf8f8] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="text-3xl mb-4">🐾</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#020004] max-w-xl leading-snug">
              Stwórz wyjątkowy zakątek dla swojego pupila 🐾
            </h2>
            <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-md font-light">
              Każdy zwierzak zasługuje na wygodne i piękne miejsce odpoczynku. Zamów swój spersonalizowany zestaw już dzisiaj.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
              <a 
                href={fbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-[#f39da0] text-white hover:bg-[#020004] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Heart className="w-4 h-4 fill-current" />
                💌 Zamów przez Facebook
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020004] text-white/90 pt-16 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            
            {/* Col 1: Brand details */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#f39da0]">
                  <img 
                    src={logoUrl} 
                    alt="Hamakowy Zakątek Logo" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-lg tracking-tight text-white">
                    Hamakowy Zakątek
                  </span>
                  <span className="text-[10px] tracking-wider text-gray-400 font-medium">
                    Hamaki dla zwierząt 🐭🐹🐰
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm font-light mt-2">
                Domowa, artystyczna pracownia rękodzieła. Szyjemy z miłości do zwierząt, tworząc wyjątkowo miękkie i trwałe akcesoria.
              </p>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="md:col-span-3 flex flex-col gap-3">
              <h5 className="font-bold text-xs tracking-wider uppercase text-white mb-1">Pracownia</h5>
              <a href="#o-marce" className="text-gray-400 hover:text-[#f39da0] text-sm transition-colors">O marce</a>
              <a href="#produkty" className="text-gray-400 hover:text-[#f39da0] text-sm transition-colors">Nasze produkty</a>
              <a href="#galeria" className="text-gray-400 hover:text-[#f39da0] text-sm transition-colors">Galeria realizacji</a>
              <a href="#opinie" className="text-gray-400 hover:text-[#f39da0] text-sm transition-colors">Opinie klientów</a>
            </div>

            {/* Col 3: Contact details */}
            <div className="md:col-span-4 flex flex-col gap-3">
              <h5 className="font-bold text-xs tracking-wider uppercase text-white mb-1">Zamówienia & Kontakt</h5>
              <p className="text-sm text-gray-400 font-light">
                Zamówienia: <span className="font-bold text-white">Facebook Messenger</span>
              </p>
              <div className="mt-2">
                <a 
                  href={fbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-[#f39da0] text-white px-4 py-2 rounded-full transition-all"
                >
                  <Facebook className="w-3.5 h-3.5 fill-current" />
                  Odwiedź Facebook
                </a>
              </div>
            </div>

          </div>

          {/* Copyright details */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-light gap-4">
            <p>© {new Date().getFullYear()} Hamakowy Zakątek. Wszelkie prawa zastrzeżone.</p>
            <p className="flex items-center gap-1">
              Szyte z miłością w Polsce ❤️
            </p>
          </div>
        </div>
      </footer>

      {/* INTERACTIVE PHOTO LIGHTBOX / MODAL */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-[#020004]/95 backdrop-blur-md z-50 flex flex-col justify-between p-4 sm:p-6 md:p-8"
          >
            {/* Topbar inside lightbox */}
            <div className="flex items-center justify-between text-white w-full max-w-5xl mx-auto pt-2">
              <span className="text-xs uppercase tracking-widest font-bold text-gray-400">
                Zdjęcie {activePhotoIndex + 1} z {galleryImages.length}
              </span>
              <button 
                onClick={closeLightbox}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Zamknij"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Lightbox Content Area */}
            <div className="flex items-center justify-between w-full max-w-5xl mx-auto my-auto relative min-h-[50vh]">
              
              {/* Prev Button */}
              <button 
                onClick={showPrevPhoto}
                className="absolute left-2 sm:-left-4 md:-left-12 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer z-10"
                aria-label="Poprzednie"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Photo Display Frame with Stagger Animations */}
              <motion.div 
                key={activePhotoIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                onClick={(e) => e.stopPropagation()}
                className="mx-auto max-w-full max-h-[70vh] flex flex-col items-center bg-white rounded-2xl p-3 sm:p-4 shadow-2xl relative"
              >
                <img 
                  src={galleryImages[activePhotoIndex].url} 
                  alt="Hamakowy Zakątek" 
                  className="max-w-full max-h-[65vh] object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                  decoding="async"
                />
              </motion.div>

              {/* Next Button */}
              <button 
                onClick={showNextPhoto}
                className="absolute right-2 sm:-right-4 md:-right-12 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer z-10"
                aria-label="Następne"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

            </div>

            {/* Bottom info banner */}
            <div className="text-center text-xs text-gray-400 pb-2 flex flex-col gap-2 items-center">
              <p>Wszystkie nasze hamaki są szyte indywidualnie na zamówienie 🐹</p>
              <a 
                href={fbLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeLightbox}
                className="inline-flex items-center gap-1.5 text-white underline hover:text-[#f39da0] transition-colors"
              >
                Zamów podobny zestaw przez Facebook <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
