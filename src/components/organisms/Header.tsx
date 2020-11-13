import * as React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        height: '7.5vh',
        backgroundColor: theme.palette.primary.light,
        marginTop: 'auto'
    },
    navigation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    siteName: {
        Color: '#endregion',
        justifyContent: 'center',
        fontSize: '50px',
        color: theme.palette.primary.contrastText,
        marginLeft: '10px',
    },
    navList: {
        display: 'flex',
        displayDirection: 'row',
        marginRight: '20px'
    },
    nav: {
        color: theme.palette.primary.contrastText,
        listStyle: 'none',
        margin: 'auto 10px',
    }
}))

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.navigation}>
                <div className={classes.siteName}>Wit</div>
                <ul className={classes.navList}>
                    <li className={classes.nav}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={classes.nav}>
                        <Link href='/about'>About</Link>
                    </li>
                    <li className={classes.nav}>
                        <Link href='/blog'>Blog</Link>
                    </li>
                    <li className={classes.nav}>
                        <Link href="/contact">Contect</Link>
                    </li>
                </ul>
            </div>

        </div>
    )
};

export default Header;