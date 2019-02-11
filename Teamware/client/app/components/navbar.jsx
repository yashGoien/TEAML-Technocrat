import React, { Component } from "react";
import SearchBox from "./searchBox";

class Navbar extends Component {
  state = {
    searchQuery: "",
    projects: [],
    categories: [
      { _id: "1", name: "WebDev" },
      { _id: "2", name: "C++" },
      { _id: "3", name: "Designing" },
      { _id: "4", name: "JavaScript" },
      { _id: "5", name: "Java" },
      { _id: "6", name: "Competetive" },
      { _id: "7", name: "Android" },
      { _id: "8", name: "Python" },
      { _id: "9", name: "Machine Learning" }
    ]
  };

  componentDidMount() {
    const projects = [
      { _id: "1", name: "Eclipse" },
      { _id: "2", name: "Shadow" },
      { _id: "3", name: "Dread" }
    ];
    this.setState({ projects });
  }

  handleSearch = query => {
    this.setState({ searchQuery: query });
    console.log(this.state.searchQuery);
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="i-nav"
      >
        <a className="navbar-brand" id="i-navbrand" href="/">
          TeamWare
        </a>

        <button
          className="navbar-toggler"
          id="i-navtog"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <SearchBox value={searchQuery} onChange={this.handleSearch} />

          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="y"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Category
              </a>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {this.state.categories.map(c => (
                  <a className="dropdown-item" href="/">
                    {c.name}
                  </a>
                ))}
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="y"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Projects
              </a>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {this.state.projects.map(project => (
                  <a className="dropdown-item" href="y">
                    {project.name}
                  </a>
                ))}
              </div>
            </li>
          </ul>

          <a
            className="nav-link nav-item"
            href="/login"
            style={{ color: "grey" }}
          >
            Logout
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
