import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = '';
  switch (operation) {
    case '-':
      result = new Big(numberOne - numberTwo);
    case '+':
      result = new Big(numberOne + numberTwo);
    case '/':
      result = new Big(numberOne / numberTwo);
    case '*':
      result = new Big(numberOne * numberTwo);

    default:
      result = 0;
  }
};

export default operate;
