import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <li>Ghyczy András</li>
        <li>Kovács Patrik</li>
        <li>Németh-Szegedi Judit</li>
        <li>Szilágyi András</li>
        <li>Turzó Kriszti</li>
      </div>
      <div className="social-media">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>
    </footer>
  );
}
