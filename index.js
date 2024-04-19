const TelegramBot = require('node-telegram-bot-api')

const token = '6869032366:AAGR7aK5jmM74XLlQ2FWWkaBLqFVFXbZiKM'
const webAppUrl = 'https://ya.ru'

const bot = new TelegramBot(token, {polling: true})

bot.on('message', async (msg) => {
    const chatId = msg.chat.id
    const text = msg.text

    if (text === '/start') {
        await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Сделать заказ', web_app: {url: webAppUrl}}]
                ]
            }
        })
        await bot.sendMessage(chatId, 'Заходи в шан магазин по кнопке ниже', {
            reply_markup: {
                keyboard: [
                    [{text: 'Сделать заказ', web_app: {url: webAppUrl}}]
                ]
            }
        })
    }
})


