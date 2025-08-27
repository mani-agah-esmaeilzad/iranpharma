import fs from 'fs/promises';
import path from 'path';

export interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: string;
  sessionId?: string;
}

export interface ChatHistory {
  conversations: ChatMessage[];
  lastUpdated: string | null;
  totalMessages: number;
}

const CHAT_HISTORY_PATH = path.join(process.cwd(), 'data', 'chat-history.json');

// Ensure data directory exists
async function ensureDataDirectory() {
  const dataDir = path.dirname(CHAT_HISTORY_PATH);
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Read chat history from JSON file
export async function readChatHistory(): Promise<ChatHistory> {
  try {
    await ensureDataDirectory();
    const data = await fs.readFile(CHAT_HISTORY_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, return default structure
    const defaultHistory: ChatHistory = {
      conversations: [],
      lastUpdated: null,
      totalMessages: 0
    };
    await saveChatHistory(defaultHistory);
    return defaultHistory;
  }
}

// Save chat history to JSON file
export async function saveChatHistory(history: ChatHistory): Promise<void> {
  try {
    await ensureDataDirectory();
    history.lastUpdated = new Date().toISOString();
    await fs.writeFile(CHAT_HISTORY_PATH, JSON.stringify(history, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error saving chat history:', error);
    throw error;
  }
}

// Add new message to history
export async function addMessageToHistory(message: ChatMessage): Promise<void> {
  try {
    const history = await readChatHistory();
    
    // Add the new message
    history.conversations.push(message);
    history.totalMessages = history.conversations.length;
    
    // Keep only last 1000 messages to prevent file from growing too large
    if (history.conversations.length > 1000) {
      history.conversations = history.conversations.slice(-1000);
    }
    
    await saveChatHistory(history);
  } catch (error) {
    console.error('Error adding message to history:', error);
    throw error;
  }
}

// Get recent messages for context (last 20 messages)
export async function getRecentMessages(limit: number = 20): Promise<ChatMessage[]> {
  try {
    const history = await readChatHistory();
    return history.conversations.slice(-limit);
  } catch (error) {
    console.error('Error getting recent messages:', error);
    return [];
  }
}

// Get total message count
export async function getTotalMessageCount(): Promise<number> {
  try {
    const history = await readChatHistory();
    return history.totalMessages;
  } catch (error) {
    console.error('Error getting message count:', error);
    return 0;
  }
}

// Clear chat history (for admin purposes)
export async function clearChatHistory(): Promise<void> {
  try {
    const emptyHistory: ChatHistory = {
      conversations: [],
      lastUpdated: new Date().toISOString(),
      totalMessages: 0
    };
    await saveChatHistory(emptyHistory);
  } catch (error) {
    console.error('Error clearing chat history:', error);
    throw error;
  }
}
