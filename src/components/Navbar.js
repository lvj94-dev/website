/* Author: Lucas Vincent Johanningmeier */

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav id="id-navbar">
        <Link to="/" class="navbar-element">
          Home
        </Link>
        <Link to="/other" class="navbar-element">
          Other
        </Link>
      </nav>
    </div>
  );
}
