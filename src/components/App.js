import React, { useState } from "react";
import Header from "./Header";
import DarkMode from "./DarkMode";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App${darkMode ? "_dark" : ""}`}>
      <Header isDarkMode={darkMode} />
      <h1>Welcome to Lambda School</h1>
      <DarkMode value={darkMode} setValue={setDarkMode} />
    </div>
  );
}

export default App;
