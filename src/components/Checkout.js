import React from "react";
import "../css/Checkout.css";

export function Checkout(props) {
    return (
      <div className="checkout">
        <input className="check" type="checkbox" checked={true} disabled={true}></input>
        <label>{props.texto}</label>
      </div>
    );
  }
  