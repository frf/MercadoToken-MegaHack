import React, { useLayoutEffect } from 'react';

function ScrollToTop() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default ScrollToTop;
