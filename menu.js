const Menu = (timeFt, Bot, sender, groupName, groupMembers) => {  
return `
╭───〔 *💎 WEALTHX BOT – MENU PRINCIPAL 💎* 〕───╮
│⏱️ Horário: ${timeFt}
│👤 Usuário: @${sender.split('@')[0]} 
│🤖 Bot: WealthX
│⚙️ Prefixo: *Multiprefixo*
│👥 Grupo: ${groupName}
├──────────────────────────────
│👑 Dono: *WealthX*
╰──────────────────────────────╯

✨ *LISTA DE COMANDOS DISPONÍVEIS*  
═══════════════════════════════

📌 *MENU DE ADMINISTRADORES*
───────────────────────────
• welcome *1 / 0*
• antilink *1 / 0*
• modoadmin *1 / 0*
• todos
• anuncio
• ban
• kick
• notify
• rankrep
• rankcoins
• ranknivel

👑 *MENU DO CRIADOR*
───────────────────────────
• sercreador
• antiprivado
• revelarvisu
• reiniciar
• bangp
• unbangp
• boton
• botoff

🎵 *MENU DE DOWNLOADS*
───────────────────────────
• play
• playvideo
• tiktokvideo
• tiktokaudio
• buscarapk
• descargarapk

ℹ️ *MENU DE INFORMAÇÕES*
───────────────────────────
• ping
• perfil
• botcompleto
• grupos
• canales
• serbot

🎨 *MENU DE FIGURINHAS*
───────────────────────────
• sticker
• attp
• attp2
• attp3
• emojimix

🧰 *FERRAMENTAS*
───────────────────────────
• toimg
• tomp3
• calc
• nick
• ia
• chatgpt

💰 *SISTEMA DE ECONOMIA*
───────────────────────────
• nivel
• perfil
• cartera
• reg
• listreg
• ruleta
• levelup
• minar
• regalar
• mireputacion
• tragamonedas
• dayli
• pescar
• tienda
• casar

──────────────────────────
🌐 *WealthX Bot – o poder está nas suas mãos*
`}
module.exports = Menu