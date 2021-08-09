import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanelContainer = styled.div`
  width: 440px;
  margin: 0 auto;
`;

const ButtonPanelGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function ButtonPanel({ clickHandler }) {
  return (
    <ButtonPanelContainer>
      <ButtonPanelGroup>
        <Button buttonName="AC" clickHandler={clickHandler} />
        <Button buttonName="+/-" clickHandler={clickHandler} />
        <Button buttonName="%" clickHandler={clickHandler} />
        <Button
          buttonName="÷"
          clickHandler={clickHandler}
          className="lastButton"
        />
      </ButtonPanelGroup>
      <ButtonPanelGroup>
        <Button buttonName="7" clickHandler={clickHandler} />
        <Button buttonName="8" clickHandler={clickHandler} />
        <Button buttonName="9" clickHandler={clickHandler} />
        <Button
          buttonName="X"
          clickHandler={clickHandler}
          className="lastButton"
        />
      </ButtonPanelGroup>
      <ButtonPanelGroup>
        <Button buttonName="4" clickHandler={clickHandler} />
        <Button buttonName="5" clickHandler={clickHandler} />
        <Button buttonName="6" clickHandler={clickHandler} />
        <Button
          buttonName="-"
          clickHandler={clickHandler}
          className="lastButton"
        />
      </ButtonPanelGroup>
      <ButtonPanelGroup>
        <Button buttonName="1" clickHandler={clickHandler} />
        <Button buttonName="2" clickHandler={clickHandler} />
        <Button buttonName="3" clickHandler={clickHandler} />
        <Button
          buttonName="+"
          clickHandler={clickHandler}
          className="lastButton"
        />
      </ButtonPanelGroup>
      <ButtonPanelGroup>
        <Button
          buttonName="0"
          className="zeroButton"
          clickHandler={clickHandler}
        />
        <Button buttonName="." clickHandler={clickHandler} />
        <Button
          buttonName="="
          clickHandler={clickHandler}
          className="lastButton"
        />
      </ButtonPanelGroup>
    </ButtonPanelContainer>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
