import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BRAND_CONFIG } from '../data/products';

export default function BrandStory() {
  return (
    <section id="manifiesto" className="py-24 bg-[#F2F0ED] text-[#0D0D0D] border-b border-[#0D0D0D]/08">
      <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-28">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="section-label">02 — Manifiesto de Autor</span>
          <h2 className="text-3xl sm:text-5xl font-extralight uppercase tracking-widest text-[#0D0D0D]">
            El Taller & Filosofía GOTA
          </h2>
        </div>

        {/* Dual Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] overflow-hidden bg-[#ECEAE6]">
              <img 
                src="/images/identidad.jpeg" 
                alt="Filosofía GOTA Alta Joyería" 
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.96) contrast(1.03)' }}
              />
            </div>
            
            <div className="pt-3 text-[10px] uppercase tracking-[0.3em] text-[#9A9A9A] font-light text-center sm:text-left">
              Taller Escultórico — Buenos Aires
            </div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-7 space-y-10">
            
            <div className="space-y-6">
              <p className="text-3xl sm:text-[2.6rem] text-[#0D0D0D] font-extralight leading-snug">
                "Nuestras joyas son pequeñas esculturas para el cuerpo, esculpidas una a una a la cera perdida."
              </p>
              <p className="text-xs sm:text-sm text-[#6B6B6B] font-light leading-relaxed max-w-2xl">
                En <strong className="text-[#0D0D0D] font-medium">GOTA</strong> trabajamos con metales nobles: Plata 925 maciza, Bronce y Alpaca. Para garantizar una pieza perfecta sin intermediarios ni talles genéricos, coordinamos tu medida directamente por WhatsApp.
              </p>
            </div>

            {/* Inset */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 pt-6 border-t border-[#0D0D0D]/08 items-center">
              
              <div className="sm:col-span-4 aspect-square bg-[#ECEAE6] overflow-hidden">
                <img 
                  src="/images/archivo.jpeg" 
                  alt="Detalle de forjado a mano"
                  className="w-full h-full object-cover" 
                />
              </div>

              <div className="sm:col-span-8 space-y-4 text-xs text-[#6B6B6B] font-light">
                {[
                  { label: 'Fundición Artesanal', desc: 'Cada modelo es moldeado individualmente.' },
                  { label: 'Medida Exacta', desc: 'Calculamos tu talle de anillo antes de forjar.' },
                  { label: 'Contacto Directo', desc: 'Asesoramiento personalizado por WhatsApp.' },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#8C8C8C] mt-2 flex-shrink-0" />
                    <p><strong className="text-[#0D0D0D] font-medium">{label}:</strong> {desc}</p>
                  </div>
                ))}
              </div>

            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hola GOTA! Quisiera consultar sobre el proceso de forjado de una pieza.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-quiet"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Conversar con el Taller
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
