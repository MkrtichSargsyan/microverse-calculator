import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '-':
      return numberOne - numberTwo;
    case '+':
      return numberOne + numberTwo
    case '/':
      return numberOne / numberTwo
    case '*':
      return numberOne * numberTwo
      break;

    default:
      break;
  }
};

export default operate;
