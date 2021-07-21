import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  return {
    total: null,
    next: null,
    operation: null,
  };

  // total = operate('5', '3', '-');
};

export default calculate;
