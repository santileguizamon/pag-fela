import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EditorialMosaic from './components/EditorialMosaic';
import BrandStory from './components/BrandStory';
import LookbookCatalog from './components/LookbookCatalog';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

import ProductModal from './components/ProductModal';
import SizeGuideModal from './components/SizeGuideModal';
import WishlistDrawer from './components/WishlistDrawer';

import { PRODUCTS, CATEGORIES, BRAND_CONFIG } from './data/products';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [selectedMaterialFilter, setSelectedMaterialFilter] = useState('todos');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Modals & Drawers
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  const handleToggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleRemoveFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((p) => p.id !== productId));
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCat = activeCategory === 'todos' || product.category === activeCategory;
      const matchesMat = selectedMaterialFilter === 'todos' || product.materials.some((m) => m.id === selectedMaterialFilter);
      return matchesCat && matchesMat;
    });
  }, [activeCategory, selectedMaterialFilter]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F2F0ED] text-[#0D0D0D]">
      
      {/* Quiet Luxury Lookbook Navbar */}
      <Navbar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Hero Full-Bleed Lookbook Cover */}
      <Hero
        onExploreClick={() => scrollToSection('lookbook-spread')}
      />

      {/* 01: LAGUNA Staggered Editorial Mosaic */}
      <div id="lookbook-spread">
        <EditorialMosaic
          products={PRODUCTS}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />
      </div>

      {/* 02: Brand Manifesto & Atelier Story */}
      <BrandStory />

      {/* 03: Complete Lookbook Stream */}
      <LookbookCatalog
        products={filteredProducts}
        categories={CATEGORIES}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        selectedMaterialFilter={selectedMaterialFilter}
        setSelectedMaterialFilter={setSelectedMaterialFilter}
        onSelectProduct={(p) => setSelectedProduct(p)}
        wishlist={wishlist}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* FAQ Section */}
      <FAQ onOpenSizeGuide={() => setIsSizeGuideOpen(true)} />

      {/* Footer with MINNA Watermark */}
      <Footer onOpenSizeGuide={() => setIsSizeGuideOpen(true)} />

      {/* MODALS & DRAWERS */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onOpenSizeGuide={() => {
            setSelectedProduct(null);
            setIsSizeGuideOpen(true);
          }}
          isInWishlist={wishlist.some((w) => w.id === selectedProduct.id)}
          onToggleWishlist={handleToggleWishlist}
        />
      )}

      {isSizeGuideOpen && (
        <SizeGuideModal onClose={() => setIsSizeGuideOpen(false)} />
      )}

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Floating Sticky WhatsApp Button */}
      <a
        href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hola GOTA! Quisiera consultar sobre una pieza a medida.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        title="Consultar por WhatsApp"
      >
        <span className="pulse-badge" />
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">WhatsApp Taller</span>
      </a>

    </div>
  );
}
