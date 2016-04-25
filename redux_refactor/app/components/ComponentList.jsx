import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import CategoryItem from 'components/CategoryItem';

export default class ComponentList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const categories = this.props.categories;
    const categoryItems = categories.map((category, key) => {
      return (
        <CategoryItem index={key}
          id={category.id}
          key={key}
          name={category.name}
          items={category.items}
        />);
    });
    console.log(categoryItems);
    return (
      <div>
      {categoryItems}
      </div>
    );
  }
};
