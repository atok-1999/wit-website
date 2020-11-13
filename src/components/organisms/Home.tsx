import * as React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    mission: {
        border: 'solid blue',
        height: '92.5vh',
        width: '100%',
        textAlign: 'center',
    },
    news: {
        textAlign: 'center',
        border: 'solid',
        height: '90vh',
        width: '100%',
    }
}))

const Home = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.mission}>
                ミッションをここに書く
            </div>
            <div className={classes.news}>
                ニュース・イベント
            </div>
        </>
    )
}
export default Home;