import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    document.title = "My Page Title";
  }, []); // runs once when component mounts

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default MyComponent;
