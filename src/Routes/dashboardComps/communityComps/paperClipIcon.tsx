import * as React from "react"

const PaperClip = (props:any) => (
  <svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m13.102 6.266-6.01 6.01a3.5 3.5 0 0 1-4.95-4.95l6.01-6.01a2.333 2.333 0 1 1 3.3 3.3l-5.775 5.775a1.167 1.167 0 0 1-1.65-1.65l5.068-5.068"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default PaperClip
