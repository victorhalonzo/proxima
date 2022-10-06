import React from "react";
import {Checkout} from "./Checkout.js"
import "../css/Second.css";

export function Second() {
  return (
    <div className="second">
      
      <div>
        <img
          src={require(`../images/image_low.png`)}
          alt=""
          
          id="animado"
        />
      </div>
      <div className="cajas">
        <table>
            <tbody>
            <tr>
                <td><Checkout texto="Text 1"/></td>
                <td><Checkout texto="Text 2"/></td>
            </tr>
            <tr>
                <td><Checkout texto="Text 3"/></td>
                <td><Checkout texto="Text 4"/></td>
            </tr>
            <tr>
                <td><Checkout texto="Text 5"/></td>
                <td><Checkout texto="Text 6"/></td>
            </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
}
