import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import List from 'material-ui/lib/lists/list';

const Scoreboard = ({topics}) => {
  const topicListItems = topics.map((topic, key) => {
    return (
    <li key={key}>
      <span>{topic.text}</span>
      <span >{topic.count}</span>
      <span >{topic.signal}</span>
    </li>);
  });
  return (
    <div >
      <h3 >Vote count</h3>
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
