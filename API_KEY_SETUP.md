# 🔑 راهنمای تنظیم API Key

## 🚨 **وضعیت فعلی**
- ✅ سرور در حال اجرا: http://localhost:3001
- ⚠️ Gemini API غیرفعال (به دلیل عدم تنظیم API Key)
- ✅ سیستم Fallback فعال (پاسخ‌های استاتیک)

## 🛠️ **برای فعال‌سازی Gemini AI:**

### 1️⃣ **دریافت API Key**

1. 🌐 به این آدرس بروید:
   **[https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)**

2. 🔐 وارد حساب Google شوید

3. ➕ روی **"Create API Key"** کلیک کنید

4. 📋 API Key را کپی کنید

### 2️⃣ **تنظیم در پروژه**

فایل `.env.local` را باز کنید و جای `your_gemini_api_key_here` کلید واقعی قرار دهید:

```env
# قبل از تغییر
GEMINI_API_KEY=your_gemini_api_key_here

# بعد از تغییر  
GEMINI_API_KEY=AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 3️⃣ **restart سرور**

```bash
# سرور را متوقف کنید (Ctrl+C)
# سپس دوباره اجرا کنید:
npm run dev -- --port 3001
```

## 🎯 **نکات مهم:**

### ✅ **سیستم فعلی:**
- چت بات کار می‌کند با پاسخ‌های از پیش تعریف شده
- هیستوری در `data/chat-history.json` ذخیره می‌شود
- UI کاملاً عملکرد دارد

### 🤖 **بعد از تنظیم API Key:**
- پاسخ‌های هوشمند و متنوع از Gemini
- قابلیت پاسخ به سؤالات مختلف
- حفظ کانتکست نمایشگاه ایران فارما

### 🔄 **Fallback System:**
اگر Gemini دردسترس نباشد:
- ✅ پاسخ‌های استاتیک
- ✅ عدم قطع سرویس
- ✅ پیام‌های راهنما

## 🧪 **تست سیستم:**

### **پرسش‌های پیشنهادی:**
1. "غرفه‌های نمایشگاه کجا هستند؟"
2. "ساعات کاری چیست؟"  
3. "چه رویدادهایی داریم؟"
4. "معرفی شرکت‌های حاضر"
5. "اطلاعات تماس"

## 📊 **API Endpoints آماده:**

```bash
# ارسال پیام
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "سلام، غرفه‌ها کجا هستند؟"}'

# آمار چت
curl http://localhost:3001/api/chat/history?action=stats

# پیام‌های اخیر
curl http://localhost:3001/api/chat/history?action=recent&limit=5
```

## 🎉 **وضعیت:**
✅ **پروژه کاملاً آماده و در حال اجرا**  
⚠️ **برای پاسخ‌های هوشمند، API Key تنظیم کنید**  
✅ **سیستم Fallback برای تضمین عملکرد مداوم**

**🚀 برنامه شما آماده استفاده است!**
