import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import FlatButton from 'material-ui/lib/flat-button';
import RemoveRedEye from 'material-ui/lib/svg-icons/image/remove-red-eye';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 400,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

const tilesDataa = [
  {
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];


export default class DialogBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tilesData=this.props.categories;
    return(
      <div style={styles.root}>
        <GridList
          cellHeight={200}
          style={styles.gridList}
        >
          {tilesData.map(tile => (
            <GridTile
              title={tile.name}
              onClick={() => console.log("***8**88*88********8**88****888*****8***")}
            >
              {<RemoveRedEye />}
            </GridTile>
          ))}
        </GridList>
        <FlatButton label="Go Back" onClick={this.props.onClickSubmitButton} />
      </div>
    );
  }
}
