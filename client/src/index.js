/* Author: Lucas Vincent Johanningmeier */

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import AuthProvider from "./context/AuthContext";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <div>
    <AuthProvider>
      <App />
    </AuthProvider>
  </div>
);
