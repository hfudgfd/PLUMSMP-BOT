const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bot is running.'));
app.listen(3000, () => console.log('Health endpoint on port 3000'));

require('./bot.js');
