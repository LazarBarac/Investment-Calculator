import React from "react";
import logo from "../assets/investment-calculator-logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header id="header">
      <h1>Investment Calculator</h1>
      <img src={logo} alt="logo" />
    </header>
  );
}
