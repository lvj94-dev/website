/* Author: Lucas Vincent Johanningmeier */

// Router
import { BrowserRouter as Router } from "react-router-dom";

// Routes
import AppRoutes from "./routes/AppRoutes";

/**
 * @component
 * @function App
 *
 * @description
 * Root component that sets up the React Router context and renders the application routes.
 *
 * @returns {JSX.Element}
 */
export default function App() {
  return (
    <div>
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}
