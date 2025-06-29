const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'PLUMSMP.aternos.me',
    port: 12862,
    username: 'AFKbot'
  });

  bot.on('spawn', () => {
    console.log('Bot has joined the server!');
  });

  bot.on('end', () => {
    console.log('Bot disconnected, reconnecting in 10s...');
    setTimeout(createBot, 10000);
  });

  bot.on('error', err => {
    console.log('Bot error:', err);
  });
}

createBot();
