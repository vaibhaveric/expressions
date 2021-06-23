import React from 'react';
import { Grid, Paper ,Divider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import forest from "../content/images/forest.png"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    borderRadius:10,
    background: '#fdfcfa',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const {index,heading,subHeading,publishDate,description,content, author, likes } = props
  const [expanded, setExpanded] = React.useState(false);
console.log(index,heading,subHeading,publishDate,description,content, author, likes )
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
const subString=(s)=>{
let str=""
str=s;
return str.substr(0,200)+"..."
}
  return (
    <Grid container   direction="row"
    justify="center"
    alignItems="center">
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            A
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={author}
        subheader={publishDate}
      />
      <CardMedia
        className={classes.media}
        image={forest}
        title="Paella dish"
      />
      <CardContent>
      <Typography variant="h6" style={{marginBottom:"12px"}} color="" component="p">
          {heading}
        </Typography>
        
        <Typography variant="body2" color="textSecondary" component="p">
          {subString(description)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={()=>{}} >
         {likes} <FavoriteIcon/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
  
      </CardActions>
     
    </Card>
    </Grid>
  );
}
