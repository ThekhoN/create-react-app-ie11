import React from "react";
import "./layout-style.css";

class Layout extends React.Component {
  state = {
    hideFilters: false
  };
  render() {
    const buttonText = !this.state.hideFilters
      ? "- Hide Filters"
      : "+ Show Filters";
    const hideFiltersClassName = this.state.hideFilters ? "hide" : "";
    return (
      <div className="page">
        <header className="header">
          <h1>Page Title</h1>
        </header>
        <div className="main-content">
          <nav>
            <ul>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 3</a>
              </li>
              <li>
                <a href="#">Link 4</a>
              </li>
            </ul>
          </nav>
          <main>
            <div className={`filters ${hideFiltersClassName}`}>
              <h2>Filters:</h2>
              <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
                <li>Five</li>
                <li>Six</li>
                <li>Seven</li>
                <li>Eight</li>
                <li>Nine</li>
                <li>Ten</li>
              </ul>
              <button
                className="toggle-filter-visibility"
                onClick={() => {
                  console.log("clicked!!!");
                  this.setState({
                    hideFilters: !this.state.hideFilters
                  });
                }}
              >
                {buttonText}
              </button>
            </div>
            <div className="content overflow-x-auto">
              <h3>Title of Content:</h3>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                praesentium ex ducimus, voluptatibus, velit perferendis rem ad
                dolore vero vitae non? Debitis minima temporibus quis labore
                illum dignissimos sequi aspernatur?
              </p>
              <div style={{ width: "2200px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                praesentium ex ducimus, voluptatibus, velit perferendis rem ad
                dolore vero vitae non? Debitis minima temporibus quis labore
                illum dignissimos sequi aspernatur?
              </div>
            </div>
          </main>
        </div>

        <footer>Ⓒ1k footer 1969</footer>
      </div>
    );
  }
}

export default Layout;
