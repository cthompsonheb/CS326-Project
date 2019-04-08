const style = {
  entryBox: {
    maxWidth: "45%"
  },
  button: {
    margin: "5px"

  }
}

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class EditEntry extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      current_text: "",
      date: "Today"
    };
    this.getDate = this.getDate.bind(this);
    this.onsave = this.onSave.bind(this);
    this.createEntry = this.createEntry.bind(this);
  }

  createEntry(newEntry) {
    fetch('/api/entries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEntry),
    })
      .then(res => {
        if (res.ok) {
          res.json()
            .then(updatedEntry => {
              //updatedEntry.date = new Date(updatedEntry.date);
            });
        }
        else {
          res.json()
            .then(error => {
              alert('Failed to add entry: ' + error.message);
            });
        }
      });
  }

  getDate() {
    const date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); 
    let yyyy = date.getFullYear();
    let hh = date.getHours();
    let mmm = date.getMinutes();
    let time = "AM";
    if (hh > 12) {
      hh -= 12;
      time = "PM";
    }
    if (mmm < 10) mmm = "0" + mmm.toString()
    let newDate =  mm + '/' + dd + '/' + yyyy + ' ' + hh + ':' + mmm + time;
    return newDate;
  }

  onSave() {
    const newDate = "Saved: " + this.getDate();
    const newTitle = document.getElementById("titlebox").value;
    const newCurrentText = document.getElementById("entrybox").value;
    this.setState({title: newTitle, current_text: newCurrentText, date: newDate});
    //alert("Saved!");
    this.createEntry({
      title: newTitle,
      current_text: newCurrentText,
      created: new Date(),
    });
    // Clear the entry for the next input.
    // document.getElementById("titlebox").value = "";
    // document.getElementById("entrybox").value = "";
  }

  render() {
    const viewLink = "./PreviousEntriesView.html";
    return (
      <div style={style.entryBox}>
        <h1 style={style.title}>Edit Journal Entry</h1>
        <p style={style.date}>{this.state.date}</p>
        <textarea rows="1" id="titlebox" cols="80" placeholder="Write a title here..." >
        </textarea>
        <textarea rows="40" id="entrybox" cols="80" placeholder="Write anything here...">
        </textarea>
      <button style={style.button} onClick={() => {window.location=viewLink}}>Previous Entries</button>
      <button style={style.button} onClick={() => {this.onSave()}}>Save</button>
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<EditEntry />, contentNode);
