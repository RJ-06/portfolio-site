import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useNavigate } from "react-router";
import App from "./App.jsx";
import "./index.css";

function RedirectHandler({ children }) {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Handle redirect from 404.html
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      const basePath = "/portfolio-site/";
      const path = redirect.replace(window.location.origin + basePath, "");
      if (path && path !== "/") {
        navigate(path);
      }
    }
  }, [navigate]);
  
  return children;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio-site/">
      <RedirectHandler>
        <App />
      </RedirectHandler>
    </BrowserRouter>
  </StrictMode>
);
