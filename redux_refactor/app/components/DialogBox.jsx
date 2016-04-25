import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import ComponentList from 'components/ComponentList';

export default class DialogBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Dialog
          title="Dialog With Actions"
          open={!this.props.dialogBoxButtonState}
        >
          <div>
            <ComponentList
              dialogBoxButtonState={this.props.dialogBoxButtonState}
              onButtonClick={this.props.onButtonClick}
              categories={this.props.categories}
            />
            <FlatButton label="close" onClick={this.props.onButtonClick} />
          </div>
        </Dialog>
      </div>
    );
  }
}
