import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-primary shadow-soft border-b border-primary/10 flex-shrink-0">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <img 
              src="/lovable-uploads/49a2cc1a-619f-4ae4-9f1d-f0212b994ca8.png" 
              alt="IranPharma" 
              className="h-8 sm:h-12 w-auto object-contain"
            />
            <div className="text-right">
              <h1 className="text-sm sm:text-xl font-bold text-primary-foreground">
                دستیار هوشمند نمایشگاه ایران فارما
              </h1>
              <p className="text-xs sm:text-sm text-primary-foreground/80">
                پایداری، تاب‌آوری و نوآوری در زنجیره تأمین دارو
              </p>
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 pt-4 border-t border-primary-foreground/20 animate-fade-in">
            <nav className="space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-end text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => setIsMenuOpen(false)}
              >
                صفحه اصلی
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-end text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => setIsMenuOpen(false)}
              >
                درباره نمایشگاه
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-end text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => setIsMenuOpen(false)}
              >
                غرفه‌ها
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-end text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => setIsMenuOpen(false)}
              >
                تماس با ما
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};