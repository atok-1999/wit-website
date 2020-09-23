import * as React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    mission: {
        height: '90vh',
        width: '100%',
    },
    news: {
        height: '90vh',
        width: '100%',
    }
}))

const Home = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.mission}>
                ミッション
            </div>
            <div className={classes.news}>
                ニュース・イベント
            </div>
        </>
    )
}
export default Home;