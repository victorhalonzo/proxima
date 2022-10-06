import React from "react";
import "../css/Bar.css";
import "../js/menu.js";

export function Bar() {

  function contact() {
    var today = new Date();

    var now = today.toLocaleTimeString();

    var url = "https://webhook.site/a454b07e-ac58-44e8-b801-32b260acba56";
    var data = { name: "Victor Alonzo", local_time: now, ip: "200.24.153.202" };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({ "Content-type": "application/json" }),
      mode: "no-cors",
      cache: "default"
    })
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
    .then(alert("Contact sent."));
  }

  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <ul className="menu-logo">
            <li>
              <a>
                <img
                  src={require(`../images/Proxima_Logo.png`)}
                  alt=""
                  id="animado"
                />
                PROXIMA
              </a>
            </li>
          </ul>
        </div>
        <ul className="menu">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Nearshoring</a>
            <i className="fa-solid fa-chevron-down"></i>
          </li>
          <li>
            <a href="#">Insurtech</a>
            <i className="fa-solid fa-chevron-down"></i>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <button className="boton" onClick={() => contact()}>
              Contact Us
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
