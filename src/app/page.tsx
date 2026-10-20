import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutCompany from '@/components/AboutCompany';
import ServicesMatrix from '@/components/ServicesMatrix';
import AiWorkflowSimulator from '@/components/AiWorkflowSimulator';
import TelemetryDashboard from '@/components/TelemetryDashboard';
import RoiCalculator from '@/components/RoiCalculator';
import CaseStudies from '@/components/CaseStudies';
import TechStack from '@/components/TechStack';
import FaqSection from '@/components/FaqSection';
import ConsultationSection from '@/components/ConsultationSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutCompany />
      <ServicesMatrix />
      <AiWorkflowSimulator />
      <TelemetryDashboard />
      <RoiCalculator />
      <CaseStudies />
      <TechStack />
      <FaqSection />
      <ConsultationSection />
      <Footer />
    </main>
  );
}
