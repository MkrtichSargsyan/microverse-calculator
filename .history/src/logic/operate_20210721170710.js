import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let 
  switch (operation) {
    case '-':
      return new Big(numberOne - numberTwo);
    case '+':
      return new Big(numberOne + numberTwo);
    case '/':
      return new Big(numberOne / numberTwo);
    case '*':
      return new Big(numberOne * numberTwo);

    default:
      break;
  }
};

export default operate;
