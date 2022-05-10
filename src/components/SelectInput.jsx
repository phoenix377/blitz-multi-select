import { styled } from "goober";
import React, { forwardRef } from "react";

import MemoCloseIcon from "../assets/CloseIcon";
import MemoSearchIcon from "../assets/SearchIcon";
import { Option } from "./Select";

export const SelectInput = React.forwardRef(
  ({ value, onChange, onClear, onRemove, options = [], limit = 3 }, ref) => {
    return (
      <Wrapper>
        {!options.length && <SearchIcon />}
        {options.map(({ name, hex }, i) => (
          <Option key={i} hex={hex}>
            {name}
            <RemoveButton onClick={() => onRemove(i)}>
              <OptionCloseButton />
            </RemoveButton>
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
        {options.length > 0 && (
          <ClearButton onClick={onClear}>
            <MemoCloseIcon />
          </ClearButton>
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

const ClearButton = styled("button")`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
`;

const SearchIcon = styled(MemoSearchIcon)`
  margin-top: auto;
  margin-bottom: auto;
`;

const OptionCloseButton = styled(MemoCloseIcon)`
  width: 100%;
  height: 100%;
`;

const RemoveButton = styled("button")`
  width: var(--sp-4);
  height: var(--sp-4);
  border-radius: 50%;
`;
