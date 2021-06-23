import { Grid, Paper } from '@material-ui/core';
// import './App.css';
import React, { useState } from 'react';
import Panel from '../Panel/Panel';
import Header from '../header/index'
import Authors from '../Authors/Authors'
import Poems from '../Poems/Poems'
import Blogs from '../Blogs/Blogs'
import Puns from '../Puns/Puns'
import Welcome from '../Welcome/Welcome'

function Main() {
    const [show, setShow] = useState(null)
    return (<div>

        <Grid><Header /></Grid>

        <Grid >
            {show === 0 && <Blogs />}
            {show === null && <Welcome />}
            {show === 1 && <Poems />}
            {show === 2 && <Puns />}
            {show === 3 && <Authors />}
        </Grid>


        <Grid container
            direction="row"
            justify="center"
            alignItems="center" ><Panel show={show} setShow={setShow} /></Grid>
    </div>
    )
}
export default Main;
