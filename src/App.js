/* Author: Lucas Vincent Johanningmeier */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Layout from "./components/layout/Layout/Layout";

// Pages
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Components from "./pages/Components/Components";
import Blog from "./pages/Blog/Blog";
import Login from "./pages/Login/Login";

// Page "Projects"
import CssPlayground from "./pages/Projects/CssPlayground/CssPlayground";
import Games from "./pages/Projects/Games/Games";
import Maths from "./pages/Projects/Maths/Maths";

export default function App() {
  console.log("App()");

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="components" element={<Components />} />

            <Route path="projects" element={<Projects />}>
              <Route path="css-playground" element={<CssPlayground />} />
              <Route path="games" element={<Games />} />
              <Route path="maths" element={<Maths />} />
            </Route>

            <Route path="blog" element={<Blog />} />

            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
