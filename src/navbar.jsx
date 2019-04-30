// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("navbar");

class NavigationBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    const page = window.location.pathname;
    let cnameEdit;
    let cnamePrev;
    let cnameView;
    cnameEdit = (page === "/EditView.html") ? "nav-link active" : "nav-link";
    cnamePrev = (page === "/PreviousEntriesView.html") ? "nav-link active" : "nav-link";
    cnameView = (page === "/JournalEntryView.html") ? "nav-link active" : "nav-link";
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <a className="navbar-brand" href="./index.html">JournalZ</a>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

       <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
             <a className={cnameEdit} href="EditView.html">Edit Journal Entry</a>
           </li>
           <li className="nav-item">
             <a className={cnamePrev} href="PreviousEntriesView.html">Previous Entries</a>
           </li>
           <li className="nav-item">
             <a className={cnameView} href="JournalEntryView.html">View Journal Entry</a>
           </li>
         </ul>
        </div>
     </nav>
    );
  }
}

ReactDOM.render(<NavigationBar />, contentNode);
