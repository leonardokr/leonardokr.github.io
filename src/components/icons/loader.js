import React from 'react';

const IconLoader = () => (
  <svg width="400" height="400" viewBox="0 0 100 100">
    <style>
      {`
        .slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
          transform: translateX(-200px);
          opacity: 0;
        }
        .slide-in-right {
          animation: slideInRight 1s ease-out 0.2s forwards;
          transform: translateX(200px);
          opacity: 0;
        }
        @keyframes slideInLeft {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInRight {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}
    </style>
    {/* Background layer */}
    <g id="layer-bg" transform="translate(0.00,0.00)">
      <rect
        style={{
          fill: '#f9f9f9',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 0.173177,
          strokeOpacity: 1,
        }}
        width="100.00"
        height="100.00"
        x="0.00"
        y="0.00"
        rx="11.05"
        ry="10.72"
        id="rect1"
      />
    </g>
    {/* K layer - enters from right */}
    <g id="layer-k" className="slide-in-right" transform="translate(0.00,0.00)">
      <path
        style={{ fill: '#000000', strokeWidth: 0.0307226 }}
        d="m 76.126046,77.32589 h 1.96416 v 1.450456 l -3.172874,3.807449 3.172874,3.898102 v 1.782854 h -1.782853 l -4.623331,-5.711174 z"
        transform="matrix(6.8472934,0,0,6.951046,-450.82979,-525.48562)"
        id="path1"
      />
    </g>
    {/* L layer - enters from left */}
    <g id="layer-l" className="slide-in-left" transform="translate(0.00,0.00)">
      <path
        style={{ fill: '#00c1e1', fillOpacity: 1, strokeWidth: 0.0307226 }}
        d="m 68.384216,77.235236 h 2.749825 v 8.732958 h 2.447648 l 1.813071,2.266339 h -7.040761 z"
        transform="matrix(6.8472934,0,0,6.951046,-450.82979,-525.48565)"
        id="path2"
      />
    </g>
  </svg>
);

export default IconLoader;
