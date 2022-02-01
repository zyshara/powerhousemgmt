import React, { Component } from "react";

import "./App.css";


class App extends Component {
    render() {
      return (
          <div id="root">
            <video src={ require("./smoke.mp4") } muted loop autoPlay playsInline/>
            <img alt="logo" id="logo" src={ require("./logo.png") }/>
            <img alt="logo reflected" id="logo-reflect" src={ require("./logo.png") }/>
            <div id="text-wrap">
                <img alt="text-logo" id="text-logo" src={ require("./text-logo.png") }/>
                <p> coming soon </p>
            </div>
          </div>
      )
    }
}

export default App;
