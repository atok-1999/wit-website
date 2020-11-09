import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import * as Font from 'src/constant/fonts'

const useStyles = makeStyles((theme) => ({
    main: {
        height: 550,
        backgroundColor: theme.palette.primary.main
    },
    WhoWeAreSection: {
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        backgroundColor: theme.palette.secondary.main
    },
    subtitleIndex: {
        fontFamily: Font.WONDER_UNIT_SANS_REGULAR,
        fontSize: 58
    },
    subtitleCaption: {
        fontFamily: Font.WONDER_UNIT_SANS_REGULAR,
        fontSize: 38
    },
    body: {
        fontFamily: Font.HIRAGINO_KAKU_GOTHIC_PRO,
        fontSize: 24,
    }
}))

const Home = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.main}>
                <div style={{display: 'flex'}}>
                    <img src="static/logo-white.png" alt="logo" style={{width: 448, marginLeft: 88}} />
                    <img src="static/exciting-feeling.png" alt="logo" style={{width: 552, marginTop: 50, marginLeft: 30}} />
                </div>
            </div>
            <div className={classes.WhoWeAreSection} >
               <div className={classes.subtitleIndex} style={{marginTop: 100}} >
                   001
               </div>
               <div className={classes.subtitleCaption}>
                   WHO WE ARE
               </div>
               <div className={classes.body} style={{marginTop: 30, lineHeight: 1.8}}>
                早稲田大学のイケイケスタートアップサークル。 <br/>
                起業したいやつら、行動力のある奴ら、<br/>
                ここに、あつまれ。<br/>
               </div>
            </div>
        </>
    )
}
export default Home;