import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'Button.css';

class Button extends Component {
  render() {
    return (
      <button
        className='button'
        onClick={this.props.action}>
        {this.props.name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default Button;
