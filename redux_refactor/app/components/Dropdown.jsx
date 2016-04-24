import React, { Component, PropTypes } from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import classNames from 'classnames/bind';
import SubmitButton from 'components/SubmitButton';
import styles from 'css/components/vote';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SubmitButton
        SubmitButton={this.props.SubmitButton}
      />
    );
  }
}
