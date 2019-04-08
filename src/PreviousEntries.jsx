// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class PreviousEntriesList extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: []
    };

    this.formatDate = this.formatDate.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.compareDate = this.compareDate.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    fetch(`/api/entries`).then(response => {
      if (response.ok) {
        response.json().then(data => {
          console.log("Total count of entries:", data._metadata.total_count);
          data.entries.sort(this.compareDate)
          data.entries.forEach(entry => {
            entry.date = this.formatDate(entry.date);
          });
          this.setState({ entries: data.entries });
        });
      } else {
        response.json().then(error => {
          alert("Failed to fetch entries:" + error.message)
        });
      }
    }).catch(err => {
      alert("Error in fetching data from server:", err);
    });
  }

  formatDate(date) {
    date = new Date(date);
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); 
    let yyyy = date.getFullYear();

    let newDate =  mm + '/' + dd + '/' + yyyy;
    return newDate;
  }

  onDelete(entry) {
    const newEntries = this.state.entries.slice();
    const index = newEntries.indexOf(entry);
    if (index > -1) {
      newEntries.splice(index, 1);
    }
    this.setState({entries: newEntries})
  }

  compareDate(a,b) {
    if (a.date > b.date)
      return -1;
    if (a.date < b.date)
      return 1;
    return 0;
  }

  render() {
    const homeLink = "./index.html";
    const entries = this.state.entries.map(entry =><EntriesListItem entry={entry} key={entry._id} onDelete={this.onDelete}/>);
    return (
      <div className="d-flex-row justify-content-between" style={{width: "80%", margin: "auto"}}>
        <div className="d-flex mt-3">
          <h1>
            Previous Journal Entries
          </h1>
          <button style={{marginLeft: "auto"}} type="button" className="btn btn-primary" onClick={() => {window.location=homeLink}}>Home</button>
        </div>
        <ul className="list-group mt-3">
          {entries}
        </ul>
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
      <li className="list-group-item d-flex justify-content-between">
        <div>
          <h4>{props.entry.title}</h4>
        </div>
        <div className="ml-auto" style={{width: "35%"}}>
          <h4>{props.entry.date}</h4>
        </div>
        <div>
          <button type="button" className="btn btn-outline-danger mr-1" onClick={() => props.onDelete(props.entry)}>Delete</button>
          <button type="button" className="btn btn-outline-primary mr-1" onClick={() => {window.location=editLink}}>Edit</button>
          <button type="button" className="btn btn-outline-success" onClick={() => {window.location=viewLink}}>View</button>
        </div>
      </li>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<PreviousEntriesList />, contentNode);
