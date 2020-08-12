
// client.on("message", msg => {
//     if (msg.content.toLowerCase() === "ping") {
//         msg.reply("Pong!")
//     }
// })

module.exports = (client, message) => {
    if (message.content.toLowerCase() === "marco") {
        message.reply("Polo!");
    }
}