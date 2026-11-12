import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG } from '../data/products';

export default function Navbar({ 
  wishlistCount, 
  onOpenWishlist 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      
      <nav 
        className={`transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F2F0ED]/92 backdrop-blur-md border-b border-[#0D0D0D]/10 py-4 shadow-sm'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-28 flex items-center justify-between">
          
          {/* Left Navigation */}
          <div className={`hidden lg:flex items-center space-x-12 text-[10px] tracking-[0.35em] uppercase font-light ${isScrolled ? 'text-[#6B6B6B]' : 'text-white/70'}`}>
            <button
              onClick={() => handleScrollToSection('coleccion')}
              className={`transition-colors py-1 ${isScrolled ? 'hover:text-[#0D0D0D]' : 'hover:text-white'}`}
            >
              Colección
            </button>
            <button
              onClick={() => handleScrollToSection('manifiesto')}
              className={`transition-colors py-1 ${isScrolled ? 'hover:text-[#0D0D0D]' : 'hover:text-white'}`}
            >
              El Taller
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-1.5 ${isScrolled ? 'text-[#0D0D0D]' : 'text-white'}`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Center Brand */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-center group"
          >
            <h1 className={`text-3xl sm:text-4xl tracking-[0.5em] font-extralight uppercase transition-colors ${
              isScrolled
                ? 'text-[#0D0D0D] group-hover:text-[#6B6B6B]'
                : 'text-white group-hover:text-white/70'
            }`}>
              G O T A
            </h1>
          </a>

          {/* Right Actions */}
          <div className={`flex items-center space-x-8 text-[10px] tracking-[0.3em] uppercase font-light ${isScrolled ? 'text-[#6B6B6B]' : 'text-white/70'}`}>
            <button
              onClick={onOpenWishlist}
              className={`relative flex items-center gap-2 transition-colors ${isScrolled ? 'hover:text-[#0D0D0D]' : 'hover:text-white'}`}
            >
              <span className="hidden sm:inline">Guardados</span>
              <Heart className={`w-4 h-4 ${isScrolled ? 'text-[#0D0D0D]' : 'text-white'}`} />
              {wishlistCount > 0 && (
                <span className={`text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-semibold ${
                  isScrolled ? 'bg-[#0D0D0D] text-[#F2F0ED]' : 'bg-white text-[#0D0D0D]'
                }`}>
                  {wishlistCount}
                </span>
              )}
            </button>

            <a
              href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hola GOTA. Quisiera consultar por piezas a medida.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center gap-1.5 transition-colors pb-0.5 border-b ${
                isScrolled
                  ? 'hover:text-[#0D0D0D] border-[#0D0D0D]/20'
                  : 'hover:text-white border-white/30'
              }`}
            >
              <MessageCircle className={`w-3.5 h-3.5 ${isScrolled ? 'text-[#8C8C8C]' : 'text-white/70'}`} />
              WhatsApp
            </a>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F2F0ED] text-[#0D0D0D] px-8 py-10 space-y-8 border-b border-[#0D0D0D]/10 shadow-xl">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#9A9A9A] font-light">Navegación</p>
            <div className="flex flex-col space-y-5 text-3xl font-extralight">
              <button 
                onClick={() => { setMobileMenuOpen(false); handleScrollToSection('coleccion'); }}
                className="text-left hover:text-[#6B6B6B] transition-colors"
              >
                Colección
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); handleScrollToSection('manifiesto'); }}
                className="text-left hover:text-[#6B6B6B] transition-colors"
              >
                El Taller
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
