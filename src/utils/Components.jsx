import React from "react";
import c from "./Components.module.scss";
import { Link } from "react-router-dom";

const Container = ({ children }) => {
  return <div className={c.container}>{children}</div>;
};

const UniversalLink = ({ text, link, icon }) => {
  return (
    <Link to={link} className={c.navbar__link}>
      {icon}
      <span> {text}</span>
    </Link>
  );
};

const MainLink = ({ text, link, type }) => {
  return (
    <Link
      to={link}
      className={type === "light" ? c.main__link : c.main__link__dark}
    >
      {text}
    </Link>
  );
};

const CardBtnLink = ({ text, icon }) => {
  return (
    <Link className={c.cardBtn__choose}>
      {icon}
      {text}
    </Link>
  );
};

export { Container, UniversalLink, MainLink, CardBtnLink };
