import React, { useState } from 'react';
import { AboutPartnersSection } from './components/AboutPartnersSection';
import { ClientsAndBrandsSection } from './components/ClientsAndBrandsSection';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import {
  ContactSection,
  ProcessSection,
} from './components/ProcessAndQuoteSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServicesSection } from './components/ServicesSection';
import type { ServiceItem } from './data/incomexData';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [quoteService, setQuoteService] = useState<string>('');

  const scrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRequestQuoteForService = (serviceTitle: string) => {
    setQuoteService(serviceTitle);
    setSelectedService(null);
    setTimeout(() => {
      scrollToContact();
    }, 60);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header onContactClick={scrollToContact} />

      <main>
        <HeroSection onRequestQuote={scrollToContact} />
        <AboutPartnersSection />
        <ClientsAndBrandsSection />
        <ProcessSection />
        <ServicesSection onSelectService={setSelectedService} />
        <ProjectsSection onRequestQuoteForService={handleRequestQuoteForService} />
        <ContactSection preselectedService={quoteService} />
      </main>

      <Footer />

      <FloatingWhatsAppButton />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuoteForService={handleRequestQuoteForService}
      />
    </div>
  );
}
