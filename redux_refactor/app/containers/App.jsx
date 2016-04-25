import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';

import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import darkTheme from 'material-ui/lib/styles/baseThemes/darkBaseTheme'
import * as Colors from 'material-ui/lib/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: Colors.orange500,
    primary2Color: Colors.cyan700,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    pickerHeaderColor: Colors.cyan500,
 },
});

const cx = classNames.bind(styles);


/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
const App = ({children}) => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className={cx('app')}>
        {children}
      </div>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
