// This is a place holder for the initial application state.
const state = {
  entries: [
    {
      id: 0,
      title: "Example Entry 1",
      date: "1/1/2019"
    },
    {
      id: 1,
      title: "Example Entry 2",
      date: "2/2/2019"
    },
    {
      id: 2,
      title: "Example Entry 3",
      date: "3/3/2019"
    },
    {
      id: 3,
      title: "Example Entry 4",
      date: "4/4/2019"
    },
    {
      id: 4,
      title: "Example Entry 5",
      date: "5/5/2019"
    },
    {
      id: 5,
      title: "Example Entry 6",
      date: "6/6/2019"
    }
  ]
};

//Placeholder for styling
const style = {
  list: {
    display: "flex",
    flexWrap: "wrap",
    //overflow: "auto", <-- makes the div itself scrollable
    width: "70%",
    margin: "0 auto",
    maxHeight: "98vh",
    fontFamily: "Arial"
  },
  listItem: {
    display: "flex", 
    width: "100%",
    justifyContent: "space-between", 
    border: "solid 1px black", 
    borderRadius: "10px",
    alignItems: "center",
    marginBottom: "15px",
    paddingLeft: "5px"
  },
  button: {
    margin: "5px"
  }
}

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class PreviousEntriesList extends React.Component {
  constructor() {
    super();
    this.state = state;

    this.getDate = this.getDate.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  getDate() {
    const date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); 
    let yyyy = date.getFullYear();
    return mm + '/' + dd + '/' + yyyy;
  }

  onDelete(entry) {
    const newEntries = this.state.entries.slice();
    const index = newEntries.indexOf(entry);
    if (index > -1) {
      newEntries.splice(index, 1);
    }
    this.setState({entries: newEntries})
  }

  render() {
    const entries = this.state.entries.map(entry =><EntriesListItem entry={entry} key={entry.id} onDelete={this.onDelete}/>);
    return (
      <div style={style.list}>
        <h1>
          Previous Journal Entries
        </h1>
        {entries}
      </div>
    );
  }
}

class EntriesListItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    const props = this.props;

    //using these to simulate changing views with an onClick function
    const editLink = "./EditView.html";
    const viewLink = "./JournalEntryView.html";

    return (
      <div style={style.listItem}>
        <h2>{props.entry.title}</h2>
        <p>{props.entry.date}</p>
        <div style={{display: "flex"}}>
          <button style={style.button} onClick={() => props.onDelete(props.entry)}>Delete</button>
          <button style={style.button} onClick={() => {window.location=editLink}}>Edit</button>
          <button style={style.button} onClick={() => {window.location=viewLink}}>View</button>
        </div>
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<PreviousEntriesList />, contentNode);
