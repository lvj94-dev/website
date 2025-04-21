/* Author: Lucas Vincent Johanningmeier */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";

export default function App() {
  console.log("App()");

  return (
    <div>
      <Router>
        {/*<Routes>
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
        </Routes>*/}
        <AppRoutes />
      </Router>
    </div>
  );
}
