import React from 'react';

export default function Hero({ onExploreClick }) {
  return (
    <section
      className="relative min-h-screen flex items-end justify-start bg-[#0D0D0D] overflow-hidden cursor-pointer"
      onClick={onExploreClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onExploreClick();
        }
      }}
      aria-label="Explorar el lookbook"
    >
      
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/portada.jpeg" 
          alt="GOTA Lookbook Cover"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.96) contrast(1.04)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/55 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full px-8 sm:px-14 lg:px-24 pb-16 sm:pb-24 group pointer-events-none">
        <div className="max-w-2xl space-y-5">
          <span className="text-[10px] tracking-[0.5em] uppercase font-light text-white/55 block">
            Alta Joyería Escultórica — Buenos Aires
          </span>

          <h1 className="text-[clamp(4rem,12vw,9rem)] font-extralight tracking-[0.2em] uppercase text-white leading-none">
            GOTA
          </h1>

          <p className="italic text-lg sm:text-2xl text-white/75 font-light leading-relaxed max-w-lg">
            "Piezas únicas forjadas a mano a tu medida."
          </p>

          <div className="pt-6 flex items-center gap-5">
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/70 font-light group-hover:text-white transition-colors">
              Lookbook 2026
            </span>
            <div className="h-[1px] w-10 bg-white/40 group-hover:w-16 transition-all duration-500" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-white/55 font-light group-hover:text-white/80 transition-colors">
              Explorar ↓
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}
