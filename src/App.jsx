import React, { useState } from "react";
import Home from "./components/Home";
import PeopleList from "./components/PeopleList";
import "./App.css";
const App = () => {
  const [started, setStarted] = useState(false);

  return (
    <div >
      {!started ? (
        <Home onStart={() => setStarted(true)} />
      ) : (
        <PeopleList onBack={() => setStarted(false)} />
      )}
    </div>
  );
};

export default App;
