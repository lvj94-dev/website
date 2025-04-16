/* Author: Lucas Vincent Johanningmeier */

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav id="id-navbar">
        <Link to="/">Home</Link>
        <Link to="/other">Other</Link>
      </nav>
    </div>
  );
}
