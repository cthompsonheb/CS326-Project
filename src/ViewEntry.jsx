// This is a place holder for the initial application state.
const state = {
  current_text: "",
  date: "Today",
  title: "An Existing Journal Entry",
  read: 1
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

class ViewEntry extends React.Component {
  constructor() {
    super();
    this.state = state;
    this.onEdit = this.onEdit.bind(this);
    this.onSave = this.onSave.bind(this);
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

  onEdit() {
    this.setState({read: 0});
  }

  onSave() {
    const Ndate = "Saved: " + this.getDate();
    const Ntitle = document.getElementById("titlebox").value;
    const Nwords = document.getElementById("entrybox").value;
    this.setState({title: Ntitle, current_text:Nwords, date: Ndate, read: 1});
  }

  render() {
    const viewLink = "./PreviousEntriesView.html";

    return (
      <div style={style.entryBox}>
        <p style={style.date}>{this.state.date}</p>
        <textarea rows="1" id="titlebox" cols="80" defaultValue="Existing Journal Entry" readOnly={this.state.read}>
        </textarea>
        <textarea rows="40" id="entrybox" cols="80" defaultValue="This is an example entry. Look at all this fun text. Try to edit me." readOnly={this.state.read}>
        </textarea>
      <button style={style.button} onClick={() => {window.location=viewLink}}>Previous Entries</button>
      <button style={style.button} onClick={() => {this.onEdit()}}>Edit</button>
      <button style={style.button} onClick={() => {this.onSave()}}>Save</button>
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<ViewEntry />, contentNode);
