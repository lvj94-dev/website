/* Author: Lucas Vincent Johanningmeier */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import CssPlayground from "./pages/CssPlayground/CssPlayground";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Other from "./pages/Other/Other";

// Subpages "CssPlayground"
import BoxModel from "./pages/CssPlayground/BoxModel/BoxModel";
import TextAndFont from "./pages/CssPlayground/TextAndFont/TextAndFont";

// Components
import Navbar from "./components/layout/Navbar/Navbar";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/other" element={<Other />} />

          <Route path="/css-playground" element={<CssPlayground />}>
            <Route path="text-and-font" element={<TextAndFont />} />
            <Route path="box-model" element={<BoxModel />} />
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}
