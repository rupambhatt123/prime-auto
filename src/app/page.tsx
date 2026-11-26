import Hero from "@/components/Hero";
import About from "@/components/AboutStats";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Brands from "@/components/Brands";
import Testimonials from "@/components/Testimonials";
import ContactBanner from "@/components/ContactBanner";
import BookingSection from "@/components/BookingSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Brands />
      <Testimonials />
      <ContactBanner />
      <BookingSection />
    </>
  );
}