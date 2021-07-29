import styled from 'styled-components';
import PropTypes from 'prop-types';

const DisplayArea = styled.div`
  width: 200px;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 auto;
  padding: 0.25em 1em;
`;

const Display = ({ result }) => <DisplayArea>{result}</DisplayArea>;

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
