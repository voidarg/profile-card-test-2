import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Chip from "@material-ui/core/Chip";
import { Tabs, Tab } from "@material-ui/core";

const styles = theme => ({
  card: {
    //maxWidth: 400
  },
  media: {
    //height: 0,
    width: 130,
    height: 130
    //paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    //    backgroundColor: red[500],
    // height: 120,
    // width: 120,
    borderRadius: 0
  },
  cardHeader: {
    // alignItems: "flex-start",
    maxHeight: 110,
    overflow: "hidden"
  },
  ideas: {
    backgroundColor: "rgba(255, 109, 100, 1)",
    color: "white"
  },
  strategy: {
    backgroundColor: "rgba(255, 163, 88, 1)",
    color: "white"
  },
  strategy: {
    backgroundColor: "rgba(255, 163, 88, 1)",
    color: "white"
  },
  marketing: {
    backgroundColor: "rgba(255, 210, 69, 1)",
    color: "white"
  },
  execution: {
    backgroundColor: "rgba(171, 216, 115, 1)",
    color: "white"
  },
  itWeb: {
    backgroundColor: "rgba(113, 203, 201, 1)",
    color: "white"
  },
  finance: {
    backgroundColor: "rgba(93, 202, 240, 1)",
    color: "white"
  },
  legal: {
    backgroundColor: "rgba(255, 163, 88, 1)",
    color: "white"
  },
  hr: {
    backgroundColor: "rgba(184, 136, 210, 1)",
    color: "white"
  }
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false, activeTab: 0 };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          avatar={
            <Avatar
              aria-label="Recipe"
              className={classes.avatar}
              src="https://i.kinja-img.com/gawker-media/image/upload/s--vSY-o42Q--/c_scale,f_auto,fl_progressive,q_80,w_800/ecq5rsk3n1nolujedskk.jpg"
            />
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="March 31, 2019"
        />
        {/* <CardMedia
          className={classes.media}
          image="https://i.kinja-img.com/gawker-media/image/upload/s--vSY-o42Q--/c_scale,f_auto,fl_progressive,q_80,w_800/ecq5rsk3n1nolujedskk.jpg"
          title="Paella dish"
        /> */}
        {/* <CardActions>
          <Chip className={classes.ideas} label={<Typography style={{
            fontSize: 12,
            color: 'white',
            // fontWeight: 'strong'
          }}>ideas</Typography>} />
          <Chip className={classes.strategy} label="strategy" />
          <Chip className={classes.itWeb} label="it & web" />
          <Chip className={classes.ideas} label="marketing" />
        </CardActions> */}
        <CardContent>
          <Tabs
            indicatorColor="secondary"
            // variant='fullWidth'
            value={this.state.value}
            onChange={(event, value) => this.setState({ activeTab: value })}
          >
            <Tab label="Info" />
            <Tab label="I can help with" />
            <Tab label="Projects" />
          </Tabs>
          {this.state.activeTab === 0 && (
            <Typography
              component="p"
              style={{
                maxHeight: 100,
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like. This impressive paella is a perfect
              party dish and a fun meal to cook together with your guests. Add 1
              cup of frozen peas along with the mussels, if you like. This
              impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the
              mussels, if you like.This impressive paella is a perfect party
              dish and a fun meal to cook together with your guests. Add 1 cup
              of frozen peas along with the mussels, if you like.This impressive
              paella is a perfect party dish and a fun meal to cook together
              with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
          )}
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that don’t
              open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
