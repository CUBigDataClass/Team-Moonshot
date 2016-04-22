import React, { PropTypes } from 'react';
import CategoryItem from 'components/CategoryItem';
import classNames from 'classnames/bind';
import styles from 'css/components/main-section';
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import Menu from 'material-ui/lib/menus/menu';

const cx = classNames.bind(styles);

const MainSection = ({onDestroy, categories}) => {
 const categoryItems = categories.map((category, key) => {
    console.log(category);
    return (
      <CategoryItem index={key}
        id={category.id}
        key={key}
        name={category.name}
        items={category.items}
        onDestroy={onDestroy} />);
    });
  return (
    <Paper className={cx('main-section')} zDepth={3}>
      <h2 className={cx('header')}>Categories</h2>
      <Menu className={cx('list')}>{categoryItems}</Menu>
    </Paper>
  );
};

MainSection.propTypes = {
  categories: PropTypes.array.isRequired,
  onDestroy: PropTypes.func.isRequired
};

export default MainSection;
