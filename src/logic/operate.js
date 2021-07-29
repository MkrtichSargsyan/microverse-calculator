import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = Big(numberOne);
  const y = Big(numberTwo);
  let result = 0;
  switch (operation) {
    case '-':
      result = x.minus(y);
      break;
    case '+':
      result = x.plus(y);
      break;
    case '/':
      if (numberTwo === '0') {
        result = 'division error';
      } else {
        result = x.div(y);
      }
      break;
    case '*':
      result = x.times(y);
      break;
    case '%':
      result = x.mod(y);
      break;
    default:
  }
  return result;
};

export default operate;
