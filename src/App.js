import React, { Component } from "react";
import "./App.css";
import Place from "./containers/Place";
import Control from "./containers/Control";
import History from "./containers/History";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="left">
                        <Place />
                    </div>
                    <div className="right">
                        <Control />
                        <History />
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
