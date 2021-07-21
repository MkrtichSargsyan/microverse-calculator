import operate from './operate';

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;

  total = operate('5', '3', '-');
};

export default calculate;
