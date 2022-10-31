import React from "react";
import Logo from "src/assets/brand/logo.png";
import { Link } from "react-router-dom";
import "./style/style.scss";

const AppHeader = () => {
  return (
    <div className="row">
      <div className="col-12">
        <header className="header-container">
          <div className="header-content-container hide-sx">
            <img className="logo" src={Logo} loading="lazy" />
          </div>
          <div className="header-menu">
            <Link to="/Home">
              <div>Home</div>
            </Link>
            <Link to="/Favourite">
              <div>Favourite</div>
            </Link>
            <Link to="/WatchList">
              <div>WatchList</div>
            </Link>
          </div>
          <div className="header-login">
            <a href="/search" title="search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path
                  className="svg-c1"
                  d="M23.175 7.15a9.78 9.78 0 0 0-7.108-3.394q-.17-.006-.342-.006a9.9 9.9 0 0 0-6.979 2.883 9.85 9.85 0 0 0-1.483 12.046 1.84 1.84 0 0 1-.264 2.252l-3.68 3.68a1.1 1.1 0 0 0-.317.79.94.94 0 0 0 .288.68c.394.353.992.344 1.375-.02l3.73-3.732c.587-.595 1.505-.712 2.223-.283 1.54.93 3.303 1.42 5.1 1.418a9.88 9.88 0 0 0 7.418-3.358c3.24-3.706 3.256-9.23.04-12.956zm-1.44 11.56a7.89 7.89 0 0 1-12.022.002c-2.48-2.95-2.48-7.258 0-10.21a7.89 7.89 0 0 1 12.025-.001c2.48 2.952 2.477 7.258-.003 10.208z"
                ></path>
              </svg>
            </a>
            <button className="c-btn-login-header" title="Login / Register">
              Login / Register
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default React.memo(AppHeader);
