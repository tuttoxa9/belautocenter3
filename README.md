# 🚗 БелАвтоЦентр - Выкуп автомобилей

Лендинг для срочного выкупа автомобилей в Беларуси.

## 🌟 Возможности

- ⚡ Современный дизайн на Next.js 16 + TypeScript
- 📱 Адаптивная вёрстка для всех устройств
- 🤖 Автоматическая отправка заявок в Telegram
- 📊 SEO оптимизация (Schema.org, Open Graph, метатеги)
- 🎨 Tailwind CSS + shadcn/ui компоненты
- 🚀 Готов к деплою на Vercel
- 📈 Встроенная аналитика Vercel Analytics

## 🛠️ Технологии

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI + shadcn/ui
- **Form Handling:** React Hook Form + Zod
- **Deployment:** Vercel
- **Notifications:** Telegram Bot API

## 📋 Быстрый старт

### 1. Установка зависимостей

```bash
bun install
```

### 2. Настройка переменных окружения

Создайте файл `.env.local` на основе `.env.example`:

```bash
cp .env.example .env.local
```

Заполните переменные:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

### 3. Запуск проекта

```bash
bun dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 🚀 Деплой

Подробная инструкция по деплою на Vercel и настройке поддомена находится в файле:

**📄 [DEPLOYMENT_INSTRUCTIONS.md](./DEPLOYMENT_INSTRUCTIONS.md)**

## 📁 Структура проекта

```
belautocenter3/
├── app/
│   ├── api/
│   │   └── telegram/          # API endpoint для отправки в Telegram
│   ├── layout.tsx             # Layout с SEO метаданными
│   ├── page.tsx               # Главная страница
│   ├── sitemap.ts             # Генерация sitemap
│   └── globals.css            # Глобальные стили
├── components/
│   ├── ui/                    # shadcn/ui компоненты
│   ├── hero-section.tsx       # Секция Hero
│   ├── process-section.tsx    # Секция "Как это работает"
│   ├── benefits-section.tsx   # Секция преимуществ
│   ├── conditions-section.tsx # Секция условий
│   ├── faq-section.tsx        # Секция FAQ
│   ├── header.tsx             # Шапка сайта
│   ├── footer.tsx             # Футер
│   └── sticky-form.tsx        # Липкая форма заявки
├── public/
│   ├── robots.txt             # Файл для поисковых роботов
│   └── belavto-logo.png       # Логотип
├── .env.example               # Пример переменных окружения
├── vercel.json                # Конфигурация Vercel
└── DEPLOYMENT_INSTRUCTIONS.md # Инструкция по деплою
```

## 📞 Контакты

- **Website:** [vikup.belautocenter.by](https://vikup.belautocenter.by)
- **Main Site:** [belautocenter.by](https://belautocenter.by)

## 📝 Лицензия

© 2025 БелАвтоЦентр. Все права защищены.
