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


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: "80vw",
    height: "80vw",
  },
  gridTile: {
    width:"20vw",
    height:"20vw",
    background:"black",
    borderRadius:"25px",

  }
};

export default class CategoryGrid extends Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    const { id, index, categorySelect, activeCategory, onGridClick, gridClickState} = this.props;
    console.log(event.target.dataset.name);
    categorySelect(event.target.dataset.name);
    console.log("ADADADADADADADADADAADAADADADADADADADADADADADAD");
    console.log(activeCategory);
    console.log(this.props.gridClickState)
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
          rows={3}
          cols={3}
        >
          {tilesData.map((tile,key) => (
            <GridTile
              key={key}
              id={key}
              data-name={tile.name}
              style={styles.gridTile}
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
