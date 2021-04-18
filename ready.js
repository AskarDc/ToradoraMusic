module.exports = client => {
  let botStatus = [
    `Radio 24/7`,
    "tm!help",
    `Hecho por AceGX`,
]

    setInterval(function() {
    let status = botStatus[Math.floor(Math.random() * botStatus.length)];
    client.user.setActivity(status, {type: "WATCHING"});

    }, 5000)

    client.user.setUsername('Toradora Music'); // sets the bots name
    client.user.setStatus("online"); // sets the bots status
    
  console.log(`[API] Log hola ${client.user.username} esta activo ahora!`); // consoles logs this when bot is turned on
   
};