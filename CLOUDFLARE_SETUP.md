# 🌐 Настройка поддомена vikup.belautocenter.by через Cloudflare

## Быстрая инструкция для новичков

### Шаг 1: Деплой на Vercel

1. Зайдите на [vercel.com](https://vercel.com) (используйте тот же аккаунт, где у вас belautocenter.by)
2. Нажмите **"Add New Project"**
3. Выберите репозиторий **belautocenter3**
4. В разделе **"Environment Variables"** добавьте:
   - `TELEGRAM_BOT_TOKEN` - токен вашего бота (как получить - см. DEPLOYMENT_INSTRUCTIONS.md)
   - `TELEGRAM_CHAT_ID` - ваш Chat ID (как получить - см. DEPLOYMENT_INSTRUCTIONS.md)
5. Нажмите **"Deploy"** и дождитесь завершения

### Шаг 2: Добавление домена в Vercel

1. После успешного деплоя, зайдите в настройки проекта
2. Откройте **Settings → Domains**
3. Нажмите **"Add Domain"**
4. Введите: `vikup.belautocenter.by`
5. Vercel покажет инструкцию - **НЕ ЗАКРЫВАЙТЕ ЭТУ СТРАНИЦУ!**

### Шаг 3: Настройка DNS в Cloudflare

1. Откройте новую вкладку и зайдите на [dash.cloudflare.com](https://dash.cloudflare.com)
2. Выберите домен **belautocenter.by**
3. Слева выберите **DNS** (или **DNS → Records**)
4. Нажмите **"Add record"** (синяя кнопка справа)

### Шаг 4: Добавление CNAME записи

Заполните поля:

```
Type: CNAME
Name: vikup
Target: cname.vercel-dns.com
Proxy status: 🔴 DNS only (ВАЖНО! Должна быть СЕРАЯ тучка, а не оранжевая!)
TTL: Auto
```

**⚠️ КРИТИЧЕСКИ ВАЖНО:**
- В поле **Name** пишите только `vikup` (без домена)
- В поле **Target** пишите `cname.vercel-dns.com`
- **Proxy status** должен быть **DNS only** (серая тучка ☁️)
- Если у вас оранжевая тучка (Proxied) - кликните на неё, чтобы выключить прокси

### Шаг 5: Сохранение и проверка

1. Нажмите **"Save"** в Cloudflare
2. Вернитесь во вкладку с Vercel
3. Нажмите **"Verify"** или **"Refresh"**
4. Подождите 2-5 минут

### Шаг 6: Проверка работы

1. Откройте в браузере: `https://vikup.belautocenter.by`
2. Если сайт не открывается сразу - подождите 10-15 минут (DNS может обновляться)
3. Проверьте форму - заполните и отправьте заявку
4. Заявка должна прийти в ваш Telegram

---

## 🔍 Что делать если не работает?

### Проблема: "Domain not found" или "DNS_PROBE_FINISHED_NXDOMAIN"

**Решение:**
1. Убедитесь, что в Cloudflare CNAME запись создана правильно
2. Проверьте, что **Proxy status** = DNS only (серая тучка)
3. Подождите 15-30 минут для обновления DNS

### Проблема: "SSL error" или "Certificate error"

**Решение:**
1. В Cloudflare откройте **SSL/TLS → Overview**
2. Установите режим: **Full** или **Full (strict)**
3. Подождите несколько минут

### Проблема: Форма не отправляется в Telegram

**Решение:**
1. Проверьте в Vercel: **Settings → Environment Variables**
2. Убедитесь, что `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID` установлены
3. Перейдите в **Deployments** и нажмите **"Redeploy"**
4. Проверьте логи: **Deployments → [последний деплой] → Functions**

---

## 📸 Визуальная подсказка для Cloudflare

Ваша CNAME запись должна выглядеть так:

| Type | Name | Content | Proxy status | TTL |
|------|------|---------|--------------|-----|
| CNAME | vikup | cname.vercel-dns.com | DNS only ☁️ | Auto |

**НЕ должно быть оранжевой тучки** (Proxied)!

---

## 📱 Контакты для помощи

Если что-то не получается:
1. Проверьте подробную инструкцию в **DEPLOYMENT_INSTRUCTIONS.md**
2. Проверьте логи в Vercel
3. Убедитесь, что токен Telegram и Chat ID правильные

Успехов! 🚀
