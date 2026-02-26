"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { motion, useReducedMotion } from 'framer-motion';
import { Shield, Droplets, Home, Settings, FileText, CheckCircle2, AlertTriangle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const PDFViewer = dynamic(() => import('./PDFViewer'), { 
  ssr: false,
  loading: () => <div className="aspect-[3/4] flex items-center justify-center bg-slate-100">Učitavanje preglednika...</div>
});

const OmeksavanjeSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const { ref: videoRef, inView: videoInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      title: "Učinkovito smanjenje tvrdoće",
      description: "Uklanja kalcij i magnezij – glavne uzročnike kamenca.",
      icon: <Shield size={24} className="text-cyan-600" />
    },
    {
      title: "Zaštita cijelog doma",
      description: "Čuva kuhala, aparate za kavu, perilice, bojlere i instalacije.",
      icon: <Droplets size={24} className="text-cyan-600" />
    },
    {
      title: "Dugoročna ušteda",
      description: "Smanjuje troškove održavanja i produžuje vijek trajanja uređaja.",
      icon: <Settings size={24} className="text-cyan-600" />
    }
  ];

  const animationVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="omeksavanje" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={animationVariants}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold uppercase tracking-widest mb-6">
              <Home size={14} />
              <span>Sustavi za Mekšu Vodu</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-none">
              Omekšavanje vode na bazi smole
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              Profesionalni sustavi koji koriste napredni proces ionske izmjene za učinkovito smanjenje tvrdoće vode. Smola unutar filtera zadržava kalcij i magnezij, osiguravajući mekšu vodu i značajno smanjeno stvaranje kamenca.
            </p>

            <div className="space-y-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-6 bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 transition-all hover:shadow-md cursor-default">
                  <div className="bg-cyan-50 p-4 rounded-3xl text-cyan-600 border border-cyan-100">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-1 uppercase tracking-tight">{benefit.title}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-200/50 p-6 rounded-[2rem] border border-slate-200">
                <div className="flex items-center mb-3">
                  <CheckCircle2 size={18} className="text-cyan-600 mr-2" />
                  <span className="font-bold text-slate-800 text-sm uppercase tracking-wide">Što uklanja</span>
                </div>
                <p className="text-slate-600 text-xs font-medium leading-relaxed">
                  Kalcij, magnezij, otopljene mineralne soli koje stvaraju kamenac u cijevima i uređajima.
                </p>
              </div>
              <div className="bg-slate-200/50 p-6 rounded-[2rem] border border-slate-200">
                <div className="flex items-center mb-3">
                  <AlertTriangle size={18} className="text-amber-600 mr-2" />
                  <span className="font-bold text-slate-800 text-sm uppercase tracking-wide">Važna napomena</span>
                </div>
                <p className="text-slate-600 text-xs font-medium leading-relaxed">
                  Sustav ne uklanja bakterije, viruse i pesticide. Za pitku vodu preporučuje se RO filtracija.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <div className="bg-white rounded-[3.5rem] shadow-[0_32px_120px_-16px_rgba(37,99,235,0.15)] overflow-hidden border border-slate-100">
              <div className="bg-slate-900 p-6 flex justify-between items-center text-white">
                <div className="flex items-center space-x-3">
                  <FileText size={20} className="text-cyan-400" />
                  <span className="font-black uppercase tracking-widest text-xs italic">Interaktivni Preglednik</span>
                </div>
              </div>
              
              <div className="bg-slate-100 aspect-[3/4] relative overflow-hidden">
                <PDFViewer file="/assets/Omeksavanje_vode/pdf.pdf" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Centered Video Thumbnail Section */}
        <motion.div 
          ref={videoRef}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h4 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">
            Pogledajte sustav u radu
          </h4>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl bg-slate-900 aspect-video relative group">
            {videoInView ? (
              <video 
                controls 
                className="w-full h-full object-cover"
                preload="metadata"
              >
                <source src="/assets/Omeksavanje_vode/Video_voda1.mp4" type="video/mp4" />
              </video>
            ) : (
              <div className="w-full h-full bg-slate-200 animate-pulse" />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OmeksavanjeSection;
