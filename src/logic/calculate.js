import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  switch (buttonName) {
    case 'X':
      operation = '*';
      next = 'X';
      break;
    case '÷':
      operation = '/';
      next = '/';
      break;
    case '+':
      operation = '+';
      next = '+';
      break;
    case '-':
      operation = '-';
      next = '-';
      break;
    case '%':
      operation = '%';
      next = '%';
      break;
    case '+/-':
      total *= -1;
      next *= -1;
      operation = null;
      break;
    case 'AC':
      total = '0';
      next = '0';
      operation = null;
      break;
    case '=': {
      const result = operate(total, next, operation);
      total = result;
      next = result;
      operation = null;
      break;
    }
    default:
      if (!operation) {
        total = +total === 0 ? buttonName : (total += buttonName);
        next = total;
      } else if (Number.isNaN(+next)) {
        next = +buttonName;
      } else {
        next += +buttonName;
      }

      break;
  }

  total += '';
  next += '';
  return { total, next, operation };
};

export default calculate;
