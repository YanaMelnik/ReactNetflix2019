import React from 'react';
import PropTypes from 'prop-types';

// class HelloWorldPure extends React.PureComponent {
//   showText() {
//     return 'Hello World with React PureComponent';
//   }
//
//   render() {
//     return (
//       <h1>{ this.showText() }</h1>
//     );
//   }
// }

const HelloWorldPure = ({ showText }) => <h1>{showText}</h1>;
HelloWorldPure.propTypes = {
  showText: PropTypes.string.isRequired,
};

export default HelloWorldPure;
