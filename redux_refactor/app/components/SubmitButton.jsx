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
    const { id, index, onClickSubmitButton, submitButtonState, category } = this.props;
    onClickSubmitButton(id, index);
    console.log(submitButtonState);
  }

  render() {
    return (
      <div>
        <FlatButton label="Submit" onClick={this.onButtonClick} />
        <DialogBox
        onButtonClick={this.onButtonClick}
        dialogBoxButtonState={this.props.submitButtonState}
        categories={this.props.categories}
        categoryValue={this.props.category} />

      </div>
    );
  }
}
