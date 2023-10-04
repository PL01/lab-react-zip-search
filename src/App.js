import React from "react";
import "./App.css";

async function cityAPI() {
  const cityResponse = await fetch("https://ctp-zip-code-api.onrender.com/");
  const cityInformation = await cityResponse.json();
  console.log(cityInformation);
}

function City(props) {
  return(
  <div id="zipBox">
    <div className="zipTitle">
      CITY, STATE
    </div>
    <section className="zipDetails">
      <ul>
        <li>State</li>
        <li>Location</li>
        <li>Population</li>
        <li>Total Wages</li>
      </ul>
    </section>
  </div>);
}

function ZipSearchField(props) {
  return <div>This is the ZipSearchField component</div>;
}

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Zip Code Search</h1>
      </div>
      <div className="mx-auto" style={{ maxWidth: 400 }}>
        <ZipSearchField />
        <div>
          <City />
          <City />
        </div>
      </div>
    </div>
  );
}

export default App;
