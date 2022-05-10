import * as React from "react";

const SpinnerIcon = () => {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.942 12c.584 0 1.063.475 1.011 1.057a12 12 0 1 1-6.791-11.89c.527.251.693.904.396 1.408-.297.503-.944.665-1.476.423a9.884 9.884 0 1 0 5.745 10.058c.063-.58.53-1.056 1.115-1.056Z" fill="#BDBDBD" />
    </svg>
  )
}

const MemoSpinnerIcon = React.memo(SpinnerIcon);
export default MemoSpinnerIcon;