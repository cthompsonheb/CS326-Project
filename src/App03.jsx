// This is a place holder for the initial application state.
const state = {
  current_text: "",
  date: "Today",
  title: ""
};

const style = {
  entryBox: {

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

  render() {
    console.log(this.state);
    const viewLink = "./PreviousEntriesView.html";
    const EditLink = "./EditView.html";
    return (
      <div style={style.entryBox}>
        <h1 style={style.title}>View Journal Entry</h1>
        <p style={style.date}>{this.state.date}</p>
        <textarea rows="40" id="entrybox" cols="80" placeholder="Write anything here..." readOnly>
        </textarea>
      <button style={style.button} onClick={() => {window.location=viewLink}}>Previous Entries</button>
      <button style={style.button} onClick={() => {window.location=EditLink}}>Edit</button>
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<JournalEntry />, contentNode);
