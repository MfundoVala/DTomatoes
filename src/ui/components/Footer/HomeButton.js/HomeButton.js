import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import styles from "./HomeButton.module.scss";
import IconLink from "../../IconLink/IconLink";

const HomeButton = ({ text, img, to, imgWidth, placeholderText, testid }) => {
  return (
    <RouterNavLink
      to={`/${to}`}
      className={styles.HomeButton}
      data-testid={testid}
    >
      <IconLink
        img={img}
        text={text}
        to={`/${to}`}
        imgWidth={imgWidth}
        link={false}
        placeholderText={placeholderText}
      />
    </RouterNavLink>
  );
};

export default HomeButton;
