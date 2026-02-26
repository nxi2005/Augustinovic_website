"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Droplets, ArrowRight, Maximize2 } from 'lucide-react';
import ImageModal from './ImageModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const animationVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white">
      <ImageModal 
        src={isModalOpen ? "/assets/RO/Slika1.jpeg" : null} 
        alt="RO Sustav" 
        onClose={() => setIsModalOpen(false)} 
      />
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100 blur-[100px] animate-pulse"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-slate-100 blur-[100px] animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <ShieldCheck size={14} />
              <span>Kvalitetni Sustavi za Filtraciju Vode</span>
            </div>
            <h1 className="text-5xl lg:text-[5.5rem] font-black text-slate-900 tracking-tighter leading-[1.1] mb-8 uppercase py-2">
              Voda kakvu <br />
              <span className="relative inline-block pb-2">
                vaš dom zaslužuje
                <span className="absolute bottom-0 left-0 w-24 h-2 bg-blue-600 rounded-full"></span>
              </span>
            </h1>
            <p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-medium italic">
              Profesionalna rješenja za filtraciju i omekšavanje vode. Osigurajte čistu, sigurnu i zdravu vodu za cijelu obitelj.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#ro-sustav" 
                className="inline-flex items-center justify-center px-10 py-5 text-sm font-black uppercase tracking-widest rounded-2xl text-white bg-blue-600 hover:bg-blue-700 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-1"
              >
                Istraži rješenja <ArrowRight className="ml-2" size={18} />
              </a>
              <a 
                href="#kontakt" 
                className="inline-flex items-center justify-center px-10 py-5 text-sm font-black uppercase tracking-widest rounded-2xl text-slate-900 bg-white border-2 border-slate-100 hover:bg-slate-50 transition-all transform hover:-translate-y-1"
              >
                Pošaljite upit
              </a>
            </div>
            
            <div className="mt-16 flex items-center space-x-8">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mr-3">
                    <Droplets size={20} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">99% Čistoća</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mr-3">
                    <ShieldCheck size={20} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Lokalni Servis</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[16px] border-white group will-change-transform">
              <Image 
                src="/assets/RO/Slika1.jpeg" 
                alt="RO Sustav" 
                width={800} 
                height={600} 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors flex items-center justify-center">
                <div className="bg-white/95 p-5 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100">
                  <Maximize2 className="text-blue-600" size={24} />
                </div>
              </div>
            </div>
            {/* Elegant decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-blue-50 rounded-full -z-10 blur-3xl opacity-60"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
