// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class NavigationBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
<<<<<<< HEAD
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <a class="navbar-brand" href="#">JournalZ</a>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
=======
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <a className="navbar-brand" href="#">The Notebook</a>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
>>>>>>> 9e19d478fd6e2af1b79e8792d7f8216cf1c6a38b
  </button>

       <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
             <a className="nav-link" href="EditView.html">Current Journal Entry</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="PreviousEntriesView.html">Previous Entries</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="JournalEntryView.html">Previous Journal Entry</a>
           </li>
         </ul>
        </div>
     </nav>
    );
  }
}

ReactDOM.render(<NavigationBar />, contentNode);
