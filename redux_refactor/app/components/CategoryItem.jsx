import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/topic-item';
import Divider from 'material-ui/lib/divider';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RemoveRedEye from 'material-ui/lib/svg-icons/image/remove-red-eye';

const cx = classNames.bind(styles);

export default class CategoryItem extends Component {
  constructor(props) {
    super(props);
    this.onDestroyClick = this.onDestroyClick.bind(this);
  }

  onDestroyClick() {
    const { id, index, onDestroy } = this.props;
    onDestroy(id, index);
  }

  render() {
    return (
      <MenuItem key={this.props.id} onClick={this.onDestroyClick} rightIcon={<RemoveRedEye />}>
        <span className={cx('topic')}>{this.props.name}</span>
      </MenuItem>
    );
  }
}

CategoryItem.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onDestroy: PropTypes.func.isRequired
};
