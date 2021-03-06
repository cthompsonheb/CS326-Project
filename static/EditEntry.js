"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  root: {
    backgroundImage: "url('https://cdn.hipwallpaper.com/i/12/15/g8VhaE.jpg')",
    backgroundSize: 'cover',
    overflow: "hidden"
  },
  entryBox: {
    maxWidth: "100%"
  },
  button: {
    margin: "10px",
    width: "20%"

  },
  titlebox: {
    width: "50%",
    display: "block",
    margin: "auto",
    backgroundImage: "url('https://wallpaperplay.com/walls/full/8/a/d/103355.jpg')",
    backgroundSize: 'cover',
    overflow: "hidden"
  },
  textbox: {
    width: "50%",
    display: "block",
    margin: "auto",
    backgroundImage: "url('https://wallpaperplay.com/walls/full/8/a/d/103355.jpg')",
    backgroundSize: 'cover',
    overflow: "hidden"
  },
  title: {
    color: "white",
    margin: "10px"
  },
  date: {
    color: "white"
  }

  // This grabs the DOM element to be used to mount React components.
};var contentNode = document.getElementById("contents");

var EditEntry = function (_React$Component) {
  _inherits(EditEntry, _React$Component);

  function EditEntry() {
    _classCallCheck(this, EditEntry);

    var _this = _possibleConstructorReturn(this, (EditEntry.__proto__ || Object.getPrototypeOf(EditEntry)).call(this));

    _this.state = {
      title: "",
      current_text: "",
      date: "Today"
    };
    _this.getDate = _this.getDate.bind(_this);
    _this.onsave = _this.onSave.bind(_this);
    _this.createEntry = _this.createEntry.bind(_this);
    return _this;
  }

  _createClass(EditEntry, [{
    key: "createEntry",
    value: function createEntry(newEntry) {
      fetch('/api/entries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEntry)
      }).then(function (res) {
        if (res.ok) {
          res.json().then(function (updatedEntry) {
            //updatedEntry.date = new Date(updatedEntry.date);
          });
        } else {
          res.json().then(function (error) {
            alert('Failed to add entry: ' + error.message);
          });
        }
      });
    }
  }, {
    key: "getDate",
    value: function getDate() {
      var date = new Date();
      var dd = String(date.getDate()).padStart(2, '0');
      var mm = String(date.getMonth() + 1).padStart(2, '0');
      var yyyy = date.getFullYear();
      var hh = date.getHours();
      var mmm = date.getMinutes();
      var time = "AM";
      if (hh > 12) {
        hh -= 12;
        time = "PM";
      }
      if (mmm < 10) mmm = "0" + mmm.toString();
      var newDate = mm + '/' + dd + '/' + yyyy + ' ' + hh + ':' + mmm + time;
      return newDate;
    }
  }, {
    key: "onSave",
    value: function onSave() {
      var newDate = "Saved: " + this.getDate();
      var newTitle = document.getElementById("titlebox").value;
      var newCurrentText = document.getElementById("entrybox").value;
      this.setState({ title: newTitle, current_text: newCurrentText, date: newDate });
      //alert("Saved!");
      this.createEntry({
        title: newTitle,
        current_text: newCurrentText,
        created: new Date()
      });
      // Clear the entry for the next input.
      // document.getElementById("titlebox").value = "";
      // document.getElementById("entrybox").value = "";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var viewLink = "./PreviousEntriesView.html";
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { style: style.root },
          React.createElement(
            "div",
            { className: "container", style: style.entryBox },
            React.createElement(
              "div",
              { className: "mx-auto" },
              React.createElement(
                "h1",
                { className: "text-center", style: style.title },
                "Edit Journal Entry"
              ),
              React.createElement(
                "p",
                { className: "text-center", style: style.date },
                "Last Opened: ",
                this.getDate()
              ),
              React.createElement("textarea", { rows: "1", style: style.titlebox, id: "titlebox", cols: "80", placeholder: "Write a title here..." }),
              React.createElement("textarea", { rows: "40", style: style.textbox, id: "entrybox", cols: "80", placeholder: "Write anything here..." }),
              React.createElement(
                "div",
                { className: "text-center" },
                React.createElement(
                  "button",
                  { style: style.button, onClick: function onClick() {
                      window.location = viewLink;
                    } },
                  "Previous Entries"
                ),
                React.createElement(
                  "button",
                  { style: style.button, onClick: function onClick() {
                      _this2.onSave();
                    } },
                  "Save"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return EditEntry;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(EditEntry, null), contentNode);