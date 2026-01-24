import { motion } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";

const reviews = [
  {
    name: "Anna K.",
    rating: 5,
    text: "Najlepsza kosmetyczka w Krośnie! Ewa jest bardzo profesjonalna, a paznokcie trzymają się doskonale przez 3 tygodnie. Polecam!",
    date: "2 tygodnie temu",
  },
  {
    name: "Marta W.",
    rating: 5,
    text: "Uwielbiam przychodzić do Ewy! Zawsze świetna atmosfera, piękne zdobienia i dbałość o każdy szczegół. Moje paznokcie nigdy nie wyglądały lepiej.",
    date: "1 miesiąc temu",
  },
  {
    name: "Kasia M.",
    rating: 5,
    text: "Profesjonalizm na najwyższym poziomie. Ewa zawsze doradzi najlepsze rozwiązanie i efekt jest niesamowity. Gorąco polecam!",
    date: "3 tygodnie temu",
  },
  {
    name: "Joanna P.",
    rating: 5,
    text: "Chodzę do Ewy od roku i jestem zachwycona. Paznokcie wyglądają pięknie, a ceny są bardzo przystępne. Serdecznie polecam!",
    date: "1 tydzień temu",
  },
];

export const Reviews = () => {
  return (
    <section id="opinie" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gold-light text-accent-foreground px-4 py-2 rounded-full mb-4">
            <Sparkles size={16} />
            <span className="font-body text-sm font-medium">Opinie klientek</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Co mówią klientki
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Zadowolenie moich klientek to największa nagroda. Przeczytaj, co o mnie piszą.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card relative"
            >
              <Quote
                size={40}
                className="absolute top-4 right-4 text-rose-light"
              />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-gold text-gold"
                  />
                ))}
              </div>
              
              <p className="font-body text-foreground mb-4 leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body font-semibold text-foreground">
                    {review.name}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {review.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-secondary px-6 py-3 rounded-full">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="font-display text-xl font-semibold text-foreground">
              5.0
            </span>
            <span className="font-body text-muted-foreground">
              · 47 opinii
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
