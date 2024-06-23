import React from "react";
import Search from "./search";

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

// Ensure Nav is defined before using it
function Navi({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}

const Nav = ({ movies }) => {
  return (
    <Navi>
      <Logo />
      <Search />
      <NumResults movies={movies} />
    </Navi>
  );
};

export default Nav;
