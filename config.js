const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="zh8559462@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ zᴀɪᴅ-ᴍᴅ" 


global.devs = "923357433862" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233506310609";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923357433862,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_34_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDMxLFxuICAgICAgICA5OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAzMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMixcbiAgICAgICAgMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICA5NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ3LFxuICAgICAgICA5NixcbiAgICAgICAgMTc4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU0LFxuICAgICAgICAzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDY4LFxuICAgICAgICA3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDUxLFxuICAgICAgICA3OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDU3LFxuICAgICAgICAxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk5LFxuICAgICAgICA3NixcbiAgICAgICAgMTU3LFxuICAgICAgICA3LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDY2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDMyLFxuICAgICAgICA2NixcbiAgICAgICAgMTU2LFxuICAgICAgICA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICA4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWlFxQlhTTVlPSXFKQ2d4ZzQveEkzN2RmU2dFZ29PRmk2SWhYeGF5UTB6OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSTZSMGhROUZTZmF4Y1l4cndUWnN2UVwiLFxuICBcInBob25lSWRcIjogXCI2Mjk0ODliNS05YjZkLTQ1NDMtYTdjYi0zYzdkMmJkNTFlYWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcsXG4gICAgICAxMTAsXG4gICAgICAxOTgsXG4gICAgICAxOTAsXG4gICAgICAxNTksXG4gICAgICAxNDgsXG4gICAgICAyMDIsXG4gICAgICAyMzIsXG4gICAgICAzNCxcbiAgICAgIDI2LFxuICAgICAgMTQwLFxuICAgICAgNDksXG4gICAgICAxODMsXG4gICAgICAxNCxcbiAgICAgIDYxLFxuICAgICAgNjgsXG4gICAgICAyOCxcbiAgICAgIDgwLFxuICAgICAgMTQzLFxuICAgICAgODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI3LFxuICAgICAgMTA4LFxuICAgICAgMTYzLFxuICAgICAgMTkyLFxuICAgICAgMTU4LFxuICAgICAgMTM1LFxuICAgICAgOSxcbiAgICAgIDEzMixcbiAgICAgIDE2MyxcbiAgICAgIDIwMixcbiAgICAgIDU0LFxuICAgICAgNixcbiAgICAgIDcyLFxuICAgICAgNDMsXG4gICAgICAzLFxuICAgICAgNTIsXG4gICAgICA5MyxcbiAgICAgIDE3NyxcbiAgICAgIDExOSxcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZRzJKRVIyNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTA2MzEwNjA5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyODM1MDcyNzU5NDA2ODoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09tUmlJWUlFSmJyK2JNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNmZoR1pPL21NSHo5bWI5d0xqanowa1NpeFg4bW5GREhJRW9ISzRIaUozdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrTmhUZzYrMnUxL295clpVSmkySm8rcjVsQWN5MEZIeEZHdG9YTm43Q1RBVUw1bTJYckYzelk4dlNxYXA3NnQyZlBVNHRzU3hpV09RcjJNajJ1eU5pQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2N2dqOExhZWVzMC95OE1OdENndlJaeWIyV1dGSnNyeUZPWTJMd2ZqeXRyeXozeitXbGQvTUQ3UnNVNzF0N3BKL1N1S242by83NHdMZ0xOQk5jMEVpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1MDYzMTA2MDk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk1NjM2NzRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ zᴀɪᴅ-ᴍᴅ 』```"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "zᴀɪᴅ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "PakWay",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
