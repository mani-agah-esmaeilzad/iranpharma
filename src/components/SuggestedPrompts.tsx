import { Button } from "@/components/ui/button";
import { MessageSquare, MapPin, Clock, Users, Phone } from "lucide-react";

interface SuggestedPromptsProps {
  onPromptClick: (prompt: string) => void;
  disabled?: boolean;
}

const prompts = [
  {
    icon: MapPin,
    text: "غرفه‌های موجود در نمایشگاه را نشان بده",
    prompt: "لیست غرفه‌های موجود در نمایشگاه را با اطلاعات کامل به من نشان دهید."
  },
  {
    icon: Clock,
    text: "ساعات کاری نمایشگاه چیست؟",
    prompt: "ساعات کاری و زمان‌بندی نمایشگاه چگونه است؟"
  },
  {
    icon: Users,
    text: "شرکت‌های حاضر در نمایشگاه",
    prompt: "کدام شرکت‌ها در نمایشگاه حضور دارند و چه محصولاتی ارائه می‌دهند؟"
  },
  {
    icon: MessageSquare,
    text: "رویدادهای ویژه و سمینارها",
    prompt: "چه رویدادها و سمینارهای ویژه‌ای در نمایشگاه برگزار می‌شود؟"
  },
  {
    icon: Phone,
    text: "اطلاعات تماس و راهنمایی",
    prompt: "برای دریافت اطلاعات بیشتر و راهنمایی با چه کسی تماس بگیرم؟"
  }
];

export const SuggestedPrompts = ({ onPromptClick, disabled = false }: SuggestedPromptsProps) => {
  return (
    <div className="space-y-3 lg:space-y-4">
      <h3 className="text-sm lg:text-base font-medium text-muted-foreground text-center">
        پرسش‌های پیشنهادی
      </h3>
      <div className="grid gap-1 sm:gap-2 lg:gap-3">
        {prompts.map((prompt, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="justify-start h-auto py-2 sm:py-3 lg:py-4 px-3 sm:px-4 lg:px-5 text-right hover:shadow-soft transition-all duration-200 text-xs sm:text-sm lg:text-base"
            onClick={() => onPromptClick(prompt.prompt)}
            disabled={disabled}
          >
            <prompt.icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ml-1 sm:ml-2 lg:ml-3 flex-shrink-0" />
            <span className="leading-relaxed">{prompt.text}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};