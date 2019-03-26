// This is a place holder for the initial application state.
const state = {
  current_text: "",
  date: "Today",
  title: ""
};

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

class JournalEntry extends React.Component {
  constructor() {
    super();
    this.state = state;
    this.getDate = this.getDate.bind(this);
    this.onsave = this.onSave.bind(this);
  }

  getDate() {
    const date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); 
    let yyyy = date.getFullYear();
    let hh = date.getHours();
    let mmm = date.getMinutes();
    let newDate =  mm + '/' + dd + '/' + yyyy + ' ' + hh + ':' + mmm;
    return newDate;
  }

  onSave() {
    const Ndate = this.getDate();
    const Ntitle = document.getElementById("titlebox").value;
    const Nwords = document.getElementById("entrybox").value;
    this.setState({title: Ntitle, current_text:Nwords, date: Ndate});
    //alert("Saved!");
  }

  render() {
    console.log(this.state);
    const viewLink = "./PreviousEntriesView.html";
    const EditLink = "./EditView.html";
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
ReactDOM.render(<JournalEntry />, contentNode);
