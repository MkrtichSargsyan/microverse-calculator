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

const data8 = calculate(data7, '+');
const data9 = calculate(data8, '1');
const data10 = calculate(data9, '-');
const data11 = calculate(data10, '1');
const data12 = calculate(data11, '=');
const data13 = calculate(data12, 'AC');

const data14 = calculate({ total: '0', next: '0', operation: null }, '8');
const data15 = calculate(data14, '÷');
const data16 = calculate(data15, '2');
const data17 = calculate(data16, '=');
const data18 = calculate(data17, '+/-');

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

it('should return {2.43,+,+}', () => {
  expect(data8).toEqual({ total: '2.43', next: '+', operation: '+' });
});

it('should return {2.43,+,+}', () => {
  expect(data8).toEqual({ total: '2.43', next: '+', operation: '+' });
});

it('should return {2.43,1,+}', () => {
  expect(data9).toEqual({ total: '2.43', next: '1', operation: '+' });
});

it('should return {2.43,-,-}', () => {
  expect(data10).toEqual({ total: '2.43', next: '-', operation: '-' });
});

it('should return {2.43,1,-}', () => {
  expect(data11).toEqual({ total: '2.43', next: '1', operation: '-' });
});

it('should return {1.43,1.43,null}', () => {
  expect(data12).toEqual({ total: '1.43', next: '1.43', operation: null });
});

it('should equal initial', () => {
  expect(data13).toEqual(initial);
});

it('should equal 8', () => {
  expect(data14).toEqual({ total: '8', next: '8', operation: null });
});

it('should equal {8,/,/}', () => {
  expect(data15).toEqual({ total: '8', next: '/', operation: '/' });
});

it('should equal {8,2,/}', () => {
  expect(data16).toEqual({ total: '8', next: '2', operation: '/' });
});

it('should equal {4,4,null}', () => {
  expect(data17).toEqual({ total: '4', next: '4', operation: null });
});

it('should equal {-4,-4,null}', () => {
  expect(data18).toEqual({ total: '-4', next: '-4', operation: null });
});
