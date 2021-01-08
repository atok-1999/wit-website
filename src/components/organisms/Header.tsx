import * as React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import * as Font from 'src/constant/fonts';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    flexGrow: 1,
    fontFamily: Font.CORPORATE_LOGO_ROUNDED,
    cursor: 'pointer',
  },
  menu: {
    fontFamily: Font.LEMONMILK_REGULAR,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Link href='/'>
            <Typography variant='h6' className={classes.title}>
              <a>Wit</a>
            </Typography>
          </Link>
          <Link href='/About'>
            <Button color='inherit' className={classes.menu}>
              <a>about</a>
            </Button>
          </Link>
          <Link href='/Activities'>
            <Button color='inherit' className={classes.menu}>
              <a>activities</a>
            </Button>
          </Link>
          <Link href='/Blog'>
            <Button color='inherit' className={classes.menu}>
              <a>blog</a>
            </Button>
          </Link>
          <Link href='/Contact'>
            <Button color='inherit' className={classes.menu}>
              <a>contact</a>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
