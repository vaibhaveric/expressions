import { Grid, Paper } from '@material-ui/core';
// import './App.css';
import React, { useEffect, useState } from 'react';

function Puns() {
    const [screenSize, setScreenSize] = useState(1536);
    const [sides, setSides] = useState(null);
    const [mid, setMid] = useState(null);
    const [show, setShow] = useState(null);


    useEffect(() => {
        console.log(window.screen.width)
        if (window.screen.width > 1400) {
            setShow(1)
            setSides(2)
            setMid(8)
        } else {
            setShow(1)
            setSides(0)
            setMid(12)
        }
    });
    return (<div>
      {show===1&&  <Grid container xs={12}
            direction="row"
            // justify="center"
            alignItems="center" >
            <Grid xs={sides}></Grid>
            <Grid xs={mid} style={{ background: "#white", minHeight: "1500px", borderRadius: '2px',
                border: '2px solid rgb(196 118 201 / 15%)', }}>this is Puns layout</Grid>
            <Grid xs={sides}></Grid>
        </Grid>}
    </div>
    )
}
export default Puns;
