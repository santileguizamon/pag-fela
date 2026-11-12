import React, { useState } from 'react';
import { X, MessageCircle, Ruler, Check, Heart } from 'lucide-react';
import { BRAND_CONFIG } from '../data/products';

export default function ProductModal({ 
  product, 
  onClose, 
  onOpenSizeGuide, 
  isInWishlist, 
  onToggleWishlist 
}) {
  if (!product) return null;

  const [selectedMaterial, setSelectedMaterial] = useState(product.materials[0]);

  const dynamicPrice = Math.round(product.price * selectedMaterial.priceMultiplier);
  const dynamicPriceFormatted = `$${dynamicPrice.toLocaleString('es-AR')} ARS`;

  const messageText = `Hola GOTA! 💧 Quisiera encargar la pieza *${product.name}* en *${selectedMaterial.name}* (${dynamicPriceFormatted}). ¿Me podrías asesorar con la medida?`;
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(messageText)}`;

  return (
    <div className="modal-overlay p-4 sm:p-6" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 border border-[#0D0D0D]/10 text-[#0D0D0D] hover:text-[#6B6B6B] transition-colors bg-[#F2F0ED]/80 backdrop-blur-md"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Image */}
          <div className="lg:col-span-6 bg-[#ECEAE6] p-6 sm:p-12 flex flex-col justify-center border-r border-[#0D0D0D]/08">
            <div className="aspect-[4/5] overflow-hidden relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.97) contrast(1.03)' }}
              />
            </div>
            
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
                {product.gallery.map((imgUrl, idx) => (
                  <img
                    key={idx}
                    src={imgUrl}
                    alt={`${product.name} vista ${idx+1}`}
                    className="w-14 h-14 object-cover border border-[#0D0D0D]/08 cursor-pointer hover:border-[#0D0D0D] transition-colors"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Customizer */}
          <div className="lg:col-span-6 p-6 sm:p-12 space-y-8 flex flex-col justify-between bg-[#F2F0ED]">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#9A9A9A]">{product.categoryLabel}</span>
                <button 
                  onClick={() => onToggleWishlist(product)}
                  className="flex items-center gap-1.5 text-[#6B6B6B] hover:text-[#0D0D0D] transition-colors"
                >
                  <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-[#0D0D0D] text-[#0D0D0D]' : ''}`} />
                  <span className="text-[10px] uppercase tracking-[0.2em]">{isInWishlist ? 'Guardado' : 'Guardar'}</span>
                </button>
              </div>

              <h2 className="text-3xl sm:text-4xl text-[#0D0D0D] font-extralight leading-snug">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-light text-[#0D0D0D]">
                  {dynamicPriceFormatted}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#6B6B6B] font-light leading-relaxed">
                {product.description}
              </p>

              {/* Material Selector */}
              <div className="space-y-3 pt-2">
                <label className="block text-[10px] font-light uppercase tracking-[0.3em] text-[#0D0D0D]">
                  Material
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {product.materials.map((mat) => (
                    <button
                      key={mat.id}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`py-3 px-3 text-xs text-left border transition-all flex items-center justify-between ${
                        selectedMaterial.id === mat.id
                          ? 'border-[#0D0D0D] bg-[#0D0D0D] text-[#F2F0ED] font-light'
                          : 'border-[#0D0D0D]/10 bg-[#ECEAE6] text-[#6B6B6B] hover:border-[#0D0D0D]'
                      }`}
                    >
                      <span>{mat.name}</span>
                      {selectedMaterial.id === mat.id && <Check className="w-3.5 h-3.5 text-[#9A9A9A]" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="space-y-3 pt-4 border-t border-[#0D0D0D]/08">
                <label className="block text-[10px] font-light uppercase tracking-[0.3em] text-[#0D0D0D]">
                  Talle & Medida
                </label>
                
                <p className="text-xs text-[#6B6B6B] font-light leading-relaxed">
                  Cada pieza se elabora artesanalmente a tu medida exacta. Podés usar nuestro medidor interactivo antes de encargar.
                </p>

                <button
                  onClick={onOpenSizeGuide}
                  className="w-full py-3 px-4 border border-[#0D0D0D]/12 bg-[#ECEAE6] hover:border-[#0D0D0D] text-[10px] uppercase tracking-[0.25em] font-light text-[#0D0D0D] flex items-center justify-center gap-2 transition-colors"
                >
                  <Ruler className="w-4 h-4 text-[#8C8C8C]" />
                  Abrir medidor interactivo →
                </button>
              </div>

            </div>

            {/* WhatsApp CTA */}
            <div className="pt-6 border-t border-[#0D0D0D]/08">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-quiet w-full text-center py-4 text-xs"
              >
                <MessageCircle className="w-4 h-4" />
                Encargar por WhatsApp
              </a>

              <p className="text-[10px] text-[#9A9A9A] font-light text-center mt-3 tracking-wider uppercase">
                Atención directa · Taller Buenos Aires
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
