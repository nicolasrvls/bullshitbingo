const socket = io();
const client = feathers();
client.configure(feathers.hooks());

// Create the Feathers application with a `socketio` connection
client.configure(feathers.socketio(socket));

// Get the service for our `messages` endpoint
const games = client.service('games');

// Log when anyone creates a new message in real-time!
games.on('created', game =>
  alert(`New game with id ${game.game_id}`)
);

// Create a test message
games.create({
  game_id: 'abc'
});

games.find().then(results => console.log('Current games are', results));
