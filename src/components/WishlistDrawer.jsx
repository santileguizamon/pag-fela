import React from 'react';
import { X, Trash2, MessageCircle, ShoppingBag } from 'lucide-react';
import { BRAND_CONFIG } from '../data/products';

export default function WishlistDrawer({ 
  isOpen, 
  onClose, 
  wishlist, 
  onRemoveFromWishlist,
  onSelectProduct 
}) {
  if (!isOpen) return null;

  const formatMultiItemMessage = () => {
    let text = `Hola GOTA! 💧 Quisiera consultar disponibilidad y coordinar medidas para las siguientes ${wishlist.length} piezas:\n\n`;
    wishlist.forEach((item, index) => {
      text += `${index + 1}. *${item.name}* — ${item.priceFormatted}\n`;
    });
    text += `\n¿Me podés asesorar sobre tiempos de fabricación y envío? Muchas gracias.`;
    return text;
  };

  const whatsappMultiUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(formatMultiItemMessage())}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="drawer-content p-8 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-[#0D0D0D]/08">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-4 h-4 text-[#0D0D0D]" />
              <h3 className="text-xl font-light text-[#0D0D0D]">
                Selección
              </h3>
              <span className="bg-[#0D0D0D] text-[#F2F0ED] text-[9px] w-5 h-5 rounded-full flex items-center justify-center font-medium">
                {wishlist.length}
              </span>
            </div>

            <button
              onClick={onClose}
              className="text-[#9A9A9A] hover:text-[#0D0D0D] p-1.5 transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-[#9A9A9A] font-light mt-4 leading-relaxed">
            Guardá las piezas que te interesen para pedir presupuesto conjunto.
          </p>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto py-6 space-y-3 my-2">
          {wishlist.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <ShoppingBag className="w-8 h-8 text-[#9A9A9A] mx-auto opacity-30" />
              <p className="text-sm text-[#9A9A9A] font-light">Sin piezas guardadas.</p>
              <p className="text-xs text-[#9A9A9A] font-light">El corazón en cada imagen guarda la pieza aquí.</p>
            </div>
          ) : (
            wishlist.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center gap-4 p-4 bg-[#ECEAE6] border border-[#0D0D0D]/08 group hover:border-[#0D0D0D] transition-colors"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 object-cover border border-[#0D0D0D]/08"
                />

                <div className="flex-1 min-w-0">
                  <h4 
                    onClick={() => { onClose(); onSelectProduct(item); }}
                    className="text-base font-light text-[#0D0D0D] truncate cursor-pointer hover:text-[#6B6B6B] transition-colors"
                  >
                    {item.name}
                  </h4>
                  <p className="text-xs font-light text-[#6B6B6B] mt-0.5">
                    {item.priceFormatted}
                  </p>
                </div>

                <button
                  onClick={() => onRemoveFromWishlist(item.id)}
                  className="text-[#9A9A9A] hover:text-[#0D0D0D] p-1.5 transition-colors"
                  title="Eliminar"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlist.length > 0 && (
          <div className="pt-6 border-t border-[#0D0D0D]/08 space-y-4">
            <div className="bg-[#ECEAE6] p-4 border border-[#0D0D0D]/08 text-xs text-[#6B6B6B] flex items-center justify-between">
              <span>Total estimado:</span>
              <strong className="text-base text-[#0D0D0D] font-light">
                ${wishlist.reduce((acc, curr) => acc + curr.price, 0).toLocaleString('es-AR')} ARS
              </strong>
            </div>

            <a
              href={whatsappMultiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-quiet w-full text-center py-3.5 text-xs"
            >
              <MessageCircle className="w-4 h-4" />
              Consultar {wishlist.length} {wishlist.length === 1 ? 'pieza' : 'piezas'} al Taller
            </a>
          </div>
        )}

      </div>
    </div>
  );
}
