"use client"

import { useState, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

// Generate session ID for tracking user conversations
function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome_message",
      text: "سلام! به دستیار هوشمند نمایشگاه ایران فارما خوش آمدید! من با کمک هوش مصنوعی اینجا هستم تا در مورد غرفه‌ها، شرکت‌ها و برنامه‌های نمایشگاه به شما کمک کنم. چه سؤالی دارید؟",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(() => generateSessionId());

  const sendMessage = async (text: string) => {
    // Add user message immediately
    const userMessage: Message = {
      id: `user_${Date.now()}`,
      text,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      // Call the API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
          sessionId: sessionId
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Add bot response
      const botMessage: Message = {
        id: data.messageId || `bot_${Date.now()}`,
        text: data.response,
        isBot: true,
        timestamp: new Date(data.timestamp || Date.now())
      };

      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message
      const errorMessage: Message = {
        id: `error_${Date.now()}`,
        text: "متأسفم، در حال حاضر مشکلی در ارتباط با سرور وجود دارد. لطفاً با میز راهنمایی در ورودی نمایشگاه تماس بگیرید یا کمی بعد دوباره تلاش کنید.",
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return {
    messages,
    sendMessage,
    isTyping
  };
};
