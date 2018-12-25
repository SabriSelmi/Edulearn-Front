import React, { Component } from 'react';
import Toolbar from "../componentsHeader/toolBarStart";
import HeaderTopStart from "../componentsHeader/headerTopStart";
import Navbar from "../componentsHeader/navbar";
import Canvas from "../componentsHeader/canvasMenu"







class Header extends Component {
   
    render() { 
        return (

              <header id="rs-header" className="rs-header" >
              <Toolbar/>
              <HeaderTopStart/>
              <Navbar isIdent={this.props.isIdent}/>
              <Canvas/>
              </header>

        );
    }
}

export default Header;