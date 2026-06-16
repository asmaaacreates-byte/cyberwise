import React from 'react';

interface CyberWiseLogoProps {
  size?: number;
  className?: string;
  withBg?: boolean;
}

export function CyberWiseLogo({ size = 44, className = '', withBg = true }: CyberWiseLogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none transition-transform duration-300 group-hover:scale-105 ${className}`}
    >
      <defs>
        {/* Soft, rich ambient purple background gradient replicating the waving silk */}
        <linearGradient id="cyberwise-bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e003a" />
          <stop offset="35%" stopColor="#3d0c75" />
          <stop offset="70%" stopColor="#25024d" />
          <stop offset="100%" stopColor="#100024" />
        </linearGradient>

        {/* Ambient background glow effect */}
        <radialGradient id="cyberwise-silk-glow" cx="60%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#8a2be2" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#5b00b3" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        {/* Vector stroke shadow */}
        <filter id="logo-drop-shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#8200ff" floodOpacity="0.35" />
        </filter>
      </defs>

      {withBg && (
        <>
          {/* Main rounded container background */}
          <rect 
            width="200" 
            height="200" 
            rx="52" 
            fill="url(#cyberwise-bg-gradient)" 
          />
          
          {/* Silk wavy overlay effect using gradient overlay */}
          <rect 
            width="200" 
            height="200" 
            rx="52" 
            fill="url(#cyberwise-silk-glow)" 
          />
          
          {/* Subtle glossy border */}
          <rect 
            x="1.5" 
            y="1.5" 
            width="197" 
            height="197" 
            rx="50.5" 
            stroke="white" 
            strokeOpacity="0.08" 
            strokeWidth="3"
            fill="none" 
          />
        </>
      )}

      {/* Main logo mark group with glowing shadow */}
      <g filter="url(#logo-drop-shadow)">
        {/* Outer stylized C shaped curve - Sleek flat-ended thick line */}
        <path 
          d="M 148,65 C 130,52 108,46 87,49 C 54,54 32,84 35,117 C 37,137 49,153 66,160 C 82,168 103,165 118,155 C 122,152 125,147 122,143 C 119,139 114,138 110,140 C 98,148 83,150 71,145 C 57,139 49,126 48,111 C 46,87 63,66 87,62 C 102,60 118,65 130,73 C 133,76 138,75 141,72 C 144,69 146,67 148,65 Z" 
          fill="white" 
        />

        {/* Center continuous "w" shape connected to "i" */}
        <path 
          d="M 82,112 L 102,152 Q 104,156 108,154 L 126,112 Q 128,107 132,112 L 148,145 C 149,147 151,148 153,147 C 158,143 162,114 162,112 Q 163,107 167,109 L 182,115" 
          stroke="white" 
          strokeWidth="15" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none" 
        />

        {/* Slanted dot/accent/line representing the "i" - perfectly matching the angled square */}
        <path 
          d="M 166,74 L 178,79 C 180,80 181,83 180,85 L 176,93 C 175,95 172,96 170,95 L 158,90 C 156,89 155,86 156,84 L 160,76 C 161,74 164,73 166,74 Z" 
          fill="white" 
        />
      </g>
    </svg>
  );
}
