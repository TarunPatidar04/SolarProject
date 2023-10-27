import React from "react";
import classess from "../Sidebar/Sidebar.module.css";
function Sidebar() {
  return (
    <div className={classess.sidebar}>
      <ul className={classess.sidebarul}>
        <li>
          <a href="/">All About Solar Power</a>
        </li>
        <li>
          <a href="/">Solar Panel Installation</a>
        </li>
        <li>
          <a href="/">Calculating the Budget for Solar Installation</a>
        </li>
        <li>
          <a href="/">A Guide to Finding the Right Solar Installer </a>
        </li>
        <li>
          <a href="/">Steps to Get Started with Solar Energy</a>
        </li>
        <li>
          <a href="/">In Which category Do You Belong to?</a>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
