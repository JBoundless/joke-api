import "./styles.css";
import React, { useState } from "react";
import Axios from "axios";

export default function App() {
  const [joke, setJoke] = useState("");
  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then(
      (response) => {
        setJoke(response.data.setup + "..." + response.data.punchline);
      }
    );
  };
  return (
    <div className="App">
      <h1>The Joke's On You</h1>
      <button onClick={getJoke}>Get joke right now</button>
      <p id="joke">{joke}</p>
    </div>
  );
}
