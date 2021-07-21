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
      result = x.div(y);
      break;
    case '*':
      result = x.times(y);
      break;
    case '%':
      result = x.times(y) / 100;
      break;
    default:
      throw Error('Wrong command');
  }
  return result;
};

export default operate;
