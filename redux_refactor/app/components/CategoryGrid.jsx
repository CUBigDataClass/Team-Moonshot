import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import FlatButton from 'material-ui/lib/flat-button';
import DialogBox from 'components/DialogBox';
import Footwear from 'images/Footwear.svg';
import Accessories from 'images/Accessories.svg';
import Bags from 'images/Bags.svg';
import Beer from 'images/Beer.svg';
import Laptop from 'images/Laptop.svg';
import Sunglasses from 'images/Sunglasses.svg';
import * as Colors from 'material-ui/lib/styles/colors';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    paddingTop: "10vh",
    width: "80vw",
    height: "60vw",
  },
  gridTile: {
    width:"20vw",
    height:"20vw",
    background:Colors.blueGrey800,
    borderRadius:"25px",
    opacity: "0.3",
  },
  gridTile2: {
    width:"20vw",
    height:"20vw",
    background:Colors.blueGrey800,
    borderRadius:"25px",
    opacity: "1.0",
  }
};

export default class CategoryGrid extends Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onMoveOver = this.onMoveOver.bind(this);
  }

  onMoveOver() {
    const { id, index, onTutorialButton, tutorialButtonState} = this.props;
    console.log(tutorialButtonState);
    onTutorialButton();
  }


  onButtonClick(event) {
    const { id, index, categorySelect, activeCategory, onGridClick, gridClickState} = this.props;
    console.log(event.target.dataset.name);
    categorySelect(event.target.dataset.name);
    onGridClick();
  }

  getIcon(imageName) {
    if (imageName === "Footwear") {
      return(
        Footwear
      );
    }
    else if (imageName == "Accessories") {
      return(
        Accessories
      );
    }
    else if (imageName == "Beer") {
      return(
        Beer
      );
    }
    else if (imageName == "Laptop") {
      return(
        Laptop
      );
    }
    else if (imageName == "Bags") {
      return(
        Bags
      );
    }
    else if (imageName == "Sunglasses") {
      return(
        Sunglasses
      );
    }
    else {
      return null;
    }
  }

  render() {
    const tilesData=this.props.categories;
    return(
      <div style={styles.root}>
        <GridList
          padding={1}
          style={styles.gridList}
          rows={2}
          cols={3}
        >
          {tilesData.map((tile,key) => (
            <GridTile
              key={key}
              id={key}
              data-name={tile.name}
              onMouseOver={this.onMoveOver}
              style={styles.gridTile2}
            >
              <img src={this.getIcon(tile.name)}
                onClick={this.onButtonClick}
                data-name={tile.name}
              />
            </GridTile>
          ))}
        </GridList>
        <FlatButton label="Go Back" onClick={this.props.onClickSubmitButton} />
      </div>
    );
  }
}
