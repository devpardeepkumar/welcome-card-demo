import React, { useState } from "react";
import "./App.css";

// Background color constants for maintainability and type safety
const COLORS = {
  DEFAULT: "white",
  RED: "red",
  GREEN: "green",
} as const;

type PageBg = typeof COLORS[keyof typeof COLORS];

function App() {
  const [title, setTitle] = useState("");
  
  // Controls the page background color based on user action
  const [pageBg, setPageBg] = useState<PageBg>(COLORS.DEFAULT);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className="page-wrapper" style={{ backgroundColor: pageBg }}>
      <div className="login-card">
        {/* Dynamic header - empty title just shows "Welcome to" */}
        <h1 className="title">Welcome to {title}</h1>

        {/* Accessible input with hidden label */}
        <label htmlFor="title-input" className="sr-only">
          Page title
        </label>
        <input
          id="title-input"
          type="text"
          placeholder="Set Title ..."
          value={title}
          onChange={handleTitleChange}
          className="title-input"
        />

        <div className="actions">
          <button
            type="button" // Explicit type to prevent form behavior
            onClick={() => setPageBg(COLORS.RED)}
            className="action-btn"
          >
            Set Red Background
          </button>

          <button
            type="button"
            onClick={() => setPageBg(COLORS.GREEN)}
            className="action-btn"
          >
            Set Green Background
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;