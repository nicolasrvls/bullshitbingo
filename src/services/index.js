const games = require('./games/games.service.js');
const messages = require('./messages/messages.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(games);
  app.configure(messages);
};
