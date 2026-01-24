import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PriceList } from "@/components/PriceList";
import { Portfolio } from "@/components/Portfolio";
import { Calendar } from "@/components/Calendar";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PriceList />
      <Portfolio />
      <Calendar />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
