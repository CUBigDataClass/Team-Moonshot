import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import List from 'material-ui/lib/lists/list';

//const cx = classNames.bind(styles);

const Scoreboard = ({topics}) => {
  const topicListItems = topics.map((topic, key) => {
    return (
    <li className={cx('item')} key={key}>
      <span className={cx('topic')}>{topic.text}</span>
      <span className={cx('count')}>{topic.count}</span>
      <span className={cx('count')}>{topic.signal}</span>
    </li>);
  });
  return (
    <div className={cx('category-list')}>
      <h3 className={cx('header')}>Vote count</h3>
      <List>
        {topicListItems}
      </List>
    </div>
  );
};

Scoreboard.propTypes = {
  topics: PropTypes.array.isRequired
};

export default Scoreboard;
