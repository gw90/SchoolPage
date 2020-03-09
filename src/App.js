import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar.js";
import MainInfo from "./maininfo.js";
import Reviews from "./reviews.js";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://bulma.io/css/bulma-docs.min.css?v=202002231419"
      />

      <Navbar />
      <MainInfo />
      <Reviews />
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            All quotes here are fiction and constitute both libel and slander,
            etc. (Or whatever the humor section in the spectator uses as a
            disclaimer.) Learn more about how I made this page{" "}
            <a href="how.html">here</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
