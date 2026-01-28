import React, { useState } from "react";

function ToggleText() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <p
        style={{
          color: isDark ? "#fff" : "#000",
          backgroundColor: isDark ? "#000" : "#fff",
          padding: "10px",
        }}
      >
        This text changes theme
      </p>

      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default ToggleText;
