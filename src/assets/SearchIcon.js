import * as React from "react";

const SearchIcon = () => {
  return (
    <svg viewBox="0 0 24 24" width="1.5em" height="1.5em">
      <path d="M9 2C5.146 2 2 5.146 2 9s3.146 7 7 7a6.959 6.959 0 004.574-1.719l.426.426V16l5.586 5.586a1.415 1.415 0 002-2L16 14h-1.293l-.426-.426A6.959 6.959 0 0016 9c0-3.854-3.146-7-7-7zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5z" />
    </svg>
  )
}

const MemoSearchIcon = React.memo(SearchIcon);
export default MemoSearchIcon;