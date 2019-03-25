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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <a class="navbar-brand" href="#">The Notebook</a>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

       <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
             <a class="nav-link" href="App01.jsx">Current Journal Entry</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="App02.jsx">Previous Entries</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="App03.jsx">Previous Journal Entry</a>
           </li>
         </ul>
        </div>
     </nav>
    );
  }
}

ReactDOM.render(<NavigationBar />, contentNode);
