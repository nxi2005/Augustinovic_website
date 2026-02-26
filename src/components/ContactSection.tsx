"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-8 lg:p-16 text-white bg-blue-600 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-3xl rounded-full -ml-32 -mb-32"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-extrabold mb-6">Započnimo razgovor</h2>
                <p className="text-blue-100 text-lg mb-12 max-w-md font-medium">
                  Trebate savjet oko odabira sustava? Javite nam se izravno putem telefona, e-maila ili WhatsAppa za brze informacije i ponude.
                </p>
                
                <div className="space-y-8">
                  <a href="tel:+385912345678" className="flex items-center space-x-4 group">
                    <div className="bg-white/20 p-3 rounded-2xl group-hover:bg-white/30 transition-colors">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-blue-100 text-[10px] font-black uppercase tracking-widest">Nazovite nas</p>
                      <p className="text-xl font-black">+385 91 234 5678</p>
                    </div>
                  </a>
                  
                  <a href="mailto:info@augustinovic.hr" className="flex items-center space-x-4 group">
                    <div className="bg-white/20 p-3 rounded-2xl group-hover:bg-white/30 transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-blue-100 text-[10px] font-black uppercase tracking-widest">Pošaljite e-mail</p>
                      <p className="text-xl font-black">info@augustinović.hr</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-2xl">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-blue-100 text-[10px] font-black uppercase tracking-widest">Lokacija</p>
                      <p className="text-xl font-black">Obala kralja Tomislava 1, 23000 Zadar</p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-12 border-t border-white/10">
                  <div className="group">
                    <span className="text-2xl font-black tracking-[0.2em] text-white transition-colors uppercase italic">
                      AUGUSTINOVIĆ
                    </span>
                  </div>
                  <p className="text-blue-200 text-[10px] font-black uppercase tracking-widest mt-2">Vrhunska tehnologija filtracije vode</p>
                </div>
              </div>
            </div>
            
            {/* Direct Action Box */}
            <div className="p-8 lg:p-16 bg-slate-900 flex flex-col justify-center items-center text-center">
              <div className="max-w-md">
                <div className="bg-blue-600/20 p-6 rounded-full inline-flex mb-8">
                  <MessageSquare size={48} className="text-blue-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-tighter">Trebate brzi odgovor?</h3>
                <p className="text-slate-400 mb-10 text-lg font-medium">
                  Kliknite na gumb ispod i pošaljite nam poruku izravno. Naš tim stručnjaka stoji vam na raspolaganju za sva pitanja.
                </p>
                
                <div className="flex flex-col space-y-4">
                  <a 
                    href="https://wa.me/385912345678"
                    className="w-full inline-flex items-center justify-center px-8 py-5 text-sm font-black uppercase tracking-widest rounded-2xl text-white bg-green-600 hover:bg-green-700 shadow-lg transition-all transform hover:-translate-y-1"
                  >
                    Javi se na WhatsApp
                  </a>
                  <a 
                    href="mailto:info@augustinovic.hr"
                    className="w-full inline-flex items-center justify-center px-8 py-5 text-sm font-black uppercase tracking-widest rounded-2xl text-white bg-blue-600 hover:bg-blue-700 shadow-lg transition-all transform hover:-translate-y-1"
                  >
                    Pošalji E-mail <Send className="ml-2" size={18} />
                  </a>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-8">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Dostupni smo od 08:00 do 16:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
