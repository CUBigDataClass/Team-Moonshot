import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

export default class DialogBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const categoryItems = this.props.categories.map((category, key) => {
        console.log(category.name);
    });


    const actions = [
      <div>
        <FlatButton label="Close" onClick={this.props.onButtonClick} />
        <TextField
          value={"category.name should come here!"}
          autoFocus />
      </div>
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
