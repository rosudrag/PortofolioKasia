import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 0,
        width: '100%'
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    appBar: {
        backgroundColor: 'white'
    }
});

function NavBar(props) {
    const classes = props.classes;
    return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="primary" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="primary" className={classes.flex}>
          <Button color="primary" href="/">Katarzyna Niedziela</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
