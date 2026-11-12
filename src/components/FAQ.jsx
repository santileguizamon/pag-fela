import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG } from '../data/products';

export default function FAQ({ onOpenSizeGuide }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "¿Por qué las compras se finalizan por WhatsApp?",
      a: "Nuestras piezas de alta joyería escultórica se elaboran a pedido según tu medida exacta de dedo o largo preferido de cadena. Para garantizar un calce perfecto y asesorarte personalmente, coordinamos cada encargo directamente por chat."
    },
    {
      q: "¿Cómo sé qué talle de anillo pedir?",
      a: "El medidor de talle indica la medida GOTA a partir del diámetro interno de un anillo propio, o de la circunferencia del dedo con una cinta.",
      action: true
    },
    {
      q: "¿De qué materiales son las piezas?",
      a: "Trabajamos con plata 925, bronce y alpaca. Si estás buscando una pieza en otro metal, podés consultarnos."
    },
    {
      q: "¿Cuánto demora la elaboración de mi pedido?",
      a: "- Cada pieza se elabora especialmente para cada persona, por lo que el tiempo de producción es de 15 a 20 días. \n- Si necesitás recibir tu pedido antes, contamos con una opción express de 5 a 7 días hábiles, con un recargo del 15% sobre el valor de la pieza."
    },
    {
      q: "¿Hacen envíos a todo el país?",
      a: "Sí, realizamos envíos asegurados por correo o mensajería privada a todo el país. Al escribirnos a WhatsApp te informamos el costo exacto a tu localidad."
    }
  ];

  return (
    <section className="py-24 bg-[#ECEAE6] text-[#0D0D0D] border-b border-[#0D0D0D]/08">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        
        <div className="space-y-3">
          <span className="section-label block text-center">Dudas & Asesoramiento</span>
          <h2 className="text-3xl sm:text-5xl font-extralight text-[#0D0D0D] text-center">
            Preguntas Frecuentes
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2 pt-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="border border-[#0D0D0D]/08 bg-[#F2F0ED] transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 text-lg text-[#0D0D0D] hover:text-[#6B6B6B] transition-colors font-light"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#9A9A9A] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#6B6B6B] font-light leading-relaxed border-t border-[#0D0D0D]/05">
                    <p>{faq.a}</p>
                    {faq.action && (
                      <button
                        onClick={onOpenSizeGuide}
                        className="mt-4 text-xs font-light text-[#0D0D0D] underline block uppercase tracking-widest"
                      >
                        Abrir calculador interactivo →
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Callout */}
        <div className="p-8 border border-[#0D0D0D]/08 bg-[#F2F0ED] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl text-[#0D0D0D] font-light">¿Tenés una consulta especial?</h4>
            <p className="text-xs text-[#6B6B6B] font-light mt-1">Estamos en el taller para asesorarte personalmente.</p>
          </div>
          <a
            href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hola GOTA! Quisiera hacer una consulta.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-quiet py-3 px-6 text-xs whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            Escribir al Taller
          </a>
        </div>

      </div>
    </section>
  );
}
