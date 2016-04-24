import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import DialogBox from 'components/DialogBox';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';


export default class SubmitButton extends Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    const { id, index, onClickSubmitButton, submitButtonState } = this.props;
    onClickSubmitButton(id, index);
    console.log(submitButtonState);
  }

  render() {
    const actions = [
      <FlatButton label="Close" onClick={this.onButtonClick} />
    ];

    return (
      <div>
        <FlatButton label="Submit" onClick={this.onButtonClick} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          open={!this.props.submitButtonState}
        >

        </Dialog>
      </div>
    );
  }
}
