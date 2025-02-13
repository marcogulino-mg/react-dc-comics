import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//IMPORT MAIN STRUCTURE
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

//Array Objects elementi menu centralizzato
const menuHeader = [
  {
    id: 1,
    text: "CHARACTERS",
    url: "#",
    current: true,
  },
  {
    id: 2,
    text: "COMICS",
    url: "#",
    current: false,
  },
  {
    id: 3,
    text: "MOVIES",
    url: "#",
    current: false,
  },
  {
    id: 4,
    text: "TV",
    url: "#",
    current: false,
  },
  {
    id: 5,
    text: "GAMES",
    url: "#",
    current: false,
  },
  {
    id: 6,
    text: "COLLECTIBLES",
    url: "#",
    current: false,
  },
  {
    id: 7,
    text: "VIDEOS",
    url: "#",
    current: false,
  },
  {
    id: 8,
    text: "FANS",
    url: "#",
    current: false,
  },
  {
    id: 9,
    text: "NEWS",
    url: "#",
    current: false,
  },
  {
    id: 10,
    text: "SHOP",
    url: "#",
    current: false,
  },
];

function App() {
  return (
    <>
      <Header menuHeader={menuHeader} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
