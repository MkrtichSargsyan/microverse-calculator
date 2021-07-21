// import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  }

  if(buttonName === '='){
    total = oper
  }


  return { total, next, operation };
};

export default calculate;
