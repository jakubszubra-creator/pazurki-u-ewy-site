import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Facebook, Instagram, Sparkles } from "lucide-react";

export const Contact = () => {
  return (
    <section id="kontakt" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-rose-light text-rose-dark px-4 py-2 rounded-full mb-4">
            <Sparkles size={16} />
            <span className="font-body text-sm font-medium">Kontakt</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Jak mnie znaleźć
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Umów się na wizytę telefonicznie lub przez social media. Zapraszam do kontaktu!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-light flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-rose-dark" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Adres
                  </h3>
                  <p className="font-body text-muted-foreground">
                    ul. Przykładowa 12<br />
                    38-400 Krosno
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Telefon
                  </h3>
                  <a
                    href="tel:+48123456789"
                    className="font-body text-primary hover:underline"
                  >
                    +48 123 456 789
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-light flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-rose-dark" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Godziny pracy
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Poniedziałek - Piątek: 9:00 - 18:00<br />
                    Sobota: 9:00 - 14:00<br />
                    Niedziela: zamknięte
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-card rounded-2xl p-6 shadow-card flex items-center justify-center gap-3 hover:bg-primary hover:text-primary-foreground transition-colors group"
              >
                <Facebook size={24} />
                <span className="font-body font-medium">Facebook</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-card rounded-2xl p-6 shadow-card flex items-center justify-center gap-3 hover:bg-primary hover:text-primary-foreground transition-colors group"
              >
                <Instagram size={24} />
                <span className="font-body font-medium">Instagram</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl overflow-hidden shadow-card h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41167.07561389881!2d21.726963!3d49.6944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c5c5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sKrosno!5e0!3m2!1spl!2spl!4v1234567890123!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja Pazurki u Ewy - Krosno"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
