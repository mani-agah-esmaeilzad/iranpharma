# 🤖 راهنمای راه‌اندازی Gemini AI

## 📋 مراحل راه‌اندازی

### 1️⃣ **دریافت API Key از Google**

1. به آدرس زیر بروید:
   👉 **[https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)**

2. وارد حساب Google خود شوید

3. روی **"Create API Key"** کلیک کنید

4. API Key خود را کپی کنید

### 2️⃣ **تنظیم متغیر محیطی**

فایل `.env.local` را باز کنید و جای `your_gemini_api_key_here` کلید API خود را قرار دهید:

```env
# Gemini AI API Key
GEMINI_API_KEY=AIzaSy...your_actual_api_key_here

# Chat History Storage
CHAT_HISTORY_PATH=./data/chat-history.json
```

### 3️⃣ **راه‌اندازی سرور**

```bash
# نصب وابستگی‌ها (در صورتی که قبلاً نصب نکرده‌اید)
npm install

# اجرای سرور روی پورت 3001
npm run dev -- --port 3001
```

## 🔧 **ویژگی‌های پیاده‌سازی شده**

### ✅ **چت بات با Gemini 2.5 Flash**
- استفاده از مدل `gemini-2.0-flash-exp`
- پرامپت سیستمی مخصوص نمایشگاه ایران فارما
- پاسخ‌دهی کامل به فارسی با استفاده از ایموجی

### ✅ **ذخیره هیستوری چت**
- ذخیره در فایل JSON بدون نیاز به دیتابیس
- نگهداری آخرین 1000 پیام
- شامل session ID برای ردیابی مکالمات

### ✅ **API های ایجاد شده**

#### **POST /api/chat**
```json
// درخواست
{
  "message": "غرفه‌های نمایشگاه کدام‌ها هستند؟",
  "sessionId": "session_12345"
}

// پاسخ
{
  "success": true,
  "response": "غرفه‌های موجود در نمایشگاه...",
  "messageId": "bot_1234567890",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

#### **GET /api/chat**
```json
// آمار چت
{
  "success": true,
  "statistics": {
    "totalMessages": 150,
    "lastUpdated": "2024-01-01T12:00:00.000Z"
  }
}
```

## 📂 **ساختار فایل‌ها**

```
src/
├── app/api/chat/
│   └── route.ts              # API endpoint برای چت
├── lib/services/
│   ├── gemini.ts            # سرویس Gemini AI
│   └── chatHistory.ts       # مدیریت هیستوری چت
└── hooks/
    └── useChat.ts           # Hook مدیریت چت (به‌روزرسانی شده)

data/
└── chat-history.json        # فایل ذخیره پیام‌ها
```

## 🎯 **کانتکست نمایشگاه**

بات با اطلاعات زیر آماده شده:

- **غرفه‌ها:** اکتوور (A1), سبحان (B2), داروپخش ایران (C3), فارمد تجهیزات (D4)
- **ساعات کاری:** شنبه تا چهارشنبه ۹-۱۸، پنج‌شنبه ۹-۲۰
- **رویدادها:** سمینارها ۱۰ و ۱۵، میزگردها ۱۳
- **تماس:** ۰۲۱-۸۸۷۷۶۶۵۵ داخلی ۱۲۳

## 🚨 **نکات مهم**

1. **API Key را هرگز در کد قرار ندهید** - فقط در `.env.local`
2. **فایل `.env.local` را به Git اضافه نکنید**
3. **حجم فایل `chat-history.json` محدود است** - حداکثر 1000 پیام
4. **در صورت خرابی API** - پیام خطای فارسی نمایش داده می‌شود

## 🧪 **تست عملکرد**

1. سرور را راه‌اندازی کنید
2. سؤالات مختلف بپرسید
3. بررسی کنید که پاسخ‌ها در `data/chat-history.json` ذخیره می‌شوند
4. آمار چت را از `/api/chat` مشاهده کنید

## 📊 **مانیتورینگ**

- **Console Logs:** خطاها در ترمینال نمایش داده می‌شوند
- **Chat History:** تمام مکالمات در فایل JSON ذخیره می‌شوند  
- **Statistics API:** آمار کلی از طریق GET /api/chat

**✅ حالا چت بات شما با Gemini AI کار می‌کند!** 🎉
