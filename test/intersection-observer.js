const noop = () => null;

function setupIntersectionalObserver({
  root = null,
  rootMargin = "",
  thresholds = [],
  disconnect = noop,
  observe = noop,
  takeRecords = () => [],
  unobserve = noop,
} = {}) {
  class MockIntersectionalObserver {
    constructor() {
      this.root = root;
      this.rootMargin = rootMargin;
      this.thresholds = thresholds;
      this.disconnect = disconnect;
      this.observe = observe;
      this.takeRecords = takeRecords;
      this.unobserve = unobserve;
    }
  }

  Object.defineProperty(window, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: MockIntersectionalObserver,
  });

  return function cleanUp() {
    delete window.IntersectionalObserver;
  };
}

export { setupIntersectionalObserver };
