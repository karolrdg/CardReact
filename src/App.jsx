import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {

  const usuario = { 
    nome: "Karoline Rodrigues", 
    idade: "XX", 
    foto: "https://avatars.githubusercontent.com/u/87062322?v=4", 
    github: "https://github.com/karolrdg", 
    linkedin: "https://www.linkedin.com/" 
  }

  return (
    <div>
      <Card usuario={usuario} />
    </div>
  )
}

export default App