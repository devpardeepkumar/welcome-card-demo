import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [pageBg, setPageBg] = useState("white");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className="page-wrapper" style={{ backgroundColor: pageBg }}>
      <div className="login-card">
        <h1 className="title">
          Welcome to {title.trim() === "" ? "" : title}
        </h1>

        <input
          type="text"
          placeholder="Set Title ..."
          value={title}
          onChange={handleTitleChange}
          className="title-input"
        />

        <div className="actions">
          <button
            onClick={() => setPageBg("red")}
            className="action-btn red-btn"
          >
            Set Red Background
          </button>

          <button
            onClick={() => setPageBg("green")}
            className="action-btn green-btn"
          >
            Set Green Background
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;