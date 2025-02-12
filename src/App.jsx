import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//IMPORT MAIN STRUCTURE
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
