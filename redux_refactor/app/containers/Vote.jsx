import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import EntryBox from 'components/EntryBox';
import MainSection from 'components/MainSection';
import Scoreboard from 'components/Scoreboard';
import MenuButton from 'components/MenuButton';
import Dropdown from 'components/Dropdown';
import CategoryGrid from 'components/CategoryGrid';
import FlatButton from 'material-ui/lib/flat-button';
import DialogBox from 'components/DialogBox';
import * as Colors from 'material-ui/lib/styles/colors';

const styles = {
  backDrop: {
  }
}


import {
  createCategory, typing, destroyCategory, fetchCategories, tutorial, submission, gridclick, changeCategory } from 'actions/categories';

class Vote extends Component {
  //Data that needs to be called before rendering the component
  //This is used for server side rending via the fetchComponentDataBeforeRender() method
  static need = [  // eslint-disable-line
    fetchCategories
  ]

  constructor(props) {
    super(props);
    // event handlers for MainSection component
    this.onDestroy = this.onDestroy.bind(this);
    // event handlers for EntryBox component
    this.onEntryChange = this.onEntryChange.bind(this);
    this.onEntrySave = this.onEntrySave.bind(this);
    this.onTutorialButton = this.onTutorialButton.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.onGridClick = this.onGridClick.bind(this);
    this.onSelectCategory = this.onSelectCategory.bind(this);
  }

  onSubmitClick(id,index) {
    const {dispatch} = this.props;
    dispatch(submission(id, index))
  }

  onSelectCategory(name) {
    console.log("logging function in vote!")
    const {dispatch} = this.props;
    dispatch(changeCategory(name))
  }

  onGridClick(id,index) {
    const {dispatch} = this.props;
    dispatch(gridclick(id, index))
  }

  onTutorialButton(id,index) {
    const {dispatch} = this.props;
    dispatch(tutorial(id, index))
  }

  onDestroy(id, index) {
    const { dispatch } = this.props;
    dispatch(destroyCategory(id, index));
  }

  onEntryChange(text) {
    const { dispatch } = this.props;
    dispatch(typing(text));
  }

  onEntrySave(name) {
    console.log("SAVING");
    console.log(name);
    const { dispatch } = this.props;
    dispatch(createCategory(name));
  }


  render() {
    const {newCategory, categories, submitButtonState, gridClickState, activeCategory} = this.props;
    return (
        <div style={styles.backDrop}>
          {this.props.submitButtonState ?
            <div>
              {this.props.gridClickState ?
                <div>
                  <CategoryGrid
                    onClickSubmitButton={this.onSubmitClick}
                    onGridClick={this.onGridClick}
                    submitButtonState={this.props.submitButtonState}
                    gridClickState={this.props.gridClickState}
                    categories={categories}
                    category={newCategory}
                    activeCategory={this.props.activeCategory}
                    categorySelect={this.onSelectCategory}
                    tutorialButtonState={this.props.tutorialButtonState}
                    onTutorialButton={this.onTutorialButton} />
                </div>
              : //else condition
                <div>
                  <TableComponent
                  activeCategory={this.props.activeCategory}
                  onGridClick={this.onGridClick}
                  gridClickState={this.props.gridClickState}
                  />

                  {"This is where the Graphs go"}
                  {console.log(this.props.activeCategory)}
                  <FlatButton label="Go Back" onClick={this.onGridClick}/>
                </div>
              }
            </div>
          : //else condition
              <div>
                <Dropdown
                  onClickSubmitButton={this.onSubmitClick}
                  submitButtonState={this.props.submitButtonState}
                  categories={categories}
                  category={newCategory}
                />
                <EntryBox
                  category={newCategory}
                  onEntryChange={this.onEntryChange}
                  onEntrySave={this.onEntrySave}
                />
                <MainSection
                  categories={categories}
                  onDestroy={this.onDestroy}
                />
              </div>
          }
        </div>
    );
  }
}

Vote.propTypes = {
  categories: PropTypes.array.isRequired,
  newCatgory: PropTypes.string,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    categories: state.category.categories,
    newCategory: state.category.newCategory,
    submitButtonState: state.category.submission,
    gridClickState: state.category.gridclick,
    activeCategory: state.category.activeCategory,
    tutorialButtonState: state.category.tutorial
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(Vote);
