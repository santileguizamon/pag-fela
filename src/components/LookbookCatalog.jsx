import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import ProductCard from './ProductCard';

export default function LookbookCatalog({
  products,
  categories,
  activeCategory,
  setActiveCategory,
  selectedMaterialFilter,
  setSelectedMaterialFilter,
  onSelectProduct,
  wishlist,
  onToggleWishlist
}) {
  const [showFichas, setShowFichas] = useState(false);

  return (
    <section id="coleccion" className="py-24 bg-[#F2F0ED] text-[#0D0D0D] border-b border-[#0D0D0D]/08">
      <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-28">
        
        <div className="mb-16 pb-6 border-b border-[#0D0D0D]/08">
          <span className="section-label">03 — Catálogo Completo</span>
          <h2 className="text-3xl sm:text-5xl font-extralight uppercase tracking-widest text-[#0D0D0D]">
            Colección Lookbook
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-3 space-y-10 lg:sticky lg:top-28 py-2 self-start bg-[#F2F0ED]">
            
            <div>
              <p className="section-label mb-5">Categorías</p>
              <div className="flex flex-col space-y-3 text-xl font-extralight">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`text-left transition-colors ${
                      activeCategory === cat.id
                        ? 'text-[#0D0D0D] font-light border-l border-[#0D0D0D] pl-3'
                        : 'text-[#9A9A9A] hover:text-[#0D0D0D] pl-1'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[#0D0D0D]/08">
              <p className="section-label mb-4">Material</p>
              <div className="space-y-2 text-xs font-light text-[#9A9A9A]">
                {[
                  { id: 'todos', label: 'Todos los metales' },
                  { id: 'plata', label: 'Plata 925' },
                  { id: 'bronce', label: 'Bronce (oro)' },
                  { id: 'alpaca', label: 'Alpaca' }
                ].map((m) => (
                  <button key={m.id} onClick={() => setSelectedMaterialFilter(m.id)} className="block text-left transition-colors hover:text-[#0D0D0D]">
                    — {m.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[#0D0D0D]/08">
              <p className="section-label mb-4">Presentación</p>
              <button
                onClick={() => setShowFichas((v) => !v)}
                className={`block text-left text-xs font-light tracking-wider uppercase transition-colors ${
                  showFichas
                    ? 'text-[#0D0D0D]'
                    : 'text-[#9A9A9A] hover:text-[#0D0D0D]'
                }`}
              >
                {showFichas ? '— Ocultar fichas' : '— Ver fichas de pieza'}
              </button>
              <p className="mt-3 text-[11px] text-[#9A9A9A] font-light leading-relaxed">
                La ficha resume material, precio y contacto con el taller, debajo de cada fotografía.
              </p>
            </div>

            <div className="pt-8 border-t border-[#0D0D0D]/08 text-[11px] text-[#9A9A9A] font-light space-y-2 leading-relaxed">
              <p className="text-[#0D0D0D] uppercase tracking-wider text-[10px] font-light">
                Piezas a medida
              </p>
              <p>Cada fotografía abre el detalle de la pieza: material, talle y solicitud directa al taller.</p>
            </div>

          </div>

          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {products.map((product) => {
              const isInWishlist = wishlist.some((w) => w.id === product.id);

              return (
                <div 
                  key={product.id}
                  className="flex flex-col group relative"
                >
                  {!showFichas && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(product);
                      }}
                      className="absolute top-3 right-3 z-10 p-1.5 text-[#9A9A9A] hover:text-[#0D0D0D] transition-colors"
                      title={isInWishlist ? "Quitar de guardados" : "Guardar"}
                    >
                      <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-[#0D0D0D] text-[#0D0D0D]' : ''}`} />
                    </button>
                  )}

                  <div 
                    onClick={() => onSelectProduct(product)}
                    className="aspect-[4/5] overflow-hidden bg-[#ECEAE6] relative cursor-pointer"
                  >
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 flex items-end justify-start p-5 bg-gradient-to-t from-[#0D0D0D]/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <p className="italic text-sm sm:text-base text-white/85 font-light tracking-wide">
                        {product.name}
                      </p>
                    </div>
                  </div>

                  {showFichas ? (
                    <div className="mt-4">
                      <ProductCard
                        product={product}
                        onSelectProduct={onSelectProduct}
                        isInWishlist={isInWishlist}
                        onToggleWishlist={onToggleWishlist}
                      />
                    </div>
                  ) : (
                    <div 
                      onClick={() => onSelectProduct(product)}
                      className="pt-4 flex items-start justify-between cursor-pointer"
                    >
                      <div>
                        <h3 className="text-lg font-light text-[#0D0D0D] group-hover:text-[#6B6B6B] transition-colors leading-snug">
                          {product.name}
                        </h3>
                        <p className="text-[11px] text-[#9A9A9A] font-light mt-0.5">
                          {product.materials[0].name}
                        </p>
                      </div>

                      <span className="text-base font-light text-[#6B6B6B] pt-0.5 flex-shrink-0">
                        {product.priceFormatted}
                      </span>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
