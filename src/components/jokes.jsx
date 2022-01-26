import React, { useState } from "react";
import { useSelector } from "react-redux";


const Jokes = () => {
  const [jokeContainer, setJokeContainer] = useState("")
  const name = useSelector(state => state.userData.firstName)

  const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        "Accept": "application/json"
      }
    });
    const parsedData = await response.json();
    setJokeContainer(parsedData.joke);
  }

  const getProgrammerJoke = async () => {
    const response = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist,sexist&type=single");
    const parsedData = await response.json();
    setJokeContainer(parsedData.joke);
  }

  return (
    <div>
    <div>{name ? <>Welcome, {name}!</> : <>Welcome!</>}</div>
    <div>Click a button to see a joke!</div>
    <button onClick={getDadJoke}>Dad Joke</button>
    <button onClick={getProgrammerJoke}>Programmer Joke</button>
    <div>{jokeContainer}</div>
    </div>
  );
};

export default Jokes;
