import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, Sparkles } from "lucide-react";

const daysOfWeek = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Ndz"];

// Simulated availability - in production this would come from a backend
const getAvailability = (day: number): "available" | "partial" | "booked" => {
  if (day === 0 || day === 6) return "booked"; // Sunday and Saturday
  if ([3, 8, 15, 22].includes(day)) return "booked";
  if ([5, 12, 19, 26].includes(day)) return "partial";
  return "available";
};

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthNames = [
    "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
    "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

    const days = [];
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const days = getDaysInMonth(currentDate);

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  return (
    <section id="kalendarz" className="py-20 md:py-32 bg-blush">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-rose-light text-rose-dark px-4 py-2 rounded-full mb-4">
            <Sparkles size={16} />
            <span className="font-body text-sm font-medium">Dostępność</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sprawdź terminy
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Sprawdź dostępne terminy i umów się na wizytę. Rezerwacja telefonicznie
            lub przez media społecznościowe.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto bg-card rounded-3xl p-6 md:p-8 shadow-card"
        >
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevMonth}
              className="p-2 hover:bg-secondary rounded-full transition-colors"
            >
              <ChevronLeft size={20} className="text-muted-foreground" />
            </button>
            <h3 className="font-display text-xl font-semibold text-foreground">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-secondary rounded-full transition-colors"
            >
              <ChevronRight size={20} className="text-muted-foreground" />
            </button>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="text-center font-body text-xs font-medium text-muted-foreground py-2"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => {
              if (day === null) {
                return <div key={`empty-${index}`} className="aspect-square" />;
              }

              const dayOfWeek = (new Date(currentDate.getFullYear(), currentDate.getMonth(), day).getDay() + 6) % 7;
              const availability = getAvailability(dayOfWeek === 6 ? 6 : day % 7 === 0 ? 0 : day);
              
              return (
                <motion.button
                  key={day}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`aspect-square rounded-lg font-body text-sm font-medium flex items-center justify-center transition-colors ${
                    availability === "available"
                      ? "bg-rose-light text-rose-dark hover:bg-primary hover:text-primary-foreground"
                      : availability === "partial"
                      ? "bg-gold-light text-accent-foreground hover:bg-gold"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  {day}
                </motion.button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 pt-6 border-t border-border">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-rose-light" />
              <span className="font-body text-xs text-muted-foreground">Wolne</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-gold-light" />
              <span className="font-body text-xs text-muted-foreground">Częściowo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-muted" />
              <span className="font-body text-xs text-muted-foreground">Zajęte</span>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-6 p-4 bg-secondary rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-body text-sm font-medium text-foreground">
                  Chcesz zarezerwować termin?
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  Zadzwoń lub napisz na Facebooku
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
