const mineflayer = require('mineflayer');
const { pathfinder, Movements, goals } = require('mineflayer-pathfinder');
const { Vec3 } = require('vec3');

const bot = mineflayer.createBot({
  host: 'PLUMSMP.aternos.me',
  port: 12862,
  username: 'AFKbot'
});

const directions = [
  new Vec3(0, 0, -4),
  new Vec3(4, 0, 0),
  new Vec3(0, 0, 4),
  new Vec3(-4, 0, 0)
];

let current = 0;

bot.loadPlugin(pathfinder);

bot.on('spawn', () => {
  console.log('Bot has joined the server!');
  const defaultMove = new Movements(bot);
  bot.pathfinder.setMovements(defaultMove);

  setInterval(() => {
    bot.chat('/setidletimeout 3000');
    console.log('Sent /setidletimeout 3000');
  }, 60000);

  setInterval(() => {
    const pos = bot.entity.position.offset(
      directions[current].x,
      directions[current].y,
      directions[current].z
    );
    bot.pathfinder.setGoal(new goals.GoalBlock(pos.x, pos.y, pos.z));
    current = (current + 1) % directions.length;
  }, 10000);
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
