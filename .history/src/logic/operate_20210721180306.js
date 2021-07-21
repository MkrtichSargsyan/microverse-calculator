import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {

  const x = Big(numOne);
  const y = Big(numTwo);
  let result = '';
  switch (operation) {
    case '-':
      result = new Big(numberOne - numberTwo);
      break;
    case '+':
      result = new Big(numberOne).plus(new Big(numberTwo));
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
