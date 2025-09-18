const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "MAKAMESCO-MD<=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0lPekZHc3pzSmdVOG4rR1g3dkk1VEZWVjZYQjQ5V0laeDFMZXcrU3UxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjQzUHZqdlovK3d1ZkppczRpbE9jKzdkRVY5Y2YyN2lzQWZ4MEoyNVNCRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNR213L1VKT2ttcjR6dk1iaWFiUDI3M2tRUXNTRi8yWmRDRUlsOEtXRmt3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJubXNvU3U1R0FSSHA0bWJUdmNKS05BaEJzTkxKSmQ5ZTYzVFBBQTlEQkE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVFZE94dnh3OTBELzJwaEQ3ck9XYnJMVVRBaGFBR2FGOTAxQnJHcDNtR2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjE1Y3FBR1VhaVF0dlFUdUwxWjZwNEsxamExQVpBUFlFc1VZYU1adFF2SE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1B1M1hrcUFpTlZyVDlvaHdtdWlBMU9KeUVkaUgxckdsci9lNnVzV21Faz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUZyVThEWjBIVUcwS0JUVUM3ckhtK2FKTlpaWVplZWxqTVZhMlRSdW5WVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFlQno4MTZ0aUpVTVJwTnRhRENRY1ZEaGxNOFlIcFk4VHBOd1ZiTnFNNXRSWWRyV2hMbGJLUHR2VDRLU1JLa2pHV0hqR3V0ejg2MUdLSEVJMjdIZWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE5LCJhZHZTZWNyZXRLZXkiOiJOQjFYMm1sSzErelQ2YnQ0N0JQRXYwZk1jWG9jUlhtdkVNUnZadjdncFdJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxNzAwNTk3MjA4NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzUyOTlBM0Q5M0M0RDM3REY1RTI4MTE1MzIzMjkwNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4MjAwNDEzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTcwMDU5NzIwODVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM0OTIzOEI0QUM4QTBEQzMzRTI5NUYxOTE0NzExM0EifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODIwMDQxOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTE3MDA1OTcyMDg1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNTA3NEFGNzAxM0ZEOEJGQUU0QURDRTVDQzhEODczIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTgyMDA0NDh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjFMVjEzRFlYIiwibWUiOnsiaWQiOiI5MTcwMDU5NzIwODU6MTJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMjEyNzcxMTc3NTU1Nzk6MTJAbGlkIiwibmFtZSI6IkdvZHpfYWt1bSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHFBMHZJQ0VNQ0VzTVlHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoielpOWmxXSWVQdXJtam5QUlNQWWtWaWVDVmx4b2NIMTM2M1dEaG1mNWFTdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNHQrejNaSzJqMWRmeFlWRFp6N3F5UDFZdkpOVlVML04waTJmU2dFem96OHQyNForVTk3Y3JMU1NoTEFITDRxaTN0ZytwcktOUXdvSkFZMCtodTMyQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6ImVRZnpxeW51YlgwR0pHa0pzLzM5QnN6Y2JmWmFhWFRES0lpY2FubTV4UHBQTmpGZklrREdBbzQ1Wjh3R3A4MXRkK1AwVDlvSHMrY3VuQ1FoSktiQmpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE3MDA1OTcyMDg1OjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmMyVFdaVmlIajdxNW81ejBVajJKRlluZ2xaY2FIQjlkK3QxZzRabitXa3MifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1ODIwMDM5OSwibGFzdFByb3BIYXNoIjoiQzRmSk4iLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtKUyJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY DIGITEX-MD 🤍*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/g7qjxj.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "DIGITEX XMD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ALONG",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "917005972085",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "akum",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© powered by ALONG*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/g7qjxj.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> AM ACTIVE *DIGITEX MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "918731810311",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
