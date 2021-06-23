// import logo from './logo.svg';
import {Grid,Paper} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Poem from './poem.png';
import Blog from './blog.png';
import Auther from './author.png';
import Joke from './joke.png';
import './Panel.css'

const useStyles = makeStyles({
  root: {
    // width: 'auto',  
    // height:100
    // background: 'linear-gradient(22deg, #d94f95, #ffffff)',
    
    borderRadius: '10px',
    border: '2px solid rgb(196 118 201 / 15%)',
    boxShadow: '10px 10px 27px #888888',
    
  },
});
const divStyle={
  position: 'fixed',
  width: 'auto',
  bottom: '19px'
 
  // border: '3px solid #8AC007',
 
}
function Footer(props) {
  const classes = useStyles();
  const {show,setShow}=props
  const [value, setValue] = React.useState(show);
  console.log(value)
  return (
    // <div >
      <Grid  container
      direction="row"
      justify="center"
      alignItems="center" style={divStyle}>
      
    <BottomNavigation
    
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        setShow(newValue);
      }}
      showLabels
      className={classes.root}
    >
    
      {/* <BottomNavigationAction label="Categories" icon={<FormatAlignJustifyIcon />} /> */}
      <BottomNavigationAction label="Blogs" icon={<img src={Blog} style={{width: imgWidth}} className='footerIcon' alt=""/>} />
      <BottomNavigationAction label="Poems" icon={<img src={Poem} style={{width:  imgWidth}} className='footerIcon ' alt=""/>} />
      <BottomNavigationAction label="Puns" icon={<img src={Joke} style={{width:  imgWidth}} className='footerIcon' alt=""/>} />
      <BottomNavigationAction label="Authors" icon={<img src={Auther} style={{width:  imgWidth}} className='footerIcon'alt=""/>} />
  
     
    </BottomNavigation>
    </Grid>
    // </div>
  );
}
const imgWidth='20%'
export default Footer;
