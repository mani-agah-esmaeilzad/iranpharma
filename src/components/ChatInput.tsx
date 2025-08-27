import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Lightbulb } from "lucide-react";
import { SuggestedPrompts } from "@/components/SuggestedPrompts";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export const ChatInput = ({ onSendMessage, disabled = false, value, onChange }: ChatInputProps) => {
  const [inputValue, setInputValue] = useState(value || "");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="space-y-2 sm:space-y-3 w-full">
      {/* Suggested Prompts Toggle */}
      <div className="flex justify-center">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setShowSuggestions(!showSuggestions)}
          className="text-muted-foreground hover:text-foreground transition-colors text-xs sm:text-sm"
          disabled={disabled}
        >
          <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
          <span>پرسش‌های پیشنهادی</span>
        </Button>
      </div>

      {/* Suggested Prompts Dropdown */}
      {showSuggestions && (
        <div className="bg-card border border-primary/10 rounded-lg p-2 sm:p-3 md:p-4 shadow-soft max-h-48 sm:max-h-60 overflow-y-auto">
          <SuggestedPrompts 
            onPromptClick={(prompt) => {
              onSendMessage(prompt);
              setShowSuggestions(false);
            }}
            disabled={disabled}
          />
        </div>
      )}

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex gap-1 sm:gap-2 w-full">
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="سؤال خود را بپرسید..."
          disabled={disabled}
          className="flex-1 min-w-0 text-right bg-background border-primary/20 focus:border-primary text-sm sm:text-base h-9 sm:h-10"
          dir="rtl"
        />
        <Button
          type="submit"
          size="icon"
          disabled={disabled || !inputValue.trim()}
          className="bg-primary hover:bg-primary-glow shadow-soft h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0"
        >
          <Send className="w-3 h-3 sm:w-4 sm:h-4" />
        </Button>
      </form>
    </div>
  );
};