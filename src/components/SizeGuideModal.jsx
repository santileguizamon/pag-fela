import React, { useState } from 'react';
import { X, Ruler, MessageCircle, Info } from 'lucide-react';
import { BRAND_CONFIG } from '../data/products';

export default function SizeGuideModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('anillos');
  const [internalDiameterMm, setInternalDiameterMm] = useState(16.5);

  const getRingSizeFromDiameter = (mm) => {
    if (mm < 15.8) return { size: 'Talle 10', circ: '~49 mm' };
    if (mm < 16.5) return { size: 'Talle 12', circ: '~51 mm' };
    if (mm < 17.2) return { size: 'Talle 14', circ: '~53 mm' };
    if (mm < 17.8) return { size: 'Talle 16', circ: '~55 mm' };
    if (mm < 18.5) return { size: 'Talle 18', circ: '~57 mm' };
    if (mm < 19.1) return { size: 'Talle 20', circ: '~59 mm' };
    if (mm < 19.8) return { size: 'Talle 22', circ: '~61 mm' };
    return { size: 'Talle 24 (Especial)', circ: '>62 mm' };
  };

  const currentSizeObj = getRingSizeFromDiameter(internalDiameterMm);
  const visualCirclePx = Math.round(internalDiameterMm * 4.3);

  const ringChartData = [
    { talle: 'Talle 10', mm: '15.6 mm', circ: '49 mm' },
    { talle: 'Talle 12', mm: '16.2 mm', circ: '51 mm' },
    { talle: 'Talle 14', mm: '16.9 mm', circ: '53 mm' },
    { talle: 'Talle 16', mm: '17.5 mm', circ: '55 mm' },
    { talle: 'Talle 18', mm: '18.2 mm', circ: '57 mm' },
    { talle: 'Talle 20', mm: '18.8 mm', circ: '59 mm' },
    { talle: 'Talle 22', mm: '19.5 mm', circ: '61 mm' },
  ];

  return (
    <div className="modal-overlay p-4 sm:p-6" onClick={onClose}>
      <div
        className="modal-content max-w-3xl border border-[#0D0D0D]/10 bg-[#F2F0ED] text-[#0D0D0D]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#ECEAE6] p-6 flex items-center justify-between border-b border-[#0D0D0D]/10">
          <div>
            <div className="flex items-center gap-2 text-[#9A9A9A] text-[10px] uppercase tracking-[0.35em] font-light">
              <Ruler className="w-4 h-4 text-[#8C8C8C]" />
              Guía de talle
            </div>
            <h2 className="text-3xl font-extralight text-[#0D0D0D] mt-1 tracking-wide">
              Cómo saber tu medida
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-[#9A9A9A] hover:text-[#0D0D0D] p-2 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex border-b border-[#0D0D0D]/10 bg-[#F2F0ED]">
          <button
            onClick={() => setActiveTab('anillos')}
            className={`flex-1 py-3.5 text-[10px] uppercase tracking-[0.3em] font-light text-center border-b transition-colors ${
              activeTab === 'anillos'
                ? 'border-[#0D0D0D] text-[#0D0D0D] bg-[#ECEAE6]'
                : 'border-transparent text-[#9A9A9A] hover:text-[#0D0D0D]'
            }`}
          >
            Anillos
          </button>
          <button
            onClick={() => setActiveTab('collares')}
            className={`flex-1 py-3.5 text-[10px] uppercase tracking-[0.3em] font-light text-center border-b transition-colors ${
              activeTab === 'collares'
                ? 'border-[#0D0D0D] text-[#0D0D0D] bg-[#ECEAE6]'
                : 'border-transparent text-[#9A9A9A] hover:text-[#0D0D0D]'
            }`}
          >
            Collares
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto bg-[#F2F0ED]">
          {activeTab === 'anillos' && (
            <div className="space-y-6">
              <div className="bg-[#ECEAE6] border border-[#0D0D0D]/10 p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#0D0D0D] font-light">
                    Calculador por diámetro interno
                  </span>
                  <span className="text-[10px] text-[#9A9A9A] tracking-widest uppercase">Deslizá</span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-light text-[#0D0D0D]">
                    <span>
                      Diámetro interno:{' '}
                      <strong className="font-light tracking-wide">{internalDiameterMm.toFixed(1)} mm</strong>
                    </span>
                    <span className="text-[#9A9A9A]">15.0 — 20.5 mm</span>
                  </div>
                  <input
                    type="range"
                    min="15.0"
                    max="20.5"
                    step="0.1"
                    value={internalDiameterMm}
                    onChange={(e) => setInternalDiameterMm(parseFloat(e.target.value))}
                    className="w-full h-2 bg-[#0D0D0D]/10 rounded-lg appearance-none cursor-pointer accent-[#0D0D0D]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center pt-2 border-t border-[#0D0D0D]/10">
                  <div className="flex flex-col items-center justify-center p-4 bg-[#F2F0ED] border border-[#0D0D0D]/10 min-h-[140px]">
                    <div
                      className="ring-circle border-2 border-dashed border-[#8C8C8C] bg-[#0D0D0D]/5 transition-all duration-200 flex items-center justify-center"
                      style={{ width: `${visualCirclePx}px`, height: `${visualCirclePx}px` }}
                    >
                      <span className="text-[10px] tracking-widest text-[#0D0D0D]">
                        {internalDiameterMm.toFixed(1)}mm
                      </span>
                    </div>
                    <p className="text-[10px] text-[#9A9A9A] uppercase tracking-[0.25em] mt-3 font-light">
                      Escala aproximada
                    </p>
                  </div>

                  <div className="bg-[#0D0D0D] text-[#F2F0ED] p-5 space-y-2 text-center sm:text-left">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8C8C] font-light">
                      Talle GOTA
                    </p>
                    <p className="text-4xl text-white font-extralight">
                      {currentSizeObj.size}
                    </p>
                    <p className="text-xs text-[#9A9A9A] font-light">
                      Circunferencia aprox: <span className="text-[#F2F0ED]">{currentSizeObj.circ}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#ECEAE6] p-4 border border-[#0D0D0D]/10 space-y-2">
                  <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#0D0D0D] flex items-center gap-1.5 font-light">
                    <Info className="w-3.5 h-3.5 text-[#8C8C8C]" />
                    Un anillo propio
                  </h4>
                  <p className="text-xs text-[#6B6B6B] font-light leading-relaxed">
                    Tomá un anillo que te quede bien. Medí la distancia interna de borde a borde, sin contar el grosor del metal.
                  </p>
                </div>

                <div className="bg-[#ECEAE6] p-4 border border-[#0D0D0D]/10 space-y-2">
                  <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#0D0D0D] flex items-center gap-1.5 font-light">
                    <Info className="w-3.5 h-3.5 text-[#8C8C8C]" />
                    El dedo
                  </h4>
                  <p className="text-xs text-[#6B6B6B] font-light leading-relaxed">
                    Envolvé una cinta o hilo alrededor del dedo. Marcá el cruce y medí esa distancia en milímetros.
                  </p>
                </div>
              </div>

              <div className="border border-[#0D0D0D]/10 overflow-hidden">
                <table className="w-full text-xs text-left">
                  <thead className="bg-[#ECEAE6] text-[#0D0D0D] uppercase tracking-[0.2em] text-[10px] font-light">
                    <tr>
                      <th className="py-2.5 px-4">Talle GOTA</th>
                      <th className="py-2.5 px-4">Diámetro interno</th>
                      <th className="py-2.5 px-4">Circunferencia</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#0D0D0D]/10 bg-[#F2F0ED]">
                    {ringChartData.map((row) => (
                      <tr key={row.talle} className="hover:bg-[#ECEAE6]">
                        <td className="py-2 px-4 font-light text-[#0D0D0D]">{row.talle}</td>
                        <td className="py-2 px-4 text-[#6B6B6B] tracking-wide">{row.mm}</td>
                        <td className="py-2 px-4 text-[#6B6B6B] tracking-wide">{row.circ}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'collares' && (
            <div className="space-y-4 text-xs text-[#6B6B6B]">
              <div className="bg-[#ECEAE6] p-6 border border-[#0D0D0D]/10 space-y-3">
                <h3 className="text-2xl text-[#0D0D0D] font-extralight">Caída y largos de cadena</h3>
                <p className="font-light">
                  Ofrecemos cadenas regulables para combinar distintas alturas:
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 bg-[#F2F0ED] border-l border-[#0D0D0D]">
                    <span className="text-[#0D0D0D] uppercase tracking-wider min-w-[80px] font-light">38 — 40 cm</span>
                    <span className="font-light"><strong className="font-medium text-[#0D0D0D]">Choker.</strong> Cae sobre la base del cuello.</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-[#F2F0ED] border-l border-[#8C8C8C]">
                    <span className="text-[#0D0D0D] uppercase tracking-wider min-w-[80px] font-light">42 — 45 cm</span>
                    <span className="font-light"><strong className="font-medium text-[#0D0D0D]">Princesa.</strong> Cae a la altura de la clavícula.</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 bg-[#ECEAE6] border-t border-[#0D0D0D]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6B6B6B] text-center sm:text-left font-light">
            Si hay duda sobre la medida, el taller confirma por chat.
          </p>

          <a
            href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hola GOTA. Necesito ayuda para confirmar mi talle de anillo.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-quiet text-xs py-2.5 px-5"
          >
            <MessageCircle className="w-4 h-4" />
            Escribir al taller
          </a>
        </div>
      </div>
    </div>
  );
}
