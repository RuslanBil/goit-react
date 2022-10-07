import React from 'react';
// import './Counter.styled.jsx';
import './Counter.css';
import Controls from './Controls';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };
  // handleIncrement = () => {
  //   this.setState({
  //     value: 55,
  //   });
  // console.log('Кликнули на увеличить');
  // const { target } = event;
  // setTimeout(() => {
  //   console.log(target);
  // }, 1000);
  // };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
    // console.log('Кликунули на уменьшить');
    // console.log(event);
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;

// const Counter = () => (
//   <div className="Counter">
//     <span className="Counter__value">0</span>

//     <div className="Counter__controls">
//       <button type="button">Увеличить на 1</button>
//       <button type="button">Уменшить на 1</button>
//     </div>
//   </div>;
// );
