"use client";

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, Maximize2, Loader2 } from 'lucide-react';

// Set up worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  file: string;
}

const PDFViewer = ({ file }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto bg-slate-200 flex justify-center p-4">
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center h-64">
              <Loader2 className="animate-spin text-blue-600" size={32} />
            </div>
          }
        >
          <Page 
            pageNumber={pageNumber} 
            renderTextLayer={false} 
            renderAnnotationLayer={false}
            className="shadow-2xl max-w-full"
          />
        </Document>
      </div>
      
      {numPages && (
        <div className="bg-white/90 backdrop-blur-sm px-6 py-3 border-t border-slate-200 flex items-center justify-between z-20">
          <button 
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber(pageNumber - 1)}
            className="p-1 hover:bg-slate-100 rounded-full transition-colors disabled:opacity-30"
          >
            <ChevronLeft size={24} className="text-slate-600" />
          </button>
          
          <span className="text-sm font-bold text-slate-900 uppercase tracking-widest">
            Stranica {pageNumber} / {numPages}
          </span>
          
          <button 
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber(pageNumber + 1)}
            className="p-1 hover:bg-slate-100 rounded-full transition-colors disabled:opacity-30"
          >
            <ChevronRight size={24} className="text-slate-600" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
