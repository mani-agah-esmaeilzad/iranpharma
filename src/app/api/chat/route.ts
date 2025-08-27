import { NextRequest, NextResponse } from 'next/server';
import { generateChatResponse } from '@/lib/services/gemini';
import { addMessageToHistory, type ChatMessage } from '@/lib/services/chatHistory';

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Generate unique IDs for messages
    const userMessageId = `user_${Date.now()}`;
    const botMessageId = `bot_${Date.now() + 1}`;

    // Create user message object
    const userMessage: ChatMessage = {
      id: userMessageId,
      text: message,
      isBot: false,
      timestamp: new Date().toISOString(),
      sessionId: sessionId || 'anonymous'
    };

    // Save user message to history
    await addMessageToHistory(userMessage);

    // Generate bot response using Gemini
    const botResponseText = await generateChatResponse(message);

    // Create bot message object
    const botMessage: ChatMessage = {
      id: botMessageId,
      text: botResponseText,
      isBot: true,
      timestamp: new Date().toISOString(),
      sessionId: sessionId || 'anonymous'
    };

    // Save bot response to history
    await addMessageToHistory(botMessage);

    // Return the bot response
    return NextResponse.json({
      success: true,
      response: botResponseText,
      messageId: botMessageId,
      timestamp: botMessage.timestamp
    });

  } catch (error) {
    console.error('Error in chat API:', error);
    
    // Return fallback response
    return NextResponse.json({
      success: false,
      response: 'متأسفم، در حال حاضر مشکلی در سرور وجود دارد. لطفاً با میز راهنمایی در ورودی نمایشگاه تماس بگیرید یا کمی بعد دوباره تلاش کنید.',
      error: 'Internal server error'
    }, { status: 500 });
  }
}

// GET endpoint to retrieve chat statistics (optional)
export async function GET(request: NextRequest) {
  try {
    const { getTotalMessageCount } = await import('@/lib/services/chatHistory');
    const totalMessages = await getTotalMessageCount();
    
    return NextResponse.json({
      success: true,
      statistics: {
        totalMessages,
        lastUpdated: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Error getting chat statistics:', error);
    return NextResponse.json(
      { error: 'Failed to get statistics' },
      { status: 500 }
    );
  }
}
