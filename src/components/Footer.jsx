import React from 'react';
import { MessageCircle, MapPin } from 'lucide-react';
import { BRAND_CONFIG } from '../data/products';

export default function Footer({ onOpenSizeGuide }) {
  return (
    <footer className="bg-[#0D0D0D] text-[#F2F0ED] pt-20 pb-12 relative overflow-hidden">
      <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-28 space-y-16 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-4xl tracking-[0.35em] font-extralight text-[#F2F0ED] uppercase">
              G O T A
            </h3>
            <p className="text-xs text-[#6B6B6B] font-light leading-relaxed max-w-md">
              Alta joyería escultórica & piezas de autor hechas a mano en Plata 925 y Oro 18k a tu medida exacta.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#6B6B6B] pt-2 font-light">
              <MapPin className="w-3.5 h-3.5 text-[#8C8C8C]" />
              <span>{BRAND_CONFIG.location}</span>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="section-label text-[#6B6B6B]">
              Información & Taller
            </p>
            <ul className="space-y-2 text-xs text-[#6B6B6B] font-light">
              <li>
                <button onClick={onOpenSizeGuide} className="hover:text-[#F2F0ED] transition-colors">
                  Guía & Medidor Interactivo de Talles
                </button>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hola GOTA! Quisiera consultar sobre los tiempos de envío.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F2F0ED] transition-colors"
                >
                  Envíos a todo el país
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hola GOTA! Quisiera consultar sobre cuidados de las piezas.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F2F0ED] transition-colors"
                >
                  Cuidado del Baño de Oro y Plata
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-4 space-y-4">
            <p className="section-label text-[#6B6B6B]">
              Atención Personalizada
            </p>
            <p className="text-xs text-[#6B6B6B] font-light leading-relaxed">
              Cada pieza requiere tu medida exacta. Coordinamos todos los encargos directamente desde el taller.
            </p>
            <a
              href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hola GOTA! Quisiera realizar una consulta.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#F2F0ED]/20 text-[#F2F0ED] text-[10px] uppercase tracking-[0.25em] font-light py-3 px-5 hover:bg-[#F2F0ED] hover:text-[#0D0D0D] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Escribir al Taller
            </a>
          </div>

        </div>

        <div className="text-center pt-4 border-t border-[#F2F0ED]/10 -mx-6 sm:-mx-12 lg:-mx-20 xl:-mx-28 overflow-hidden">
          <h2
            className="text-[22vw] leading-[0.72] uppercase tracking-[0.18em] text-[#F2F0ED] font-extralight select-none pointer-events-none translate-y-[18%]"
            style={{ opacity: 0.06 }}
          >
            GOTA
          </h2>
        </div>

        {/* Subfooter */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B6B6B] font-light gap-4 -mt-8 relative z-10">
          <p>© {new Date().getFullYear()} GOTA Alta Joyería Escultórica. Todos los derechos reservados.</p>
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#6B6B6B]">
            Edición Lookbook 2026
          </span>
        </div>

      </div>
    </footer>
  );
}
