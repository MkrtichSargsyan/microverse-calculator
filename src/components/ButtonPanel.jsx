import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanelContainer = styled.div`
  width: 200px;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 auto;
  padding: 0.25em 1em;
`;

const ButtonPanelGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export default function ButtonPanel({ clickHandler }) {
  return (
    <ButtonPanelContainer>
      <ButtonPanelGroup>
        <Button buttonName="AC" clickHandler={clickHandler} />
        <Button buttonName="+/-" clickHandler={clickHandler} />
        <Button buttonName="%" clickHandler={clickHandler} />
        <Button buttonName="÷" clickHandler={clickHandler} />
      </ButtonPanelGroup>
      <ButtonPanelGroup>
        <Button buttonName="7" clickHandler={clickHandler} />
        <Button buttonName="8" clickHandler={clickHandler} />
        <Button buttonName="9" clickHandler={clickHandler} />
        <Button buttonName="X" clickHandler={clickHandler} />
      </ButtonPanelGroup>
      <ButtonPanelGroup>
        <Button buttonName="4" clickHandler={clickHandler} />
        <Button buttonName="5" clickHandler={clickHandler} />
        <Button buttonName="6" clickHandler={clickHandler} />
        <Button buttonName="-" clickHandler={clickHandler} />
      </ButtonPanelGroup>
      <ButtonPanelGroup>
        <Button buttonName="1" clickHandler={clickHandler} />
        <Button buttonName="2" clickHandler={clickHandler} />
        <Button buttonName="3" clickHandler={clickHandler} />
        <Button buttonName="+" clickHandler={clickHandler} />
      </ButtonPanelGroup>
      <ButtonPanelGroup>
        <Button
          buttonName="0"
          className="zeroButton"
          clickHandler={clickHandler}
        />
        <Button buttonName="." clickHandler={clickHandler} />
        <Button buttonName="=" clickHandler={clickHandler} />
      </ButtonPanelGroup>
    </ButtonPanelContainer>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
