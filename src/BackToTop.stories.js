import React, { useRef } from "react";

import BackToTop from "./BackToTop";

export const Default = () => (
  <section style={{ height: "150vh" }}>
    <h1>Scrolls Down</h1>
    <BackToTop />
  </section>
);

export const WithVisibilityControlOnTop = () => {
  const referenceRef = useRef();

  return (
    <section style={{ height: "200vh" }}>
      <h1>Scrolls Down</h1>
      <div
        ref={referenceRef}
        style={{
          height: "50vh",
          border: "5px solid red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <h2>Should appear when this is visible</h2>
      </div>
      <div
        style={{
          height: "150vh",
          border: "5px solid blue",
        }}
      />
      <BackToTop alwaysVisible={false} showAfterRef={referenceRef} />
    </section>
  );
};

export const WithVisibilityControlAtMiddle = () => {
  const referenceRef = useRef();

  return (
    <section style={{ height: "200vh" }}>
      <h1>Scrolls Down</h1>
      <div
        style={{
          height: "150vh",
          border: "5px solid blue",
          marginBottom: "10px",
        }}
      />
      <div
        ref={referenceRef}
        style={{
          height: "50vh",
          border: "5px solid red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h2>Should appear when this is visible</h2>
      </div>
      <div
        style={{
          height: "150vh",
          border: "5px solid black",
        }}
      />
      <BackToTop alwaysVisible={false} showAfterRef={referenceRef} />
    </section>
  );
};

export const WithVisibilityControlOnBottom = () => {
  const referenceRef = useRef();

  return (
    <section style={{ height: "200vh" }}>
      <h1>Scrolls Down</h1>
      <div
        style={{
          height: "150vh",
          border: "5px solid blue",
          marginBottom: "10px",
        }}
      />
      <div
        ref={referenceRef}
        style={{
          height: "50vh",
          border: "5px solid red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Should appear when this is visible</h2>
      </div>
      <BackToTop alwaysVisible={false} showAfterRef={referenceRef} />
    </section>
  );
};

export default {
  title: "Back to top",
  component: BackToTop,
};
