import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    <a key={1} href="#home">home</a>
    <a key={2} href="#about">about</a>
    <a key={3} href="#projectlist">project list</a>
    </nav>;
}

export default NavBar;
