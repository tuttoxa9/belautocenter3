import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { brand, model, year, transmission, city, name, phone, desiredAmount, description } = body

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Telegram credentials not configured')
      return NextResponse.json(
        { error: 'Telegram not configured' },
        { status: 500 }
      )
    }

    // Очищаем номер телефона от всех символов кроме цифр
    const cleanPhone = phone.replace(/\D/g, '')

    // Формируем сообщение для Telegram
    const message = `
🚗 *НОВАЯ ЗАЯВКА НА ВЫКУП АВТО*

*Автомобиль:*
• Марка: ${brand}
• Модель: ${model}
• Год выпуска: ${year}
• Коробка передач: ${transmission}
• Населённый пункт: ${city}
${description ? `• Описание: ${description}` : ''}

*Клиент:*
• Имя: ${name}
• Телефон: ${cleanPhone}
${desiredAmount ? `• Желаемая сумма: ${desiredAmount}` : ''}

_Дата и время: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Minsk' })}_
    `.trim()

    // Отправляем сообщение в Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    )

    const telegramData = await telegramResponse.json()

    if (!telegramResponse.ok) {
      console.error('Telegram API error:', telegramData)
      return NextResponse.json(
        { error: 'Failed to send message to Telegram' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully' })
  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
