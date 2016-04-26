import React, { PropTypes } from 'react';
import CategoryItem from 'components/CategoryItem';
import classNames from 'classnames/bind';
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import Menu from 'material-ui/lib/menus/menu';

const MainSection = ({onDestroy, categories}) => {
 const categoryItems = categories.map((category, key) => {
    console.log(category);
    return (
      <CategoryItem index={key}
        id={category.id}
        key={key}
        score={category.score}
        name={category.name}
        items={category.items}
        onDestroy={onDestroy} />);
    });
  console.log(categoryItems);
  return (
    <Paper zDepth={3}>
      <h2>Categories</h2>
      <Menu>{categoryItems}</Menu>
    </Paper>
  );
};

MainSection.propTypes = {
  categories: PropTypes.array.isRequired,
  onDestroy: PropTypes.func.isRequired
};

export default MainSection;
