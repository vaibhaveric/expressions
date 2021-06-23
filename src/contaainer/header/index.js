
import {Grid,Paper} from '@material-ui/core';
import React from 'react';
import Panel from '../Panel/Panel';
import logo from './logo.png'
import './index.css'

function Header() {
  return (<Grid   container  direction="row"
  justify="center"
  alignItems="center">
      <img className="mobileLogo" src={logo} style={{width: '25%' }} alt=""/>
     
     </Grid>
    )
}
export default Header;
