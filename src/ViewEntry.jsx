// This is a place holder for the initial application state.
const state = {
  current_text: "",
  date: "Today",
  title: "An Existing Journal Entry",
  read: 1
};

const style = {
 root:{
   backgroundImage: "url('https://cdn.hipwallpaper.com/i/12/15/g8VhaE.jpg')",
   backgroundSize: '100%',
   overflow: "hidden"
},
 entryBox: {
    maxWidth: "100%",
  },
  button: {
    margin: "10px",   
    width: "15%",

  },
  titlebox:{
    width: "50%",
    display: "block",
    margin:"auto",
    backgroundImage: "url('https://wallpaperplay.com/walls/full/8/a/d/103355.jpg')" ,
    backgroundSize: 'cover',
    overflow: "hidden"
  },
  textbox:{
    width: "50%",
    display: "block",
    margin: "auto",
    backgroundImage: "url('https://wallpaperplay.com/walls/full/8/a/d/103355.jpg')",
    backgroundSize: 'cover',
    overflow: "hidden" 
  },
  title:{
    color:"white",
    margin: "10px"
  },
  date:{
    color:"white"
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
      <div>
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
      <div style={style.root}>
      <div className="container" style={style.entryBox}>
        <div className="mx-auto">
        <h1 className="text-center" style={style.title}>View Journal Entry</h1>
        <p className="text-center" style={style.date}>{this.state.date}</p>
        <textarea rows="1" style={style.titlebox} id="titlebox" cols="80" defaultValue="Existing Journal Entry" readOnly={this.state.read}>
        </textarea>
        <textarea rows="40"style={style.textbox}  id="entrybox" cols="80" defaultValue="This is an example entry. Look at all this fun text. Try to edit me." readOnly={this.state.read}>
        </textarea>
        <div className="text-center"> 
      <button style={style.button} onClick={() => {window.location=viewLink}}>Previous Entries</button>
      <button style={style.button} onClick={() => {this.onEdit()}}>Edit</button>
      <button style={style.button} onClick={() => {this.onSave()}}>Save</button>
        </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<ViewEntry />, contentNode);
