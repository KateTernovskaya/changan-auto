import React from 'react';
import './App.css';
import {Main} from "./layout/main/main";
import {Header} from "./layout/header/header";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
        </div>
    );
}

export default App;
