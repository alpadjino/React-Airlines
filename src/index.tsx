import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import '@styles/styles.css'

const rootElement = document.getElementById("root") as HTMLElement;
createRoot(rootElement).render(<App />);
