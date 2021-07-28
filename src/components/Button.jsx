import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

export default function Button({ buttonName, className }) {
  return (
    <button type="button" className={className}>
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: 'zeroButton',
};
