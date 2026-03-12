import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-12">
          <div className="flex flex-col items-center md:items-start max-w-sm !bg-transparent !border-none !shadow-none">
            <Link href="/" className="group mb-4 flex items-center !bg-transparent !border-none !shadow-none outline-none">
              <img
                src="/logo/logo.png"
                alt="Augustinović Logo"
                className="block w-full max-w-[150px] h-auto !bg-transparent !border-none !shadow-none"
                style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}
              />
            </Link>
            <p className="text-slate-500 text-[10px] font-medium uppercase tracking-[0.3em] leading-[2] mb-8 font-sans">
              Vrhunska tehnologija filtracije i omekšavanja vode za vaš dom i zdravlje vaše obitelji.
            </p>
            <div className="h-0.5 w-12 bg-blue-600/30 mb-8"></div>
            <p className="text-slate-400 text-[9px] font-semibold uppercase tracking-[0.4em] font-sans">
              © {new Date().getFullYear()} Augustinović. Sva prava pridržana.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            <Link href="#" className="text-slate-600 hover:text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors font-sans">Naslovna</Link>
            <Link href="#ro-sustav" className="text-slate-600 hover:text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors font-sans">RO Sustavi</Link>
            <Link href="#remineralizator" className="text-slate-600 hover:text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors font-sans">Remineralizator</Link>
            <Link href="#omeksavanje" className="text-slate-600 hover:text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors font-sans">Omekšavanje</Link>
            <Link href="#kontakt" className="text-slate-600 hover:text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors font-sans">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
