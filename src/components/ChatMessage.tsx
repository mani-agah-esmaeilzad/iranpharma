import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp: Date;
}

export const ChatMessage = ({ message, isBot, timestamp }: ChatMessageProps) => {
  return (
    <div className={cn(
      "flex gap-2 sm:gap-3 animate-fade-in",
      isBot ? "justify-start" : "justify-end"
    )}>
      {isBot && (
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
          <span className="text-primary-foreground text-xs sm:text-sm font-medium">IP</span>
        </div>
      )}
      
      <div className={cn(
        "max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-soft",
        isBot 
          ? "bg-card text-card-foreground" 
          : "bg-chat-bubble text-chat-bubble-foreground"
      )}>
        <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap" dir="rtl">{message}</p>
        <p className={cn(
          "text-xs mt-1 opacity-70",
          isBot ? "text-muted-foreground" : "text-chat-bubble-foreground"
        )}>
          {timestamp.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
      
      {!isBot && (
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
          <span className="text-muted-foreground text-xs sm:text-sm">شما</span>
        </div>
      )}
    </div>
  );
};