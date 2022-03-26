import { styled } from "goober";

const Select = () => {
  return (
    <Wrapper>
      <SelectControl>
        <TextInput type="text" placeholder="Select..." />
      </SelectControl>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  margin: 0 auto;
  text-align: left;
`;

const SelectControl = styled("div")`
  max-width: 680px;
  width: 100%;
`;

const TextInput = styled("input")`
  line-height: 26px;
`;

export default Select;
