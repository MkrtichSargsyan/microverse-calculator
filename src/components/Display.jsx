import styled from "styled-components";

const DisplayArea = styled.div`
  width: 200px;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 auto;
  padding: 0.25em 1em;
`;

const Display = ({ result }) => {
  return <DisplayArea>{result}</DisplayArea>;
};

export default Display;
