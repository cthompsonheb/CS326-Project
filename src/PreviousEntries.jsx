// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");
const style = {
   root:{
   backgroundImage: "url('https://cdn.hipwallpaper.com/i/12/15/g8VhaE.jpg')",
   backgroundSize: 'cover',
   height:"-webkit-fill-available"
   },
   prevlist:{
     height: "100%"
   },
   title:{
    color:"white",
    margin: "10px",
    align: "center"
  }
};

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

  
  deleteEntry(entry) {
    fetch('/api/entries' + entry, {
      method: 'DELETE',
    })
      .then(res => {
        if (res.ok) {
          res.json()
            .then(res => {
              res.json()
            });
        }
        else {
          res.json()
            .then(error => {
              alert('Failed to delete entry: ' + error.message);
            });
        }
      });
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
      <div style={style.root}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <a className="navbar-brand" href="#">JournalZ</a>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

       <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
             <a className="nav-link" href="EditView.html">Edit Journal Entry</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="PreviousEntriesView.html">Previous Entries</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="JournalEntryView.html">View Journal Entry</a>
           </li>
         </ul>
        </div>
     </nav> 
      <div className="d-flex-row justify-content-between" style={{width: "80%", margin: "auto"}}>
        <div className="d-flex mt-3">
          <h1 style = {style.title}>
            Previous Journal Entries
          </h1>
        </div>
        <ul className="list-group mt-3">
          {entries}
        </ul>
      </div>
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
      <div>
      <li style = {style.prevlist} className="list-group-item d-flex justify-content-between">
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
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<PreviousEntriesList />, contentNode);
