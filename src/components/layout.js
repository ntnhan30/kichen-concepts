import React from "react";

import Footer from './footer';
import '../styles/index.scss';

const Layout = props => {
  return (<div>{props.children}
    <Footer/>
    </div>
    )
}
export default Layout
