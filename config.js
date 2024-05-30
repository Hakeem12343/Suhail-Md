const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Hakeem:hakeem@cluster0.yddb1a7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_42_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDcxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNixcbiAgICAgICAgMTc2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDU5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODgsXG4gICAgICAgIDc2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM0LFxuICAgICAgICA3MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExLFxuICAgICAgICAxODAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NixcbiAgICAgICAgMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzksXG4gICAgICAgIDkzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyLFxuICAgICAgICAwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MCxcbiAgICAgICAgNixcbiAgICAgICAgMjAzLFxuICAgICAgICA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNixcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA1NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOTNvaVNnZmpWM2pMSllZSVFXWmhSQlN1NThmMXNKbElmeldTWnlZdWVVcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDU4MzY1NTA5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4RTIwMEExQkRDOEVFQ0JFNDdGRTY1QjFCN0Q1OTBBMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTcwOTA5MjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDU4MzY1NTA5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJENzY3QzNEQ0YzQTc3N0FGMEREMEQ5OEFEREFDRjUyNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTcwOTA5MjZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQXRrb1BzaU1RMFNfUkRLcHFjVkV6d1wiLFxuICBcInBob25lSWRcIjogXCI5OWVmNGZjZS1mNGExLTQ4YzgtYjRkYS05NDY3M2U0MGEyNTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAxLFxuICAgICAgOTUsXG4gICAgICAxMTUsXG4gICAgICAxMzAsXG4gICAgICAxMTgsXG4gICAgICAxNzksXG4gICAgICAxMjYsXG4gICAgICA2OSxcbiAgICAgIDcxLFxuICAgICAgMTA5LFxuICAgICAgMTAzLFxuICAgICAgODgsXG4gICAgICAzNyxcbiAgICAgIDEzLFxuICAgICAgMTkzLFxuICAgICAgMTYzLFxuICAgICAgMjI1LFxuICAgICAgODYsXG4gICAgICAyMDQsXG4gICAgICAxMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk2LFxuICAgICAgMjM4LFxuICAgICAgMjAwLFxuICAgICAgMjA0LFxuICAgICAgMTMsXG4gICAgICA0OSxcbiAgICAgIDE2NyxcbiAgICAgIDI1MyxcbiAgICAgIDE1NCxcbiAgICAgIDIyOCxcbiAgICAgIDE5MyxcbiAgICAgIDE0LFxuICAgICAgMjM5LFxuICAgICAgMjM0LFxuICAgICAgMjQ1LFxuICAgICAgMTEsXG4gICAgICAxNjIsXG4gICAgICAyMzIsXG4gICAgICA3MCxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlIzMkNZVlBHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDU4MzY1NTA5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwNTQxNjE2Mzg5NzQ2MTo0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkhha2VlbVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tldW5nOFE1L1Rpc2dZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYXhPdXdXMTd6WTFtb1dGQjVVeFd6Tk9jTUV4cG1Wbm5iaFZSSzVHbG9taz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNSzFkWHQ1d3lVSjJwVUJDYnd4ektMbnpMbzJDTFlBb3lJR1paV3YzeEo2Q0NES0duTHlOMW03S3NKaDJDN2NRa0N4WFZJR3hXT2VqTjhDSEZ5YnNCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDUjZZV0M1ZVhCb1dEWUk3M0lPemlZekRONjYyV3pvNFVEbU1mRmFUMTREMmxRUnA4YkhzUnlLc0tjWGhJQitKcmgxb1pmVHRJaDJYWStSSjFoWk9Bdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDU4MzY1NTA5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MDkwOTIzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT2RBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPZEEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiNUpkZC9vdGRCZURucENJcG4rajE5enJlOHFQTG5TSXNiNlNBcllZa1lVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMxOTU0NzI3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTcwODY3Mjg0NDhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "?",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "hakeem-ff",
  ownername:process.env.OWNER_NAME|| "hakeem",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
