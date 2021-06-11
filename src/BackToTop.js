import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import styles from "./BackToTop.module.css";

function BackToTop(props) {
  const {
    children,
    className,
    onClick,
    alwaysVisible = true,
    showAfterRef,
    ...remainingProps
  } = props;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (alwaysVisible) {
      return;
    }

    if (!showAfterRef || !showAfterRef.current) {
      setIsVisible(true);
      return;
    }

    const { current: target } = showAfterRef;
    let lastYPosition = 0;
    let wasIntersecting = false;

    const handleIntersection = ([entry]) => {
      const { isIntersecting, boundingClientRect } = entry;

      let isScrollingDown = boundingClientRect.y < lastYPosition;

      setIsVisible((isIntersecting || wasIntersecting) && isScrollingDown);
      lastYPosition = boundingClientRect.y;
      wasIntersecting = isIntersecting;
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.5, 1],
    });

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [alwaysVisible, showAfterRef]);

  const handleOnClick = (event) => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (typeof onClick !== "undefined") {
      onClick(event);
    }
  };

  const classNames = [styles.button, !children && styles.noChildren, className]
    .filter(Boolean)
    .join(" ");

  return alwaysVisible || isVisible ? (
    <button
      className={classNames}
      aria-label="Back to the top of the page"
      onClick={handleOnClick}
      {...remainingProps}
    >
      {children}
    </button>
  ) : null;
}

BackToTop.propTypes = {
  children: PropTypes.node,
  /**
   * Element used as a reference to decide when to show the
   * back to top button.
   */
  showAfterRef: PropTypes.shape({
    current: PropTypes.node,
  }),
  className: PropTypes.string,
  onClick: PropTypes.func,
  /**
   * Whether the back to top button is always rendered or not.
   */
  alwaysVisible: PropTypes.bool,
};

export default BackToTop;
