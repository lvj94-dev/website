/* Author: Lucas Vincent Johanningmeier */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Other from "./pages/Other/Other";
import CssPlayground from "./pages/CssPlayground/CssPlayground";

import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/other" element={<Other />} />
          <Route path="/css-playground" element={<CssPlayground />} />
        </Routes>
      </Router>
    </div>
  );
}
