import { motion } from "framer-motion";
import { Clock, Sparkles } from "lucide-react";

const services = [
  {
    category: "Manicure",
    items: [
      { name: "Manicure klasyczny", price: "50 zł", duration: "45 min" },
      { name: "Manicure hybrydowy", price: "80 zł", duration: "60 min" },
      { name: "Manicure japoński", price: "70 zł", duration: "50 min" },
      { name: "Uzupełnienie hybrydy", price: "70 zł", duration: "50 min" },
    ],
  },
  {
    category: "Żel & Przedłużanie",
    items: [
      { name: "Przedłużanie żelowe", price: "120 zł", duration: "90 min" },
      { name: "Uzupełnienie żelu", price: "90 zł", duration: "75 min" },
      { name: "Rekonstrukcja paznokcia", price: "15 zł", duration: "15 min" },
      { name: "Ściągnięcie żelu/hybrydy", price: "30 zł", duration: "30 min" },
    ],
  },
  {
    category: "Zdobienia",
    items: [
      { name: "Zdobienie proste (1 paznokieć)", price: "5 zł", duration: "5 min" },
      { name: "Zdobienie złożone (1 paznokieć)", price: "10 zł", duration: "10 min" },
      { name: "French / Baby boomer", price: "+ 20 zł", duration: "15 min" },
      { name: "Efekt syrenki/cat eye", price: "+ 15 zł", duration: "10 min" },
    ],
  },
  {
    category: "Pedicure",
    items: [
      { name: "Pedicure klasyczny", price: "60 zł", duration: "50 min" },
      { name: "Pedicure hybrydowy", price: "100 zł", duration: "75 min" },
      { name: "Pedicure SPA", price: "130 zł", duration: "90 min" },
    ],
  },
];

export const PriceList = () => {
  return (
    <section id="cennik" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-rose-light text-rose-dark px-4 py-2 rounded-full mb-4">
            <Sparkles size={16} />
            <span className="font-body text-sm font-medium">Cennik usług</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cennik
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Przejrzyste ceny i profesjonalna obsługa. Każda usługa wykonywana z
            najwyższą starannością.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-card"
            >
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6 pb-4 border-b border-border">
                {service.category}
              </h3>
              <ul className="space-y-4">
                {service.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <p className="font-body font-medium text-foreground">
                        {item.name}
                      </p>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                        <Clock size={12} />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                    <span className="font-display text-lg font-semibold text-primary">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
