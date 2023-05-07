const Sequalize = require('sequalize');
require('dotenv').config();

let sequalize;

if (process.env.JAWSDB_URL) {
  sequalize = new Sequalize(process.env.JAWSDB_URL);
} else {
  sequalize = new Sequalize
}