import React, { PropTypes } from 'react';
//import TopicTextInput from 'components/TopicTextInput';
import CategoryTextInput from 'components/CategoryTextInput';
import classNames from 'classnames/bind';


// Takes callback functions from props and passes it down to TopicTextInput
// Essentially this is passing the callback function two levels down from parent
// to grandchild. To make it cleaner, you could consider:
// 1. moving `connect` down to this component so you could mapStateToProps and dispatch
// 2. Move TopicTextInput up to EntryBox so it's less confusing
const EntryBox = ({onEntryChange, onEntrySave, category}) => {
  return (
    <div>
      <CategoryTextInput
        underlineStyle={{
          borderWidth: '100%',
        }}
        value={category}
        placeholder="Input a category . . ."
        onEntryChange={onEntryChange}
        onEntrySave={onEntrySave} />
    </div>

  );
};

EntryBox.propTypes = {
  category: PropTypes.string,
  onEntryChange: PropTypes.func.isRequired,
  onEntrySave: PropTypes.func.isRequired
};

export default EntryBox;
