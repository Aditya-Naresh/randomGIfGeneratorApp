import React from "react";

import Random from "./components/Random_V2";

import Tag from "./components/Tag_V2";

import './App.css'

const App= () => (
    <div>
        <h1>Random Gif Application</h1>
        <div className="main-container" style={{justifyContent: "space-between"}}>
            <div>
            <Random /> 
            </div>
            
            <div>
            <Tag />
            </div>
            
        </div>
    </div>
);

export default App;