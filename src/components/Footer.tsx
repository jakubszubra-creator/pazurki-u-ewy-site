import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-semibold text-primary-foreground">
              Pazurki u Ewy
            </span>
          </div>
          
          <p className="font-body text-sm text-primary-foreground/70 flex items-center gap-1">
            © {currentYear} Pazurki u Ewy. Stworzone z
            <Heart size={14} className="fill-primary text-primary" />
            w Krośnie
          </p>
        </div>
      </div>
    </footer>
  );
};
