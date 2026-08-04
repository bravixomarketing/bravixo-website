'use client';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Industries } from '@/components/Industries';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-primary text-primary dark:text-white">
      <Header />
      
      {/* Add padding to account for fixed header */}
      <div className="pt-20">
        <Hero />
        <Services />
        <Process />
        <Industries />
        <Testimonials />
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
}
