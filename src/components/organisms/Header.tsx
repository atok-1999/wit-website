import * as React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        height: '7.5vh',
        backgroundColor: theme.palette.primary.main,
        marginTop: 'auto'
    }
}))

const Header = () => {
    const classes = useStyles();
    return (
        <div>aiuero</div>
    )
};

export default Header;