import React from "react";
import "./App.css";

// add state
// const [darkTheme, setDarkTheme] = React.useState(false);

// const [darkTheme, setDarkTheme] = React.useState(getDefaultTheme());

// React.useEffect(() => {
//   localStorage.setItem("dark", JSON.stringify(darkTheme));
// }, [darkTheme]);

// function getDefaultTheme() {
//   const selectedTheme = JSON.parse(localStorage.getItem("dark"));
//   return selectedTheme || false;
// }

function App() {
  return (
    <div className="dark-theme">
      <nav>Toggle button will go here</nav>
      <div className="content">
        <h1>Dark Mode</h1>
        <p>
          Do take a note of the <code>color</code> property in the nav bar.
        </p>
      </div>
    </div>
  );
}

export default App;
