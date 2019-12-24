import React from "react";

function Instructions({ children }) {
  return (
    <div style={{ height: 80, clear: "both", paddingTop: 5, textAlign: "center" }}>
        <h3>Click on an image to earn points, but don't click on any more than once!</h3>
      {children}
    </div>
  );
}

export default Instructions;