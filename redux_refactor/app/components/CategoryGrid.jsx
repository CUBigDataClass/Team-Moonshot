import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import FlatButton from 'material-ui/lib/flat-button';
import RemoveRedEye from 'material-ui/lib/svg-icons/image/remove-red-eye';
import DialogBox from 'components/DialogBox';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: "80vw",
    height: "80vh",
    marginBottom: 24,
  },
};


export default class CategoryGrid extends Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }


  onButtonClick(event) {
    const { id, index, categorySelect, category, activeCategory} = this.props;
    console.log(event.target.dataset.name);
    categorySelect(event.target.dataset.name);
    console.log(activeCategory);
  }

  render() {
    const tilesData=this.props.categories;
    return(
      <div style={styles.root}>
        <GridList
          cellHeight={200}
          style={styles.gridList}
        >
          {tilesData.map((tile,key) => (
            <GridTile
              key={key}
              id={key}
              title={tile.name}
              data-name={tile.name}
              onClick={this.onButtonClick}
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
