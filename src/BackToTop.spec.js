import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";

import BackToTop from "./BackToTop";

describe("<BackToTop />", () => {
  afterEach(jest.clearAllMocks);

  it("should render button correctly", () => {
    render(<BackToTop />);

    expect(screen.getByLabelText("Back to the top of the page")).toBeVisible();
  });

  it("should children correctly", () => {
    render(<BackToTop>children</BackToTop>);

    expect(screen.getByText("children")).toBeVisible();
  });

  it("should call `onClick` if user click on button", () => {
    window.scrollTo = jest.fn();
    const onClick = jest.fn();

    render(<BackToTop onClick={onClick} />);

    fireEvent.click(screen.getByLabelText("Back to the top of the page"));

    expect(window.scrollTo).toHaveBeenCalledTimes(1);
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
