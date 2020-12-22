import React from "react"
import Header from "./COMPONENT/Header";
import Recipe from "./COMPONENT/Recipe";
import "./Style Folder/App.scss";

function App() {
  return (
    <div className="App">
      <h1>Food recipe Website</h1>
        <Header/>
        <Recipe/>
    </div>
  );
}

export default App;
