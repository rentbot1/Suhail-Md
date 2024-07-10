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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/dftjBe4.jpg" ; // SET LOGO FOR IMAGE 
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_14_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDM3LFxuICAgICAgICAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDg3LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDczLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3LFxuICAgICAgICA2MyxcbiAgICAgICAgODIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4LFxuICAgICAgICA4MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDczLFxuICAgICAgICA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDM2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICA2MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDc0LFxuICAgICAgICA0MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzksXG4gICAgICAgIDM3LFxuICAgICAgICA2NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibCs5ZGZBOWkwTHlwdG5NaWQ1cWhJU3VhYW1CMVhJNnhVc1ZraTBJNjgyZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRENpOHpXUWtReVNlZFJxemNNWlh5d1wiLFxuICBcInBob25lSWRcIjogXCI1OTIxNDM0OC04ODM5LTRkMmMtOGQ3MS1iYTg5ZWU0NzVlMWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODksXG4gICAgICAyLFxuICAgICAgNDIsXG4gICAgICA3MSxcbiAgICAgIDE3LFxuICAgICAgNyxcbiAgICAgIDIwOCxcbiAgICAgIDgxLFxuICAgICAgMTY3LFxuICAgICAgMTgyLFxuICAgICAgMyxcbiAgICAgIDUsXG4gICAgICAyMjMsXG4gICAgICAxNzAsXG4gICAgICA2OCxcbiAgICAgIDExNCxcbiAgICAgIDIyNCxcbiAgICAgIDksXG4gICAgICA3NixcbiAgICAgIDE3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTgsXG4gICAgICA3MixcbiAgICAgIDEzMyxcbiAgICAgIDEyNCxcbiAgICAgIDk5LFxuICAgICAgMjA0LFxuICAgICAgMjAsXG4gICAgICAzNixcbiAgICAgIDIxMixcbiAgICAgIDIzNixcbiAgICAgIDcxLFxuICAgICAgNzEsXG4gICAgICAwLFxuICAgICAgNzEsXG4gICAgICAxMDMsXG4gICAgICAyMTIsXG4gICAgICAyMDksXG4gICAgICA4LFxuICAgICAgMTg4LFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJXNFNXWjZLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1MDYzMTA2MDk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI4MzUwNzI3NTk0MDY4OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlBqb3BNR0VQT2h1YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2ZmhHWk8vbU1IejltYjl3TGpqejBrU2l4WDhtbkZESElFb0hLNEhpSjN3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm5qckJjaUNIN1d5RnFhdEhIeUFLS0Z6WnZqcTZhRG02c0pTMVU3N1FZUDhiVFgrU0dFaVZCK2JabGpzZmtKdzlXaDkvWUcrZWxYVGVTNmw0SUVmUmdBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVoM1M0blNlTkhIb1NrdEJDbVlhRmZjSE9vdCtmeEFMOVc1b2htUnNvaXMvUk8zN0w4RWNWaXpCMTJJbUtnWHBqbktZRWlNUWxVZW5JK3g5cjg5TURBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzUwNjMxMDYwOTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDYwMjg3MFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
