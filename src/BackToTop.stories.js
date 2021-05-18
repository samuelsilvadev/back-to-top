import React from "react";

import BackToTop from "./BackToTop";

export const Component = () => (
  <section style={{ height: "150vh" }}>
    <h1>Scrolls Down</h1>
    <BackToTop />
  </section>
);

export default {
  title: "Back to top",
  component: Component,
};
