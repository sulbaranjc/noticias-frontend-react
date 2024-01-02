import React, { useEffect, useRef } from 'react';
import './InfiniteScrollBanner.css';

const InfiniteScrollBanner = () => {
  const scrollerInnerRef = useRef(null);

  useEffect(() => {
    const scrollerInner = scrollerInnerRef.current;
    // Duplicar el contenido para que haya suficiente para desplazarse
    scrollerInner.innerHTML += scrollerInner.innerHTML;
  }, []);

  return (
    <div className="scroller" data-animated="true">
      <div className="scroller__inner" ref={scrollerInnerRef}>
        <ul className="tag-list">
          <li>BTC: $42,346</li>
          <li>ETH: $2,302.96</li>
          <li>USD: $1.00</li>
          <li>BNB: $316.55</li>
          <li>SOL: $103.66</li>
        </ul>
      </div>
    </div>
  );
};

export default InfiniteScrollBanner;
