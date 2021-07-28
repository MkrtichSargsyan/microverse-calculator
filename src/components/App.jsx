import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '0',
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    const currentData = this.state;
    const updatedData = calculate(currentData, buttonName);
    this.setState({
      total: updatedData.total,
      next: updatedData.next,
      operation: updatedData.operation,
    });
  };

  render() {
    console.log(this.state);
    const { next } = this.state;

    return (
      <>
        <Display result={next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
