const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;


const app = express();

app.use(express.static('static'));

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/entries', (req, res) => {
  const filter = {};
  if (req.query.status) filter.status = req.query.status;

  db.collection('entries').find(filter).toArray().then(entries => {
    const metadata = { total_count: entries.length };
    res.json({ _metadata: metadata, entries: entries })
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});

let db;
MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }).then(connection => {
  db = connection.db('JournalZ');
  app.listen(3000, () => {
    console.log('App started on port 3000');
  });
}).catch(error => {
  console.log('ERROR:', error);
});
