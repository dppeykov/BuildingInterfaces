import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

import "jquery/dist/jquery.js";
import "popper.js/dist/umd/popper.js";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <div className="App">
      <h1>rendering</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
