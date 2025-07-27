import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import CertificationsPartnershipsSection from '@/components/sections/CertificationsPartnershipsSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import FAQSection from '@/components/sections/FAQSection';
import PricingSection from '@/components/sections/PricingSection';
import PricingCalculator from '@/components/sections/PricingCalculator';
import TeamAvailabilitySection from '@/components/sections/TeamAvailabilitySection';
import CyberAlertBanner from '@/components/layout/CyberAlertBanner';
import FloatingCTA from '@/components/FloatingCTA';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>CyberTree - Premium Web & Mobile App Development in Australia</title>
        <meta name="description" content="CyberTree is an innovative Indian tech company expanding to Australia, specializing in custom website development and mobile applications. Transform your digital presence with our cutting-edge solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        <CyberAlertBanner />
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <PricingSection />
          <PricingCalculator />
          <TeamAvailabilitySection />
          <ProjectsSection />
          <TestimonialsSection />
          <CaseStudiesSection />
          <CertificationsPartnershipsSection />
          <IndustriesSection />
          <AboutSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </>
  );
};

export default HomePage;