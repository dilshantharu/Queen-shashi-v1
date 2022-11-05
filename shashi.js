
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
//const heroku = require('heroku')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const speedofbot = require("performance-now")
const fetch = require('node-fetch')
const maker = require('mumaker')

//-[database]-\\

global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) 
global.db = {
    users: {},
    chats: {},
    sticker: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    ...(global.db || {})
}


case 'alive': {
    alfa.sendMessage(from, { react: { text: `🙋‍`, key: m.key }}) 
    let buttons = [
    {buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1},
    {buttonId: `ping`, buttonText: {displayText: 'SPEED'}, type: 1}
    ]
    let buttonMessage = {
    image: { url: `https://i.ibb.co/7r10tTw/queen-shashi.jpg` },
    caption: `🍁Hello,I Am Queen Shashi💃❤️

*╔═════ೋೋ════╗*
   ~Queen Shashi💃❤️~  I̶S̶ 

              O̶N̶L̶I̶N̶E̶🔥
*╚══❖•ೋ° °ೋ•❖══╝*

▰▯▰▯▰▯▰▯▰▯▰▯▰▯▰▯▰▯

*🍂පෙරුමක් පුරා...💫*
          *ලග ඉන්න පින්...🫧*
                *පුරවන්න ඇති...☀️*

*🍂ඔය ආදරේ...😇*
          *කාටත් වඩා...✨*
               *මට වෙන්න ඇති...⭐*
▰▯▰▯▰▯▰▯▰▯▰▯▰▯▰▯▰▯

👉What help do you want from me😇?

👉Type .menu to get the command list😇

👉Please subscribe our youtube channel🥺
 https://youtube.com/channel/UCwddRRMPWcpFFVDCGwr3QWA

╭╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸➵
│
│ *🐾Bot Owner:-*
│            *Tharusha Dilshan😈*
│             *shashini nilushi💃❤️*
│
╰╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸➵`,
    footer: `𝙿𝙾𝚆𝙾𝚁𝙴𝙳 𝙱𝚈 𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰 𝙳𝙸𝙻𝚂𝙷𝙰𝙽`,
    buttons: buttons,
    headerType: 4,
    }
    alfa.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break    
