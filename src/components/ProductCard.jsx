import React from 'react';
import { Heart, MessageCircle, Eye } from 'lucide-react';
import { BRAND_CONFIG } from '../data/products';

/**
 * Ficha compacta del catálogo. Se revela desde Presentación → Ver fichas.
 */
export default function ProductCard({
  product,
  onSelectProduct,
  isInWishlist,
  onToggleWishlist,
  onClose
}) {
  const whatsappMsg = `Hola GOTA. Quisiera consultar sobre la pieza ${product.name}. ¿Me podés asesorar con la medida y los materiales disponibles?`;
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="bg-[#ECEAE6] border border-[#0D0D0D]/10 p-5 space-y-4 text-[#0D0D0D]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[9px] tracking-[0.35em] uppercase text-[#9A9A9A] font-light">
            {product.categoryLabel}
          </p>
          <h3 className="text-lg font-light text-[#0D0D0D] mt-0.5">{product.name}</h3>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className="p-1.5 text-[#9A9A9A] hover:text-[#0D0D0D] transition-colors"
          title={isInWishlist ? 'Quitar' : 'Guardar'}
        >
          <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-[#0D0D0D] text-[#0D0D0D]' : ''}`} />
        </button>
      </div>

      <p className="text-xs text-[#6B6B6B] font-light leading-relaxed line-clamp-3">
        {product.description}
      </p>

      <div className="flex items-baseline justify-between pt-1 border-t border-[#0D0D0D]/10">
        <span className="text-lg font-light text-[#0D0D0D]">{product.priceFormatted}</span>
        <span className="text-[10px] text-[#9A9A9A] tracking-wider uppercase">
          {product.materials[0].name}
        </span>
      </div>

      <div className="space-y-2">
        <button
          onClick={() => onSelectProduct(product)}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-[#0D0D0D]/15 text-[10px] uppercase tracking-[0.25em] font-light text-[#0D0D0D] hover:border-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-[#F2F0ED] transition-all"
        >
          <Eye className="w-3.5 h-3.5" />
          Ver pieza
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0D0D0D] text-[#F2F0ED] text-[10px] uppercase tracking-[0.25em] font-light hover:bg-[#25D366] hover:text-white transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          Escribir al taller
        </a>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="w-full text-center text-[10px] text-[#9A9A9A] uppercase tracking-widest hover:text-[#0D0D0D] transition-colors pt-1"
        >
          Volver al lookbook
        </button>
      )}
    </div>
  );
}
