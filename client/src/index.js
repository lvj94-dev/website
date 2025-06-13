/* Author: Lucas Vincent Johanningmeier */

// React
import React from "react";
import ReactDOM from "react-dom/client";

// Components
import App from "./App";

// Context
import AuthProvider from "./context/AuthContext";

/**
 * @file index.js
 *
 * @description
 * Entry point of the React application. Initializes and renders the root component 'App'
 * within the 'AuthProvider' context, and mounts it tot the DOM.
 */

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <div>
    <AuthProvider>
      <App />
    </AuthProvider>
  </div>
);
