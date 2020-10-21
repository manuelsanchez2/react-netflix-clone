import React from "react";
import "./App.css";
import requests from "./api/requests";
import Row from "./components/Row";

function App() {
  return (
    <div className="App">
      <h1>Netflix Clone</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
