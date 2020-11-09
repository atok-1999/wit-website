import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import * as Font from '../../constant/fonts'

const useStyles = makeStyles((theme) => ({
    mission: {
        height: 100,
        fontFamily: Font.WONDER_UNIT_SANS_BOLD
    },
}))

const Home = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.mission}>
                0123
            </div>
        </>
    )
}
export default Home;