import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const portfolioImages = [
  { src: portfolio1, alt: "French manicure z delikatnymi zdobieniami" },
  { src: portfolio2, alt: "Brokatowe różowe paznokcie" },
  { src: portfolio3, alt: "Nude paznokcie ze złotymi akcentami" },
  { src: portfolio4, alt: "Kwiatowe zdobienia nail art" },
  { src: portfolio5, alt: "Ombre różowo-białe" },
  { src: portfolio6, alt: "Klasyczny czerwony manicure" },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gold-light text-accent-foreground px-4 py-2 rounded-full mb-4">
            <Sparkles size={16} />
            <span className="font-body text-sm font-medium">Moje prace</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Portfolio
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Zobacz przykłady moich stylizacji. Każda praca to indywidualne
            podejście do klientki.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-card group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-body text-sm text-primary-foreground">
                    {image.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
