import React from 'react';

export default function EditorialMosaic({ products, onSelectProduct }) {
  const piece1 = products.find(p => p.id === 'gt-103') || products[0]; // Aros Eclipse
  const piece2 = products.find(p => p.id === 'gt-101') || products[1]; // Anillo Gota Fluida
  const piece3 = products.find(p => p.id === 'gt-104') || products[2]; // Cuff Nube
  const piece4 = products.find(p => p.id === 'gt-102') || products[3]; // Collar Cascada

  return (
    <section id="lookbook-spread" className="py-24 bg-[#ECEAE6] text-[#0D0D0D] border-b border-[#0D0D0D]/08 overflow-hidden">
      <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-28">
        
        {/* Section Header */}
        <div className="mb-16 pb-4 border-b border-[#0D0D0D]/08 flex items-end justify-between">
          <div>
            <span className="section-label">01 — Selección Destacada</span>
            <h2 className="text-3xl sm:text-5xl font-extralight uppercase tracking-widest text-[#0D0D0D]">
              Lookbook Editorial
            </h2>
          </div>
          <span className="hidden sm:block text-[10px] tracking-[0.35em] uppercase text-[#9A9A9A] font-light pb-1">
            Colección 2026
          </span>
        </div>

        {/* Asymmetric editorial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Piece 1: Tall left column */}
          <div className="lg:col-span-5 space-y-6">
            <div 
              onClick={() => onSelectProduct(piece1)}
              className="group cursor-pointer relative"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#E5E2DD]">
                <img 
                  src={piece1.image} 
                  alt={piece1.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" 
                />
              </div>

              {/* Label below image — editorial, no button */}
              <div className="pt-5 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-light text-[#0D0D0D] group-hover:text-[#6B6B6B] transition-colors">
                    {piece1.name}
                  </h3>
                  <p className="text-xs text-[#9A9A9A] font-light mt-0.5">{piece1.materials[0].name}</p>
                </div>
                
              </div>
            </div>

            {/* Pull quote */}
            <div className="pt-6 border-t border-[#0D0D0D]/08">
              <p className="italic text-base text-[#9A9A9A] leading-relaxed">
                "Texturas martilladas que capturan reflejos dinámicos sobre la piel."
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Piece 2: Horizontal split */}
            <div 
              onClick={() => onSelectProduct(piece2)}
              className="group cursor-pointer"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
                <div className="sm:col-span-7 aspect-[4/5] overflow-hidden bg-[#E5E2DD]">
                  <img 
                    src={piece2.image} 
                    alt={piece2.name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" 
                  />
                </div>

                <div className="sm:col-span-5 space-y-4">
                  <span className="text-[9px] tracking-[0.4em] text-[#9A9A9A] uppercase font-light">Pieza de autor</span>
                  <h3 className="text-3xl font-extralight text-[#0D0D0D] leading-snug group-hover:text-[#6B6B6B] transition-colors">
                    {piece2.name}
                  </h3>
                  <p className="text-xs text-[#6B6B6B] font-light leading-relaxed">
                    {piece2.description}
                  </p>
                  
                </div>
              </div>
            </div>

            {/* Bottom 2 items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-[#0D0D0D]/08">
              
              {[piece3, piece4].map((piece) => (
                <div 
                  key={piece.id}
                  onClick={() => onSelectProduct(piece)}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#E5E2DD] mb-4">
                    <img 
                      src={piece.image} 
                      alt={piece.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" 
                    />
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-base font-light text-[#0D0D0D] group-hover:text-[#6B6B6B] transition-colors">{piece.name}</h4>
                   
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
