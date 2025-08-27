import { NextRequest, NextResponse } from 'next/server';
import { 
  readChatHistory, 
  clearChatHistory, 
  getRecentMessages,
  getTotalMessageCount 
} from '@/lib/services/chatHistory';

// GET - Retrieve chat history or specific data
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');
    const limit = searchParams.get('limit');

    switch (action) {
      case 'recent':
        const recentLimit = limit ? parseInt(limit) : 20;
        const recentMessages = await getRecentMessages(recentLimit);
        return NextResponse.json({
          success: true,
          messages: recentMessages,
          count: recentMessages.length
        });

      case 'stats':
        const totalMessages = await getTotalMessageCount();
        return NextResponse.json({
          success: true,
          statistics: {
            totalMessages,
            lastUpdated: new Date().toISOString()
          }
        });

      case 'full':
        const fullHistory = await readChatHistory();
        return NextResponse.json({
          success: true,
          history: fullHistory
        });

      default:
        const history = await readChatHistory();
        return NextResponse.json({
          success: true,
          totalMessages: history.totalMessages,
          lastUpdated: history.lastUpdated,
          recentCount: Math.min(history.conversations.length, 10)
        });
    }

  } catch (error) {
    console.error('Error retrieving chat history:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to retrieve chat history' 
      },
      { status: 500 }
    );
  }
}

// DELETE - Clear chat history (admin function)
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const confirm = searchParams.get('confirm');

    if (confirm !== 'true') {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Confirmation required. Add ?confirm=true to the request.' 
        },
        { status: 400 }
      );
    }

    await clearChatHistory();

    return NextResponse.json({
      success: true,
      message: 'Chat history cleared successfully',
      clearedAt: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error clearing chat history:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to clear chat history' 
      },
      { status: 500 }
    );
  }
}
