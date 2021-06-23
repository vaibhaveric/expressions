import { Grid, Paper } from '@material-ui/core';
// import './App.css';

import React, { useEffect, useState } from 'react';
function Authors() {
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
        {show === 1 && <Grid container xs={12}
            direction="row"
            // justify="center"
            alignItems="center" >
            <Grid xs={sides}></Grid>
            <Grid xs={mid} style={{
                background: "white", minHeight: "1500px", 
                borderRadius: '2px',
                border: '2px solid rgb(196 118 201 / 15%)',
                // boxShadow: '10px 10px 27px #888888',
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempus scelerisque. Donec vulputate nunc eget risus congue, et dignissim elit porttitor. Praesent sed lobortis lacus. Nam suscipit nibh id commodo mattis. Ut turpis odio, porta vel libero quis, efficitur ultrices orci. Maecenas sit amet pharetra augue. Vivamus ac urna et ipsum aliquam viverra. Donec nulla erat, molestie quis lectus a, vulputate fermentum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ultricies congue lectus a venenatis. Morbi non eros sodales, euismod nisi in, suscipit velit. Aenean efficitur ligula non ultrices vehicula.

            Fusce cursus pretium felis in efficitur. Nullam turpis ante, sollicitudin eu est et, eleifend porttitor orci. Sed porttitor iaculis tortor, sit amet lobortis lacus feugiat in. Curabitur nibh justo, suscipit at velit id, imperdiet finibus neque. Phasellus felis nunc, pellentesque eget sem non, tincidunt pretium nisl. Sed gravida sapien felis, mattis luctus neque tristique non. Integer pharetra urna quis arcu accumsan cursus. Duis urna nisl, placerat et ex sed, tempor laoreet tortor. Morbi sollicitudin lacinia neque ac consequat.
            
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque porta convallis justo, vitae dictum felis ornare eu. Phasellus at sapien non massa pellentesque facilisis non in dui. Nulla ut massa hendrerit, posuere tellus et, egestas mi. Ut sit amet porta lorem. Nunc eu orci lacinia tortor molestie varius eu eget eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus tempor scelerisque erat, vestibulum ullamcorper justo ullamcorper viverra. Sed condimentum, neque et rhoncus auctor, lectus nunc porttitor orci, non fermentum neque urna nec nisl. Aliquam vitae ligula quam.
            
            Duis placerat erat quis felis scelerisque, eget auctor turpis tristique. Nulla faucibus laoreet feugiat. Praesent quis odio elementum, tincidunt magna eget, eleifend mauris. Donec et tristique augue, at tincidunt nisi. Mauris viverra augue eu mi dignissim suscipit. Fusce quis dapibus tellus. Sed sem nisi, blandit vitae sem quis, iaculis tincidunt neque.
            
            Maecenas elementum nibh non nunc rutrum pharetra. In hac habitasse platea dictumst. Donec ut fermentum odio. Aliquam vitae mauris ac dolor ullamcorper convallis. Duis congue purus a dui porta porttitor. Duis dui massa, pellentesque eu ornare quis, gravida eget urna. Quisque tristique mattis pulvinar. Pellentesque sem odio, condimentum at aliquet vitae, feugiat vitae quam. Vivamus vel mollis leo, id scelerisque velit. Maecenas pulvinar tincidunt nulla ut tempus. Sed vestibulum convallis ornare. Nunc ultricies viverra quam, et ornare enim scelerisque at. Donec malesuada placerat mauris, eget rutrum lorem tincidunt ac.</Grid>
            <Grid xs={sides}></Grid>
        </Grid>}
    </div>
    )
}
export default Authors;
