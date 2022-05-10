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

  const onRemove = (index) =>
    setSelectedOptions(selectedOptions.filter((_, i) => i !== index));

  const onClear = () => {
    setSelectedOptions([]);
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
          onRemove={onRemove}
          onClear={onClear}
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
                      className="type-button-text"
                    >
                      <p>{option.name}</p>
                    </SelectorOption>
                  ))
              ) : (
                <NoResult className="type-form--tab">No results</NoResult>
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
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 680px;
  width: 100%;
`;

const OptionsWrapper = styled("div")`
  position: absolute;
  top: var(--sp-18);
  width: 100%;
  min-height: var(--sp-10);
  padding: var(--sp-2);
  gap: var(--sp-2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--sp-2);
  background-color: var(--shade0);  
`;

export const Option = styled("button")`
  display: flex;
  height: var(--sp-9);
  padding: var(--sp-2) var(--sp-3);
  border-radius: var(--sp-1);
  align-items: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: ${({ hex }) => hex};
`;

const SelectorOption = styled(Option)`
  width: 100%;
  cursor: pointer;
`;

const NoResult = styled("p")`
  color: var(--shade2);
  width: 100%;
  text-align: center;
`;

export default Select;
