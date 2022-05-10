import { styled } from "goober";
import React, { useRef, useState } from "react";

import useGetColor from "../hooks/useGetColor";
import LoadingParser from "./LoadingParser";
import { SelectInput } from "./SelectInput";

const Select = () => {
  const ref = useRef();
  const [inputValue, setInputValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { data, loading } = useGetColor({ query: inputValue });

  const onSelect = (option) => {
    setInputValue('');
    setSelectedOptions([...selectedOptions, option]);
    ref.current?.focus();
  };

  return (
    <Wrapper>
      <SelectControl>
        <SelectInput
          ref={ref}
          options={selectedOptions}
          value={inputValue}
          onChange={setInputValue}
        />

        {!!inputValue && (
          <OptionsWrapper>
            <LoadingParser isLoading={loading}>
              {data && !!data.length ? (
                data
                  .filter(
                    ({ name }) => !selectedOptions.some(option => option.name === name)
                  )
                  .map((option, index) => (
                    <SelectorOption
                      key={index}
                      hex={option.hex}
                      onClick={() => onSelect(option)}
                    >
                      {option.name}
                    </SelectorOption>
                  ))
              ) : (
                <p>No results</p>
              )}
            </LoadingParser>
          </OptionsWrapper>
        )}
      </SelectControl>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: flex;
  width: 100%;
  text-align: left;
`;

const SelectControl = styled("div")`
  display: flex;
  flex-direction: column;
  max-width: 680px;
  width: 100%;
  position: relative;
`;

const OptionsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: var(--sp-18);
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--shade0);
  min-height: var(--sp-10);
`;

export const Option = styled("button")`
  display: flex;
  height: var(--sp-9);
  border-radius: var(--sp-1);
  align-items: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: ${({ hex }) => hex};
  align-items: center;
`;

const SelectorOption = styled(Option)`
  width: 100%;
  cursor: pointer;
`;

export default Select;
