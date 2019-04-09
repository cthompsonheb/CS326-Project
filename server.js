const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();

app.use(express.static('static'));

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

const entryFieldType = {
  title: 'required',
  current_text: 'required'
};

function validateEntry(entry) {
  for(const field in entry) {
    if(Object.keys(entryFieldType).indexOf(field) === -1){
      delete entry[field];
    } 
  }
  for (const field in entryFieldType) {
    const type = entryFieldType[field];
    if (type === 'required' && !entry[field]) {
      return `${field} is required.`;
    }
  }
}

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

app.post('/api/entries', (req, res) => {
  const newEntry = req.body;

  const err = validateEntry(newEntry);

  if (err) {
    res.status(422).json({ message: `Invalid request: ${err}` });
    return;
  }

  newEntry.date = new Date();
  
  db.collection('entries').insertOne(newEntry).then(result =>
    db.collection('entries').find({ title: result.title }).limit(1).next()
  ).then(newEntry => {
    res.json(newEntry);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});

app.delete('/api/entries', (req, res) => {
    const dEntry = req.body._id;
    db.collection('entries').remove({_id: dEntry}).catch(error => {
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
