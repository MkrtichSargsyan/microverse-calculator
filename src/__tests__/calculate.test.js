// import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import calculate from '../logic/calculate';

const initial = { total: '0', next: '0', operation: null };
const data1 = calculate(initial, '9');
const data2 = calculate(data1, 'X');
const data3 = calculate(data2, '9');
const data4 = calculate(data3, '=');
const data5 = calculate(data4, '%');
const data6 = calculate(data5, '3');
const data7 = calculate(data6, '=');
const data8 = calculate(data7, 'AC');

// 9 * 9 calculation

it('should add 9 as the first value', () => {
  expect(data1).toEqual({ total: '9', next: '9', operation: null });
});

it('should add multiply operator', () => {
  expect(data2).toEqual({ total: '9', next: 'X', operation: '*' });
});

it('should return {9,X,9}', () => {
  expect(data3).toEqual({ total: '9', next: '9', operation: '*' });
});

it('should return {81,81,null}', () => {
  expect(data4).toEqual({ total: '81', next: '81', operation: null });
});

it('should return {81,%,%}', () => {
  expect(data5).toEqual({ total: '81', next: '%', operation: '%' });
});

it('should return {81,3,%}', () => {
  expect(data6).toEqual({ total: '81', next: '3', operation: '%' });
});

it('should return 2.43', () => {
  expect(data7).toEqual({ total: '2.43', next: '2.43', operation: null });
});

it('should return {0,0,null}', () => {
  expect(data8).toEqual(initial);
});
