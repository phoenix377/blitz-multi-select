import { styled } from "goober";
import React, { forwardRef } from "react";

import CloseIcon from "../assets/CloseIcon";
import MemoSearchIcon from "../assets/SearchIcon";
import { Option } from "./Select";

export const SelectInput = React.forwardRef(
  ({ value, onChange, options = [], limit = 3 }, ref) => {
    return (
      <Wrapper>
        {!options.length && <SearchIcon />}
        {options.map(({ name, hex }, i) => (
          <Option key={i} hex={hex}>
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
  height: var(--sp-16);
  background-color: var(--shade6);
`;

const TextInput = styled("input", forwardRef)`
  line-height: 26px;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

const SearchIcon = styled(MemoSearchIcon)`
  margin-top: auto;
  margin-bottom: auto;
`;
