"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ImageModalProps {
  images?: string[] | null;
  initialIndex?: number;
  src?: string | null;
  alt: string;
  onClose: () => void;
}

const ImageModal = ({ images, initialIndex = 0, src, alt, onClose }: ImageModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, images]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!images || images.length <= 1) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (src || (images && images.length > 0)) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [src, images, currentIndex]);

  const handleNext = () => {
    if (images) setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    if (images) setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const displaySrc = images ? images[currentIndex] : src;

  return (
    <AnimatePresence>
      {displaySrc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-slate-950/95 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-6 right-6 z-[110] p-3 bg-white/10 rounded-full text-white transition-colors"
            onClick={onClose}
            aria-label="Zatvori"
          >
            <X size={24} />
          </motion.button>
          
          {/* Navigation Arrows */}
          {images && images.length > 1 && (
            <>
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[110] p-4 bg-white/5 hover:bg-white/10 rounded-full text-white backdrop-blur-sm transition-all"
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                aria-label="Prethodna"
              >
                <ChevronLeft size={32} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[110] p-4 bg-white/5 hover:bg-white/10 rounded-full text-white backdrop-blur-sm transition-all"
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                aria-label="Sljedeća"
              >
                <ChevronRight size={32} />
              </motion.button>

              {/* Counter */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[110] bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-bold tracking-widest">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
          
          <motion.div
            key={displaySrc}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-6xl h-full flex items-center justify-center will-change-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={displaySrc}
              alt={alt}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
