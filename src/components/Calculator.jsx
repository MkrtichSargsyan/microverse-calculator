import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [values, setValues] = useState({
    total: 0,
    next: '0',
    operation: null,
  });

  const handleClick = (buttonName) => {
    const currentData = values;
    const updatedData = calculate(currentData, buttonName);
    console.log(updatedData);
    setValues({
      total: updatedData.total,
      next: updatedData.next,
      operation: updatedData.operation,
    });
  };

  return (
    <>
      <Display
        result={values.next}
        total={values.total}
        opeartion={values.operation}
      />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default Calculator;
