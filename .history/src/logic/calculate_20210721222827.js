import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  }

  return {
    total: 3,
    next: null,
    operation: null,
  };
};

export default calculate;
