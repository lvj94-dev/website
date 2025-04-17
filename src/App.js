/* Author: Lucas Vincent Johanningmeier */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/Homepage/Homepage";
import Other from "./pages/Other/Other";
import CssPlayground from "./pages/CssPlayground/CssPlayground";

// Subpages
import TextAndFont from "./pages/CssPlayground/subpages/TextAndFont";
import BoxModel from "./pages/CssPlayground/subpages/BoxModel";

import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/other" element={<Other />} />

          <Route path="/css-playground" element={<CssPlayground />}>
            <Route path="text-and-font" element={<TextAndFont />} />
            <Route path="box-model" element={<BoxModel />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
