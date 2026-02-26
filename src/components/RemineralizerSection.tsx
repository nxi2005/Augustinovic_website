"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Droplet, Heart, Zap, Maximize2, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import ImageModal from './ImageModal';

const RemineralizerSection = () => {
  const [activeGallery, setActiveGallery] = useState<{ images: string[], index: number } | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const remImages = Array.from({ length: 16 }, (_, i) => `/assets/remineralizator/rem_slika${i + 1}.jpeg`);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % remImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + remImages.length) % remImages.length);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  const benefits = [
    { title: "Poboljšava okus vode", desc: "Vraća kalcij i magnezij za svježiji i prirodniji okus." },
    { title: "Uravnotežuje pH", desc: "Neutralizira kiselost i osigurava ugodniji osjećaj." },
    { title: "Prirodni minerali", desc: "Daje vodi karakterističan mekoću i prirodni doživljaj." }
  ];

  const animationVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="remineralizator" className="py-24 bg-slate-950 text-white overflow-hidden relative">
      <ImageModal 
        images={activeGallery?.images}
        initialIndex={activeGallery?.index}
        onClose={() => setActiveGallery(null)} 
        alt="Remineralizator Prikaz"
      />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 border border-blue-500/20">
              <Droplet size={14} />
              <span>Senzacionalan Dodatak Sustavu</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-none tracking-tighter uppercase">
              Vratite vodi <br />
              <span className="text-blue-500 italic">prirodnu snagu</span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium">
              Remineralizator je dodatni filter koji se koristi uz sustave reverzne osmoze kako bi se u pročišćenu vodu vratila određena količina prirodnih minerala poput kalcija i magnezija.
            </p>
            
            <div className="space-y-8 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="bg-blue-600/20 p-4 rounded-3xl text-blue-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {index === 0 ? <Droplet size={24} /> : index === 1 ? <Zap size={24} /> : <Heart size={24} />}
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-2 uppercase tracking-tight">{benefit.title}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[3rem] backdrop-blur-sm">
              <h4 className="font-black mb-4 uppercase tracking-tighter flex items-center">
                <CheckCircle2 size={20} className="text-blue-500 mr-2" />
                Dostupno za sve RO sustave
              </h4>
              <p className="text-slate-500 text-sm font-medium">
                Pasivni sustav koji ne zahtijeva energiju, a pruža prirodniji doživljaj pitke vode u svakom kućanstvu.
              </p>
            </div>
          </motion.div>

          <div className="relative group">
            <div className="relative aspect-square rounded-3xl md:rounded-[3.5rem] overflow-hidden bg-white shadow-[0_32px_120px_-16px_rgba(37,99,235,0.3)] border-4 md:border-8 border-slate-900 will-change-transform">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -40 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => setActiveGallery({ images: remImages, index: currentSlide })}
                >
                  <Image 
                    src={remImages[currentSlide]} 
                    alt={`Remineralizator detalj ${currentSlide + 1}`} 
                    fill 
                    className="object-contain p-4 md:p-8"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute top-8 right-8 bg-blue-600 p-4 rounded-3xl shadow-2xl z-20">
                <Maximize2 size={24} className="text-white" />
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-slate-900/80 backdrop-blur px-6 py-4 rounded-full border border-white/10 z-20">
                <button 
                  onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
                  aria-label="Prethodna"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="text-xs font-bold uppercase tracking-widest min-w-[60px] text-center">
                  {currentSlide + 1} / {remImages.length}
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
                  aria-label="Sljedeća"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            {/* Decorative background circle */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-full h-full bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemineralizerSection;
