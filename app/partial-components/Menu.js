import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from "../context/AppContext";

const Menu = () => {
  const context = useContext(AppContext);
  return (
    <ul>
      <li className="link">
        <NavLink tabIndex="2" exact activeClassName="active" to="/">Home</NavLink>
      </li>
      <li className="link">
        <NavLink tabIndex="3" activeClassName="active" to="/scheduler">Scheduler</NavLink>
      </li>
      <li className="link">
        <NavLink tabIndex="3" activeClassName="active" to="/tree-list">Tree</NavLink>
      </li>
      <li className="link">
        <NavLink tabIndex="3" activeClassName="active" to="/color-picker">Picker</NavLink>
      </li>
      <li className="link">
        <NavLink tabIndex="3" activeClassName="active" to="/color-gradient">Gradient</NavLink>
      </li>
      <li className="link">
        <NavLink tabIndex="3" activeClassName="active" to="/color-palette">Palette</NavLink>
      </li>
      <li className="link">
        <NavLink tabIndex="3" activeClassName="active" to="/pager">Pager</NavLink>
      </li>
      <li className="link">
        <NavLink tabIndex="3" activeClassName="active" to="/grid">Grid</NavLink>
      </li>
      <li className="menu">
        <span className="k-icon k-i-menu"
          onKeyPress={event => {
            if (event.key === "Enter") {
              context.toggleSidenav(!context.navOpen);
            }
          }}
          onClick={() => {
            context.toggleSidenav(!context.navOpen);
          }}
        ></span>
      </li>
    </ul>
  )
}

export default Menu;