import { styled } from "goober";
import React, { useRef, useState } from "react";

import useGetColor from "../hooks/useGetColor";
import {SelectInput} from "./SelectInput";
import LoadingParser from "./LoadingParser";

const Select = () => {
  const ref = useRef();
  const [inputValue, setInputValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { data, loading } = useGetColor({ query: inputValue });

  const onSelect = (option) => {
    setInputValue('');
    setSelectedOptions([...selectedOptions, option]);
    ref.current?.focus();
  }

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
                    ({name}) => !selectedOptions.some((o) => o.name === name)
                  )
                  .map((option) => (
                    <div key={Math.random()}>{option.name}</div>
                  ))
              ): (
                <div>No results</div>
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
  justify-content: center;
  align-items: center;
  top: var(--sp-7);
  width: 100%;
  background-color: var(--shade0);
`;

export default Select;
