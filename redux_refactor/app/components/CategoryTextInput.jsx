import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/lib/text-field';

const ENTER_KEY_CODE = 13;

export default class CategoryTextInput extends Component {
  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    console.log("constructorl");
    console.log(this.props);
  }
  /*
   * Invokes the callback passed in as onSave, allowing this component to be
   * used in different ways. I personally think this makes it more reusable.
   */
  onSave() {
    const { onEntrySave, value } = this.props;
    onEntrySave(value);
  }

  /*
   * Invokes the callback passed in as onSave, allowing this component to be
   * used in different ways. I personally think this makes it more reusable.
   */
  onChange(event) {
    const { onEntryChange } = this.props;
    onEntryChange(event.target.value);
  }

  /*
   * @param  {object} event
   */
  onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.onSave();
    }
  }

  render() {
    const { className, placeholder, value } = this.props;
    return (
      <TextField 
        placeholder={placeholder}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        value={value}
        autoFocus />
    );
  }
}

CategoryTextInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onEntrySave: PropTypes.func,
  onEntryChange: PropTypes.func
};
