import React, { useState } from "react";

function InputPreview() {
  const [text, setText] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Input Preview</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Preview: {text}</p>
    </div>
  );
}

export default InputPreview;
