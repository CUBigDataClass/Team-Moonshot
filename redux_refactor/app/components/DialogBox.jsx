import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

export default class DialogBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const actions = [
      <FlatButton label="Close" onClick={this.props.onButtonClick} />
    ];

    return (
      <Dialog
        title="Dialog With Actions"
        actions={actions}
        open={!this.props.dialogBoxButtonState}
      >
      </Dialog>

    );
  }
}
