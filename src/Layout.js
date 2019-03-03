import React from 'react';
import Header from './Header';
import Menu from './Menu';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';

class Layout extends React.Component{

  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <Header />
        <Menu />
        {children}
      </React.Fragment>
    );
  }
}

export default Layout;