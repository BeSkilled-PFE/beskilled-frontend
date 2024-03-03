import React, { useEffect } from "react";
import Header from './components/header/Header.js';
import './components/header/Header.css';

var headers = {"Content-Type": "application/json"}

function App() {
  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/", {
      method: "GET",
      mode: "no-cors",
      headers: headers
    });
    console.log(res)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      {/* Autres composants et contenu ici */}
    </div>
  );
}
  export default App;