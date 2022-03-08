import React, { useState } from "react";

function App() {
  const [headingTxt, setHeadingTxt] = useState("Hello");

  function clickHandler() {
    setHeadingTxt("Submitted");
    setTimeout(clickHandled, 2000);
  }

  function clickHandled() {
    setHeadingTxt("Hello");
  }

  const [buttonBG, setButtonBG] = useState({ backgroundColor: "white" });

  function mouseOver(e) {
    // e.target.style.backgroundColor = "black";
    setButtonBG({ backgroundColor: "black" });
  }
  function mouseOut(e) {
    // e.target.style.backgroundColor = "white";
    setButtonBG({ backgroundColor: "white" });
  }

  return (
    <div className="container">
      <h1>{headingTxt}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={buttonBG}
        onClick={clickHandler}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
