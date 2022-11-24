import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import styles from "./IconLink.module.scss";

const IconLink = ({
  text,
  img,
  to,
  imgWidth,
  link = true, // if link is true, then it will be a router nav button
  onClick,
  placeholderText,
  dataTestId,
}) => {
  const active = location.pathname.includes(to);
  console.log(location.pathname, to, active);
  return (
    <div className={styles.IconLinkConatiner}>
      {link ? (
        <RouterNavLink
          to={`/${to}`}
          className={active ? styles.picTextLinkActive : styles.picTextLink} // set background color to red when link is active
          data-testid={dataTestId}
        >
          <img
            src={img}
            alt=""
            className={styles.linkImage}
            placeholder={placeholderText ? placeholderText : `${to}Image`}
            width={imgWidth}
          />
          <p className={styles.linkText}>{(text && text) || ""}</p>
        </RouterNavLink>
      ) : (
        <div
          className={active ? styles.picTextLinkActive : styles.picTextLink}
          onClick={onClick}
          style={{ flexDirection: "row" }}
          data-testid={dataTestId}
        >
          <img
            src={img}
            alt=""
            className={styles.linkImage}
            placeholder={`${to}Image`}
            width={imgWidth}
          />
          {text && <p className={styles.linkText}>{text}</p>}
        </div>
      )}
    </div>
  );
};

export default IconLink;
