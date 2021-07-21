// import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  }

  if (buttonName === 'AC') {
    total = '0';
    next = '';
    operation = '';
  }

  if (buttonName === '.') {
    total += '.';
    next += '.';
    operation = '';
  }

  if (buttonName === '=') {
    total = '0';
    next = '';
    operation = '';
  }

  return { total, next, operation };
};

export default calculate;
