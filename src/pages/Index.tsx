import { useEffect, useRef } from "react";
import { Header } from "@/components/Header";
import { ChatMessage } from "@/components/ChatMessage";
import { TypingIndicator } from "@/components/TypingIndicator";
import { ChatInput } from "@/components/ChatInput";
import { useChat } from "@/hooks/useChat";

const Index = () => {
  const { messages, sendMessage, isTyping } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="h-full flex flex-col bg-gradient-bg" dir="rtl">
      <Header />
      
      <div className="flex-1 flex flex-col px-2 sm:px-4 lg:px-6 xl:px-8 py-2 lg:py-3 overflow-hidden min-h-0">
        <div className="flex-1 flex flex-col bg-card rounded-lg sm:rounded-xl lg:rounded-2xl shadow-soft border border-primary/10 overflow-hidden min-h-0 max-w-7xl mx-auto w-full">
          {/* Chat Messages Area */}
          <div className="flex-1 overflow-y-auto p-2 sm:p-4 lg:p-6 xl:p-8 space-y-3 sm:space-y-4 lg:space-y-6 bg-gradient-to-b from-background/50 to-background min-h-0">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message.text}
                isBot={message.isBot}
                timestamp={message.timestamp}
              />
            ))}
            
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Section */}
          <div className="border-t border-primary/10 p-2 sm:p-3 lg:p-4 xl:p-6 bg-background/50 flex-shrink-0">
            <ChatInput 
              onSendMessage={sendMessage} 
              disabled={isTyping}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
