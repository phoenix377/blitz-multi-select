import * as React from "react";

function CloseIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 8 8" {...props}>
      <path
        d="M7 1L1 7m0-6l6 6"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoCloseIcon = React.memo(CloseIcon);
export default MemoCloseIcon;
