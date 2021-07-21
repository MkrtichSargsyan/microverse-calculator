import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = '';
  switch (operation) {
    case '-':
      result = new Big(numberOne - numberTwo);
      break;
    case '+':
      result = new Big(numberOne() + numberTwo);
      break;
    case '/':
      result = new Big(numberOne / numberTwo);
      break;
    case '*':
      result = new Big(numberOne * numberTwo);
      break;
    case '%':
      result = new Big(numberOne * numberTwo);
      break;
    default:
      result = 0;
  }
  return result;
};

export default operate;
