import { styled } from "goober";
import Select from "./components/Select";

function App() {
  return (
    <Wrapper>
      <Content>
        <Select />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled("div")`
  margin: 0;
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  code: {
    font-family: source-code-pro, monospace;
  }
`;

const Content = styled("div")`
  display: flex;
  width: 680px;
`;

export default App;
