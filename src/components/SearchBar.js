import React from "react";
import SeacrhInput from "./SearchInput";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faTh,
  faCommentDots,
  faBell
} from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onSearchSubmit }) => (
  <nav className="navbar navbar-light bg-light mb-4">
    <div className="container-fluid">
      <img src={logo} alt="logo" />
      <SeacrhInput onSearchSubmit={onSearchSubmit} />
      <ul className="d-flex">
        <li>
          <FontAwesomeIcon icon={faVideo} color="#606060" />
        </li>
        <li>
          <FontAwesomeIcon icon={faTh} color="#606060" />
        </li>
        <li>
          <FontAwesomeIcon icon={faCommentDots} color="#606060" />
        </li>
        <li>
          <FontAwesomeIcon icon={faBell} color="#606060" />
        </li>
      </ul>
    </div>
  </nav>
);

export default SearchBar;
