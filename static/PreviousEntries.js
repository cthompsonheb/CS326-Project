"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

var PreviousEntriesList = function (_React$Component) {
  _inherits(PreviousEntriesList, _React$Component);

  function PreviousEntriesList() {
    _classCallCheck(this, PreviousEntriesList);

    var _this = _possibleConstructorReturn(this, (PreviousEntriesList.__proto__ || Object.getPrototypeOf(PreviousEntriesList)).call(this));

    _this.state = {
      entries: []
    };

    _this.formatDate = _this.formatDate.bind(_this);
    _this.onDelete = _this.onDelete.bind(_this);
    _this.compareDate = _this.compareDate.bind(_this);
    return _this;
  }

  _createClass(PreviousEntriesList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this2 = this;

      fetch("/api/entries").then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log("Total count of entries:", data._metadata.total_count);
            data.entries.sort(_this2.compareDate);
            data.entries.forEach(function (entry) {
              entry.date = _this2.formatDate(entry.date);
            });
            _this2.setState({ entries: data.entries });
          });
        } else {
          response.json().then(function (error) {
            alert("Failed to fetch entries:" + error.message);
          });
        }
      }).catch(function (err) {
        alert("Error in fetching data from server:", err);
      });
    }
  }, {
    key: "formatDate",
    value: function formatDate(date) {
      date = new Date(date);
      var dd = String(date.getDate()).padStart(2, '0');
      var mm = String(date.getMonth() + 1).padStart(2, '0');
      var yyyy = date.getFullYear();

      var newDate = mm + '/' + dd + '/' + yyyy;
      return newDate;
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
    key: "compareDate",
    value: function compareDate(a, b) {
      if (a.date > b.date) return -1;
      if (a.date < b.date) return 1;
      return 0;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var homeLink = "./index.html";
      var entries = this.state.entries.map(function (entry) {
        return React.createElement(EntriesListItem, { entry: entry, key: entry._id, onDelete: _this3.onDelete });
      });
      return React.createElement(
        "div",
        { className: "d-flex-row justify-content-between", style: { width: "80%", margin: "auto" } },
        React.createElement(
          "div",
          { className: "d-flex mt-3" },
          React.createElement(
            "h1",
            null,
            "Previous Journal Entries"
          ),
          React.createElement(
            "button",
            { style: { marginLeft: "auto" }, type: "button", className: "btn btn-primary", onClick: function onClick() {
                window.location = homeLink;
              } },
            "Home"
          )
        ),
        React.createElement(
          "ul",
          { className: "list-group mt-3" },
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
        { className: "list-group-item d-flex justify-content-between" },
        React.createElement(
          "div",
          null,
          React.createElement(
            "h4",
            null,
            props.entry.title
          )
        ),
        React.createElement(
          "div",
          { className: "ml-auto", style: { width: "35%" } },
          React.createElement(
            "h4",
            null,
            props.entry.date
          )
        ),
        React.createElement(
          "div",
          null,
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