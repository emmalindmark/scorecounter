import React, { Component } from 'react';
import './styles/App.css';
import Counter from "./components/Counter";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Score counter</h1>
                </header>
                <Counter/>
            </div>
        );
    }
}

export default App;
