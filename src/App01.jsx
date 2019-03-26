// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class JournalEntry extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Title</h1>
        <br></br>
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<JournalEntry />, contentNode);
