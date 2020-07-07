import React, { useState, useRef } from "react";
import { addStyles, StaticMathField } from "react-mathquill";
import domtoimage from "dom-to-image";

addStyles();

function MathConventor() {
  let [inputlatex, setInputlatex] = useState("\\frac{1}{\\sqrt{2}}\\cdot 2");

  function handleDownload() {
    domtoimage.toPng(document.getElementById("output")).then((dataUrl) => {
      console.log(dataUrl);
      var link = document.createElement("a");
      link.download = "equation.png";
      link.href = dataUrl;
      link.click();
    });
  }

  return (
    <div>
      <div className="card">
        <textarea
          type="Text"
          onChange={(event) => {
            setInputlatex(event.target.value);
          }}
          value={inputlatex}
        />
        <div id="output">
          <StaticMathField>{inputlatex}</StaticMathField>
        </div>

        <p></p>
      </div>
      <input
        type="button"
        value="Download as PNG"
        onClick={handleDownload}
      ></input>
    </div>
  );
}

export default MathConventor;
