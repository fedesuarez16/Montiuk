import { AboutSection } from "@/components/montiuk/AboutSection";
import { ClientsSection } from "@/components/montiuk/ClientsSection";
import { ContactSection } from "@/components/montiuk/ContactSection";
import { HeroSection } from "@/components/montiuk/HeroSection";
import { ProcessSection } from "@/components/montiuk/ProcessSection";
import { ServicesSection } from "@/components/montiuk/ServicesSection";
import { SiteFooter } from "@/components/montiuk/SiteFooter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProcessSection />
        <ServicesSection />
                <ClientsSection />

        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
