require("dotenv").config()

// Import the discord api library.
const Discord = require("discord.js")
// We need to have access to the file system from here.
const fs = require("fs")
// Instantiate a new Client.
const client = new Discord.Client()

fs.readdir("./events/", (err, files) => {
    files.forEach(file => {
        const eventHandler = require(`./events/${file}`)
        const eventName = file.split(".")[0]
        client.on(eventName, (...args) => eventHandler(client, ...args))
    })
})

client.login(process.env.BOT_TOKEN)