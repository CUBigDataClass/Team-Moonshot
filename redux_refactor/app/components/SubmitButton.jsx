import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import classNames from 'classnames/bind';


export default class SubmitButton extends Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    const { id, index, SubmitButton } = this.props;
    SubmitButton(id, index);
  }

  render() {
    return (
      <FlatButton label="Submit" onClick={this.onButtonClick} />
    );
  }
}
