import styled from 'styled-components';
import PropTypes from 'prop-types';

const DisplayArea = styled.div`
  width: 400px;
  padding:25px 20px;
  background: grey;
  border-radius: 3px;
  color: white;
  text-align:right;
  margin: 0 auto;
`;

const Display = ({ result }) => <DisplayArea>{result}</DisplayArea>;

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
