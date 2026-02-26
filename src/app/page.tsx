import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ROSection from '@/components/ROSection';
import RemineralizerSection from '@/components/RemineralizerSection';
import OmeksavanjeSection from '@/components/OmeksavanjeSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ROSection />
      <RemineralizerSection />
      <OmeksavanjeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
