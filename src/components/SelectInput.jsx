import { styled } from "goober";
import React, { forwardRef } from "react";

import MemoCloseIcon from "../assets/CloseIcon";
import MemoSearchIcon from "../assets/SearchIcon";
import { Option } from "./Select";

export const SelectInput = React.forwardRef(
  ({ value, onChange, onClear, onRemove, options = [], limit = 3 }, ref) => {
    return (
      <Wrapper isActive={!!value || !!options.length}>
        {!options.length && <SearchIcon />}
        {options.map(({ name, hex }, i) => (
          <Option
            key={i}
            hex={hex}
            className="type-button-text"
          >
            {name}
            <RemoveButton onClick={() => onRemove(i)}>
              <OptionCloseButton fill={hex} />
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
          <ClearButton isActive={!!options.length} onClick={onClear}>
            <P className="type-form--button">Clear</P>
            <MemoCloseIcon />
          </ClearButton>
        )}
      </Wrapper>
    );
  }
);

const Wrapper = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  padding: 0 var(--sp-2_5);
  height: var(--sp-16);
  overflow: hidden;
  border-radius: var(--sp-2);
  background-color: ${({ isActive }) =>
    isActive ? `var(--shade0)` : `var(--shade6)`};
  &:hover {
    background-color: ${({ isActive }) => !isActive && `var(--shade5)`};
  }
  & > svg {
    fill: ${({ isActive }) => isActive && `var(--shade3)`};
  }
  &:focus-within {
    background-color: var(--shade0);
    & > svg {
      fill: var(--shade3);
    }
  }
`;

const TextInput = styled("input", forwardRef)`
  line-height: 26px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  &:not(:placeholder-shown) {
    color: var(--shade3);
    & ~ svg {
      fill: var(--shade3);
    }
    & ~ button {
      & > svg > path {
        stroke: var(--shade3);
      }
    }
  }
  &::placeholder {
    color: var(--shade2);
  }
  &:focus {
    color: var(--shade3);
    outline: none;
    & ~ button {
      & > svg > path {
        stroke: var(--shade3);
      }
    }
  }
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
  padding: var(--sp-4);
  gap: var(--sp-4);
  color: var(--shade1);
  background: transparent;
  & > svg > path {
    stroke: ${({ isActive }) => isActive && "var(--shade3)"};
  }
  &:hover {
    & > p {
      opacity: 1;
      right: 2.5rem;
    }
  }
`;

const SearchIcon = styled(MemoSearchIcon)`
  margin-top: auto;
  margin-bottom: auto;
`;

const P = styled("p")`
  position: absolute;
  height: fit-content;
  right: 4px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 0.875em;
  color: var(--shade3);
  opacity: 0;
  -webkit-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

const OptionCloseButton = styled(MemoCloseIcon)`
  width: 100%;
  height: 100%;
  & > path {
    stroke: ${({ fill }) => fill};
  }
`;

const RemoveButton = styled("button")`
  width: var(--sp-4);
  height: var(--sp-4);
  margin-left: var(--sp-2);
  padding: 4px;
  border-radius: 50%;  
  background: var(--shade0-75);
`;
