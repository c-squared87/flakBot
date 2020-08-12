require("dotenv").config()

const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
    if (msg.content.toLowerCase() === "ping") {
        msg.reply("Pong!")
    }
})

client.on("guildMemberAdd", member => {
    member.send(
        'Welcome to my test server, I am not sure how you found this but hello!'
    )
})

client.login(process.env.BOT_TOKEN)