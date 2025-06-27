const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host:'PLUMSMP.aternos.me',
  port:12862,
  username: 'AFKbot'
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  if (message === 'hi') {
    bot.chat(`Hello, ${username}!`);
  }
});

bot.on('spawn', () => {
  console.log('Bot has joined the server!');
});

bot.on('end', () => {
  console.log('Bot has disconnected');
});

bot.on('error', err => {
  console.log('Bot error:', err);
});
