import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import classNames from 'classnames/bind';


export default class MenuButton extends Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    const { id, index, TutorialButton } = this.props;
    TutorialButton(id, index);
  }

  render() {
    return (
      <FlatButton label="Default" onClick={this.onButtonClick} />
    );
  }
}
