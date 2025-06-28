const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'PLUMSMP.aternos.me',
  port: 12862,
  username: 'AFKbot'
});

bot.on('spawn', () => {
  console.log('Bot has joined the server!');
  setInterval(() => {
    bot.chat('/setidletimeout 3000');
    console.log('Sent /setidletimeout 3000');
  }, 60000);
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  if (message === 'hi') {
    bot.chat(`Hello, ${username}!`);
  }
});

bot.on('end', () => {
  console.log('Bot has disconnected');
});

bot.on('error', err => {
  console.log('Bot error:', err);
});
