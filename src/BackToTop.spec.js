/* eslint-disable react/prop-types */

import React, { useRef } from "react";
import { screen, render, fireEvent } from "@testing-library/react";

import BackToTop from "./BackToTop";

import { setupIntersectionalObserver } from "../test/intersection-observer";

function WrapperForBackToTop({ alwaysVisible = false }) {
  const ref = useRef();

  return (
    <div>
      <div>Space 1</div>
      <div ref={ref}>Space 2</div>
      <BackToTop alwaysVisible={alwaysVisible} showAfterRef={ref} />
    </div>
  );
}

describe("<BackToTop />", () => {
  afterEach(jest.clearAllMocks);

  it("should render button correctly", () => {
    render(<BackToTop />);

    expect(screen.getByLabelText("Back to the top of the page")).toBeVisible();
  });

  it("should render children correctly", () => {
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

  it("should create intersection observer", () => {
    const observerMock = jest.fn();

    const cleanUp = setupIntersectionalObserver({
      observe: observerMock,
    });

    render(<WrapperForBackToTop />);

    expect(observerMock).toHaveBeenCalledTimes(1);

    cleanUp();
  });

  it("should remove intersection observer", () => {
    const unobserveMock = jest.fn();

    const cleanUp = setupIntersectionalObserver({
      unobserve: unobserveMock,
    });

    const { unmount } = render(<WrapperForBackToTop />);

    unmount();

    expect(unobserveMock).toHaveBeenCalledTimes(1);

    cleanUp();
  });

  it("should not create intersection observer if it is always visible", () => {
    const observerMock = jest.fn();

    const cleanUp = setupIntersectionalObserver({
      observe: observerMock,
    });

    render(<WrapperForBackToTop alwaysVisible />);

    expect(observerMock).not.toHaveBeenCalled();
    expect(screen.getByLabelText("Back to the top of the page")).toBeVisible();

    cleanUp();
  });

  it("should not create intersection observer if it is not always visible but has no reference element", () => {
    const observerMock = jest.fn();

    const cleanUp = setupIntersectionalObserver({
      observe: observerMock,
    });

    render(<BackToTop alwaysVisible={false} />);

    expect(observerMock).not.toHaveBeenCalled();
    expect(screen.getByLabelText("Back to the top of the page")).toBeVisible();

    cleanUp();
  });
});
