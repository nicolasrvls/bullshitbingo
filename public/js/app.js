const socket = io();
const client = feathers();
client.configure(feathers.hooks());

// Create the Feathers application with a `socketio` connection
client.configure(feathers.socketio(socket));

// Get the service for our `messages` endpoint
const games = client.service('games');

// Log when anyone creates a new message in real-time!
games.on('created', game =>
  alert(`New game with id ${game._id}`)
);

// Create a test message
createGame("test");

games.find().then(results => console.log('Current games are', results));


function createGame(g_name) {
  games.create({
    game_name: g_name,
    createdAt: new Date(),
    words: generateWords(),
    players: []
  });
}

function generateWords() {
  var r = [];
  var t = cartes;
  for (var i = 0; i < 9; i++) {
    k = Math.floor(Math.random() * t.length);
    r.push(
      {
        "word" : t.splice(k,1)[0],
        "marked": false
      }
    );
  }
  return r;
}
