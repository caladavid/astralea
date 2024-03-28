import * as React from "react"
const SpinnerSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="3em"
    height="3em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g>
      <path fill="currentColor" d="M11 1h2v5h-2z" opacity={0.14} />
      <path
        fill="currentColor"
        d="m16.634 1.974 1.732 1-2.5 4.33-1.732-1z"
        opacity={0.29}
      />
      <path
        fill="currentColor"
        d="m21.026 5.634 1 1.732-4.33 2.5-1-1.732z"
        opacity={0.43}
      />
      <path fill="currentColor" d="M23 11v2h-5v-2z" opacity={0.57} />
      <path
        fill="currentColor"
        d="m22.026 16.634-1 1.732-4.33-2.5 1-1.732z"
        opacity={0.71}
      />
      <path
        fill="currentColor"
        d="m18.366 21.026-1.732 1-2.5-4.33 1.732-1z"
        opacity={0.86}
      />
      <path fill="currentColor" d="M13 23h-2v-5h2z" />
      <animateTransform
        attributeName="transform"
        calcMode="discrete"
        dur="0.75s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"
      />
    </g>
  </svg>
)
export default SpinnerSVG
