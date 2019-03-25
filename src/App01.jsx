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
        <button type="button">Back</button>
        <h1>Title</h1>
        <h2>Date</h2>
        <textarea rows="40" cols="80" spellcheck="true" readOnly>
        Journal Entry Goes Here.
        Have a good day
        </textarea>
        <br></br>
        <button type="button">Edit</button>
        <button type="button">Delete</button>
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<JournalEntry />, contentNode);
