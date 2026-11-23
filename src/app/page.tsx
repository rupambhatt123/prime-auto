import Hero from "@/components/Hero";
import AboutStats from "@/components/AboutStats";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Brands from "@/components/Brands";
import ContactBanner from "@/components/ContactBanner";
import BookingSection from "@/components/BookingSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStats />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Brands />
      <ContactBanner />
      <BookingSection />
    </>
  );
}