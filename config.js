const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923357433862" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347010816280";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_37_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzksXG4gICAgICAgIDYxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNixcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMixcbiAgICAgICAgMjEzLFxuICAgICAgICA5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQyLFxuICAgICAgICA3OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDc5LFxuICAgICAgICA1LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgODcsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3LFxuICAgICAgICA4OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc5LFxuICAgICAgICA2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDgxLFxuICAgICAgICA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTczLFxuICAgICAgICA2NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA5OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODksXG4gICAgICAgIDYxLFxuICAgICAgICAxLFxuICAgICAgICAyNixcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAxMixcbiAgICAgICAgNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDE1LFxuICAgICAgICAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMixcbiAgICAgICAgODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjExLFxuICAgICAgICA1MyxcbiAgICAgICAgNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDMyLFxuICAgICAgICA1NixcbiAgICAgICAgNjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFL1U3M3oweWVCaWkyVDlEZVNROGtpclZSbjBwcnlZQVgvZmNONnJJM2tzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmeU8yTjNSZVFweUE2cmU0WFJ1SU53XCIsXG4gIFwicGhvbmVJZFwiOiBcImE3MmM4OTk1LTIwMDMtNDMyYi04OWYzLWIyMTQ5MmM3YjczZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjcsXG4gICAgICA0OSxcbiAgICAgIDE2OSxcbiAgICAgIDE2NSxcbiAgICAgIDQsXG4gICAgICAyMzksXG4gICAgICAyMDUsXG4gICAgICAzOCxcbiAgICAgIDEyMyxcbiAgICAgIDIyNCxcbiAgICAgIDMzLFxuICAgICAgMjIzLFxuICAgICAgMTksXG4gICAgICAxNTcsXG4gICAgICAyMTQsXG4gICAgICAyNDgsXG4gICAgICAxNTUsXG4gICAgICAxNjEsXG4gICAgICAxOTYsXG4gICAgICAxMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgMTgwLFxuICAgICAgMTA3LFxuICAgICAgMTMsXG4gICAgICAxNzIsXG4gICAgICAyNDgsXG4gICAgICAxNTgsXG4gICAgICAyMSxcbiAgICAgIDIxOSxcbiAgICAgIDExLFxuICAgICAgMixcbiAgICAgIDU1LFxuICAgICAgMTYwLFxuICAgICAgMzAsXG4gICAgICAyNyxcbiAgICAgIDExMixcbiAgICAgIDIwMCxcbiAgICAgIDEyOCxcbiAgICAgIDE2NyxcbiAgICAgIDY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjY5NlZDWlhWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDEwODE2MjgwOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTY1MjY5NTEwNjM3ODM6MThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTldKemxvUXMvZlVzd1lZQlNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoV1czSXVmcXp2SVdDRnNDZDk5NzhQZUR5ajY3aTkveGZEU0hZMWIxY3hvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjN2ZUh6OS9DbGtlblZuR0VZUWtZa0htSERGZjh0dlNxUENrbkRlbWhLem55UGc3QWNUR3VnUWhUbUxTTTh6R3Q1Y3RWdmNzSUFaZk5qQUI5Y1lVZEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRXTHVUR3dCUnpKSnAwaWZiV2p0NDNFWWpDdlQ3Ri9HSko4WkM1Ri9VM3l4YzRmaElubk9aK0N4Zk9SR0VPazdEdm45eEFwanhMdW5DQVMxc1BvTkFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMTA4MTYyODA6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg5NTkwMzJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "JonnyX",


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
