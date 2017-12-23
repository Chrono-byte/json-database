const JSONDatabase = require('./src/main.js');

const db = new JSONDatabase('./test.txt');

db.sync();