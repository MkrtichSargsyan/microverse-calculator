// import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  }

  if(buttonName === 'AC'){
    total = ''
  }


  return { total, next, operation };
};

export default calculate;
