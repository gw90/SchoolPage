import React from "react";
import logo from "./logo.svg";
import "./App.css";

/* taken from bulma.io */

function Navbar() {
  return (
    <div className="nav">
      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <a class="navbar-item" href="">
            <h1 class="title is-3">Stuy Student Reviews</h1>
          </a>
          <div
            class="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="https://studentreviews.stuy.edu/">
              Home
            </a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a
                    class="button is-primary"
                    href="https://github.com/jgthms/bulma/releases/download/0.8.0/bulma-0.8.0.zip"
                  >
                    <span>Sign In</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
