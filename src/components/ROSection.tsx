"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Check, Droplet, Shield, Zap, Heart, Maximize2, DollarSign, Globe, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import ImageModal from './ImageModal';

const ROSection = () => {
  const [activeGallery, setActiveGallery] = useState<{ images: string[], index: number } | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const galleryImages = [
    "/assets/RO/Slika2.jpeg",
    "/assets/RO/Slika3.jpeg",
    "/assets/RO/Slika4.jpeg",
    "/assets/RO/Slika5.jpeg",
    "/assets/RO/Slika6.jpeg",
    "/assets/RO/Slika7.jpeg",
    "/assets/RO/Slika8.jpeg"
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  const roFeatures = [
    "Uklanja olovo, arsen i druge teške metale",
    "Eliminira nitrate i fluoride",
    "Uklanja pesticide i farmaceutske ostatke",
    "Zadržava bakterije, viruse i mikroplastiku",
    "Čista voda izravno iz slavine - 0,02 € po litri",
    "Štedi kućanske aparate od kamenca",
    "Ekološki prihvatljivo - bez plastičnih boca"
  ];

  const animationVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="ro-sustav" className="py-24 bg-white overflow-hidden">
      <ImageModal 
        images={activeGallery?.images}
        initialIndex={activeGallery?.index}
        onClose={() => setActiveGallery(null)} 
        alt="Reverzna Osmoza Prikaz"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Textual Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationVariants}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-100">
            <Shield size={14} />
            <span>Profesionalni Standard Filtracije</span>
          </div>
          <h2 className="text-4xl lg:text-[4rem] font-black text-slate-900 mb-8 uppercase tracking-tighter leading-[1.1] py-2">
            Reverzna Osmoza (RO)
          </h2>
          <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium italic">
            Tražite trajno rješenje za čistu, sigurnu i ukusnu vodu? Sustav reverzna osmoza (RO) predstavlja profesionalni standard kućne filtracije.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-16 items-start">
            <div className="space-y-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 border-l-4 border-blue-600 pl-4">Što je reverzna osmoza?</h3>
                <p className="text-slate-600 leading-relaxed font-medium text-sm">
                    RO sustav koristi polupropusnu membranu koja fizički uklanja gotovo sve štetne tvari iz vode – uključujući i one koje klasični filteri ne mogu zadržati. Rezultat je iznimno čista, zdravstveno sigurna voda.
                </p>
                <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                    <h4 className="text-xs font-black uppercase tracking-widest text-blue-600 mb-4">Usporedba Isplativosti</h4>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-tight">
                            <span className="text-slate-500 text-[10px]">RO Sustav (Litra)</span>
                            <span className="text-blue-600">0,02 €</span>
                        </div>
                        <div className="w-full h-1.5 bg-blue-100 rounded-full overflow-hidden">
                            <div className="w-[10%] h-full bg-blue-600 rounded-full"></div>
                        </div>
                        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-tight">
                            <span className="text-slate-500 text-[10px]">Flaširana voda (Litra)</span>
                            <span className="text-slate-400">0,60 €</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div className="w-full h-full bg-slate-400 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 border-l-4 border-blue-600 pl-4 mb-6">RO uklanja do 99% nečistoća:</h3>
                <ul className="grid grid-cols-1 gap-4">
                {roFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start text-slate-700 font-bold text-sm">
                    <CheckCircle2 size={18} className="text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                    </li>
                ))}
                </ul>
            </div>
          </div>
        </motion.div>

        {/* Large Centered Slideshow - Enhanced Visible Border */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-5xl mx-auto mb-32"
        >
            <div className="relative aspect-[16/9] rounded-[4.5rem] overflow-hidden bg-white shadow-[0_64px_128px_-32px_rgba(0,0,0,0.15)] border-[20px] border-slate-100 will-change-transform mb-12 group ring-2 ring-blue-600/10 ring-offset-4 ring-offset-white">
                <AnimatePresence mode='wait'>
                    <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => setActiveGallery({ images: galleryImages, index: currentSlide })}
                    >
                    <Image 
                        src={galleryImages[currentSlide]} 
                        alt={`RO Sustav detalj ${currentSlide + 1}`} 
                        fill 
                        className="object-contain p-12"
                        sizes="(max-width: 1200px) 100vw, 1000px"
                    />
                    </motion.div>
                </AnimatePresence>
                
                {/* HUD Overlay - Expand Button only */}
                <div className="absolute top-10 right-10 bg-slate-900 p-4 rounded-3xl shadow-2xl z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={24} className="text-white" />
                </div>
            </div>

            {/* Slideshow HUD - Moved Below the image container */}
            <div className="flex justify-center items-center">
                <div className="flex items-center space-x-8 bg-slate-50 px-10 py-6 rounded-[3rem] border-2 border-slate-100 shadow-sm transition-all hover:shadow-md">
                    <button 
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="p-3 hover:bg-white rounded-full transition-all text-slate-900 hover:shadow-md group/btn"
                    aria-label="Prethodna"
                    >
                    <ChevronLeft size={28} className="group-hover/btn:-translate-x-1 transition-transform" />
                    </button>
                    
                    <div className="flex flex-col items-center min-w-[120px]">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-2">Galerija RO</span>
                        <div className="text-2xl font-black tracking-tighter text-slate-900 italic">
                            {currentSlide + 1} <span className="text-slate-200 mx-1">/</span> {galleryImages.length}
                        </div>
                    </div>

                    <button 
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="p-3 hover:bg-white rounded-full transition-all text-slate-900 hover:shadow-md group/btn"
                    aria-label="Sljedeća"
                    >
                    <ChevronRight size={28} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
            
            {/* Background decorative spread */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-50/30 rounded-full blur-[100px] pointer-events-none"></div>
        </motion.div>

        {/* Video & More Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-[3.5rem] overflow-hidden bg-slate-900 shadow-2xl relative aspect-video border-[12px] border-white">
            <video 
              controls 
              className="w-full h-full object-cover"
              preload="metadata"
            >
              <source src="/assets/RO/RO_video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="bg-blue-600 rounded-[3.5rem] p-12 text-white flex flex-col justify-center shadow-2xl shadow-blue-600/20">
            <h3 className="text-3xl font-black mb-8 uppercase tracking-tighter leading-none">Vrhunska Kvaliteta Vode</h3>
            <ul className="space-y-6 font-bold uppercase tracking-widest text-[10px]">
              <li className="flex items-center space-x-4 bg-white/10 p-5 rounded-[2rem] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"><Heart size={20} /></div>
                <span>Zdravlje cijele obitelji</span>
              </li>
              <li className="flex items-center space-x-4 bg-white/10 p-5 rounded-[2rem] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"><Droplet size={20} /></div>
                <span>Bolji okus kave i jela</span>
              </li>
              <li className="flex items-center space-x-4 bg-white/10 p-5 rounded-[2rem] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"><Zap size={20} /></div>
                <span>Trajna zaštita aparata</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROSection;
