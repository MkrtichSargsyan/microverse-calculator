import React from 'react';
import styled from 'styled-components';
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

export default function ButtonPanel() {
  return (
    <ButtonPanelContainer>
      <ButtonPanelGroup>
        <Button buttonName="AC" />
        <Button buttonName="+/-" />
        <Button buttonName="%" />
        <Button buttonName="÷" />
      </ButtonPanelGroup>
      <ButtonPanelGroup>
        <Button buttonName="7" />
        <Button buttonName="8" />
        <Button buttonName="9" />
        <Button buttonName="X" />
      </ButtonPanelGroup>
      <ButtonPanelGroup>
        <Button buttonName="4" />
        <Button buttonName="5" />
        <Button buttonName="6" />
        <Button buttonName="-" />
      </ButtonPanelGroup>
      <ButtonPanelGroup>
        <Button buttonName="1" />
        <Button buttonName="2" />
        <Button buttonName="3" />
        <Button buttonName="+" />
      </ButtonPanelGroup>
      <ButtonPanelGroup>
        <Button buttonName="0" className="zeroButton" />
        <Button buttonName="." />
        <Button buttonName="=" />
      </ButtonPanelGroup>
    </ButtonPanelContainer>
  );
}
