import React from 'react';
import './App.css';
import Header from "./layout/header/Header";
import {Main} from "./layout/main/main";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
        </div>
    );
}

export default App;
