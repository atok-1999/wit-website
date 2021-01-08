import * as React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import * as Font from 'src/constant/fonts'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.primary.main,
        padding: 0,
        margin: 0,
    },
    title: {
        flexGrow: 1,
        fontFamily: Font.CORPORATE_LOGO_ROUNDED
    },
    menu: {
        fontFamily: Font.LEMONMILK_REGULAR
    }
}))

const Header = () => {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Wit
          </Typography>
          <Button color="inherit" className={classes.menu}>ABOUT</Button>
          <Button color="inherit" className={classes.menu}>ACTIVITIES</Button>
          <Button color="inherit" className={classes.menu}>BLOG</Button>
          <Link href="/contact"><Button color="inherit" className={classes.menu}>CONTACT</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
    )
};

export default Header;