import { styled } from "goober";
import React, { forwardRef } from "react";

import SearchIcon from "../assets/SearchIcon";

export const SelectInput = React.forwardRef(
  ({ value, onChange, options = [], limit = 3 }, ref) => {
    return (
      <Wrapper>
        {!options.length && <SearchIcon />}
        {options.map(({ name, hex }, i) => (
          <Option key={i}>
            {name}
          </Option>
        ))}
        {options.length < limit && (
          <TextInput
            ref={ref}
            autoFocus
            value={value}
            onChange={(e) => onChange(e.target.value)}
            type="text"
            placeholder="Select..."
          />
        )}
      </Wrapper>
    );
  }
);

const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  position: relative;
`;

const TextInput = styled("input", forwardRef)`
  line-height: 26px;
`;

const Option = styled("button")`
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  align-items: center;
`;
