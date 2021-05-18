import React from "react";
import PropTypes from "prop-types";

import styles from "./BackToTop.module.css";

function BackToTop(props) {
  const { children, className, onClick, ...remainingProps } = props;

  const handleOnClick = (event) => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (typeof onClick !== "undefined") {
      onClick(event);
    }
  };

  const classNames = [styles.button, !children && styles.noChildren, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classNames}
      aria-label="Back to the top of the page"
      onClick={handleOnClick}
      {...remainingProps}
    >
      {children}
    </button>
  );
}

BackToTop.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default BackToTop;
