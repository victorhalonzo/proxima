import React from "react";
import "../css/First.css";

export function First() {
  return (
    <div className="first">
      <div className="wave">
        <svg
          className="svg_css"
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
        >
          <path
            className="path_css"
            d="M208.08,0.00 C150.96,95.23 262.02,75.98 240.69,152.47 L0.00,150.00 L0.00,0.00 Z"
          ></path>
        </svg>
      </div>
      <div className="wave2">
        <svg
          className="svg2_css"
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          
        >
          <path
            className="path2_css"
            d="M235.04,-2.44 C178.04,102.14 298.81,87.34 266.64,155.44 L0.00,150.00 L0.00,0.00 Z"
          ></path>
        </svg>
      </div>
      <div>
        <h1>
          Unlock nearshore resources <br></br> & insurtech capabilities{" "}
        </h1>
        <h2>We deliver transformation</h2>
        <button className="boton2">
          Discover How <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div>
        <img src={require(`../images/image_top.png`)} alt="" id="animado" />
      </div>
    </div>
  );
}
