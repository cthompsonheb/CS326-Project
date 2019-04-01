"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var state = {
  entries: [{
    id: 0,
    title: "Example Entry 1",
    date: "1/1/2019"
  }, {
    id: 1,
    title: "Example Entry 2",
    date: "2/2/2019"
  }, {
    id: 2,
    title: "Example Entry 3",
    date: "3/3/2019"
  }, {
    id: 3,
    title: "Example Entry 4",
    date: "4/4/2019"
  }, {
    id: 4,
    title: "Example Entry 5",
    date: "5/5/2019"
  }, {
    id: 5,
    title: "Example Entry 6",
    date: "6/6/2019"
  }]
};

//Placeholder for styling
var style = {
  list: {
    display: "flex",
    flexWrap: "wrap",
    //overflow: "auto", <-- makes the div itself scrollable
    width: "70%",
    margin: "0 auto",
    maxHeight: "98vh",
    fontFamily: "Arial"
  },
  listItem: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    border: "solid 1px black",
    borderRadius: "10px",
    alignItems: "center",
    marginBottom: "15px",
    paddingLeft: "5px"
  },
  button: {
    margin: "5px"
  }

  // This grabs the DOM element to be used to mount React components.
};var contentNode = document.getElementById("contents");

var PreviousEntriesList = function (_React$Component) {
  _inherits(PreviousEntriesList, _React$Component);

  function PreviousEntriesList() {
    _classCallCheck(this, PreviousEntriesList);

    var _this = _possibleConstructorReturn(this, (PreviousEntriesList.__proto__ || Object.getPrototypeOf(PreviousEntriesList)).call(this));

    _this.state = state;

    _this.getDate = _this.getDate.bind(_this);
    _this.onDelete = _this.onDelete.bind(_this);
    return _this;
  }

  _createClass(PreviousEntriesList, [{
    key: "getDate",
    value: function getDate() {
      var date = new Date();
      var dd = String(date.getDate()).padStart(2, '0');
      var mm = String(date.getMonth() + 1).padStart(2, '0');
      var yyyy = date.getFullYear();
      return mm + '/' + dd + '/' + yyyy;
    }
  }, {
    key: "onDelete",
    value: function onDelete(entry) {
      var newEntries = this.state.entries.slice();
      var index = newEntries.indexOf(entry);
      if (index > -1) {
        newEntries.splice(index, 1);
      }
      this.setState({ entries: newEntries });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var entries = this.state.entries.map(function (entry) {
        return React.createElement(EntriesListItem, { entry: entry, key: entry.id, onDelete: _this2.onDelete });
      });
      return React.createElement(
        "div",
        { style: { width: "80%", margin: "auto" } },
        React.createElement(
          "h1",
          null,
          "Previous Journal Entries"
        ),
        React.createElement(
          "ul",
          { className: "list-group" },
          entries
        )
      );
    }
  }]);

  return PreviousEntriesList;
}(React.Component);

var EntriesListItem = function (_React$Component2) {
  _inherits(EntriesListItem, _React$Component2);

  function EntriesListItem() {
    _classCallCheck(this, EntriesListItem);

    return _possibleConstructorReturn(this, (EntriesListItem.__proto__ || Object.getPrototypeOf(EntriesListItem)).call(this));
  }

  _createClass(EntriesListItem, [{
    key: "render",
    value: function render() {
      var props = this.props;

      //using these to simulate changing views with an onClick function
      var editLink = "./EditView.html";
      var viewLink = "./JournalEntryView.html";

      return React.createElement(
        "li",
        { className: "list-group-item d-flex" },
        React.createElement(
          "h4",
          null,
          props.entry.title
        ),
        React.createElement(
          "h4",
          { className: "ml-auto" },
          props.entry.date
        ),
        React.createElement(
          "div",
          { className: "ml-auto" },
          React.createElement(
            "button",
            { type: "button", className: "btn btn-outline-danger mr-1", onClick: function onClick() {
                return props.onDelete(props.entry);
              } },
            "Delete"
          ),
          React.createElement(
            "button",
            { type: "button", className: "btn btn-outline-primary mr-1", onClick: function onClick() {
                window.location = editLink;
              } },
            "Edit"
          ),
          React.createElement(
            "button",
            { type: "button", className: "btn btn-outline-success", onClick: function onClick() {
                window.location = viewLink;
              } },
            "View"
          )
        )
      );
    }
  }]);

  return EntriesListItem;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(PreviousEntriesList, null), contentNode);