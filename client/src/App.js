/* Author: Lucas Vincent Johanningmeier */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div>
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}
