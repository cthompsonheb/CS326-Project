// NEW

// Connect to the issuetracker database. Note, if the issuetracker database
// does not exist, it will create it with this call.
db = new Mongo().getDB('JournalZ');

// Next, we remove everything inside it. This is helpful to ensure that the
// database starts from a known state.
db.issues.remove({});

// Now, we insert some mock data that mirrors the data that we have in the
// in-memory version of the `server.js` code.
db.issues.insert(
[
    {
      id: 0,
      title: "Example Entry 1",
      date: "1/1/2019",
	  current_text: ""
    },
    {
      id: 1,
      title: "Example Entry 2",
      date: "2/2/2019",
	  current_text: ""
    },
    {
      id: 2,
      title: "Example Entry 3",
      date: "3/3/2019",
	  current_text: ""
    },
    {
      id: 3,
      title: "Example Entry 4",
      date: "4/4/2019",
	  current_text: ""

    },
    {
      id: 4,
      title: "Example Entry 5",
      date: "5/5/2019",
	  current_text: ""

    },
    {
      id: 5,
      title: "Example Entry 6",
      date: "6/6/2019",
	  current_text: ""
    }
] );

// Lastly, we create "indexes" to make searching faster. For this particular
// application we know that searching on the status, owner, and created properties
// will be common, so we create indexes on those.
db.issues.createIndex({ title: 1 });
db.issues.createIndex({ date: 1 });
db.issues.createIndex({ id: 1 });