import React from "react";

const Header = props => {
  return (
    <nav className="navbar navbar-light bg-light header">
      <a className="navbar-brand">Calendar-todo</a>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search Todo"
          aria-label="Search"
        />
        <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Header;
