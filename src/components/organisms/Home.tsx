import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import * as Font from 'src/constant/fonts'

const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.down('sm')]: {
            height: 300,        
        },
        [theme.breakpoints.up('md')]: {
            height: 550,        
        },
    },
    whoWeAreSection: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        backgroundColor: theme.palette.secondary.main,
        [theme.breakpoints.down('sm')]: {
            height: 400,
        },
        [theme.breakpoints.up('md')]: {
            height: 540,
        },
    },
    subtitleIndex: {
        fontFamily: Font.WONDER_UNIT_SANS_REGULAR,
        fontSize: '3rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: 30,
        },
        [theme.breakpoints.up('md')]: {
            marginTop: 100, 
        },
    },
    subtitleCaption: {
        fontFamily: Font.WONDER_UNIT_SANS_REGULAR,
        fontSize: '2.5rem'
    },
    whoWeAreDescription: {
        fontFamily: Font.HIRAGINO_KAKU_GOTHIC_PRO,
        marginTop: 40, 
        lineHeight: 1.8,
        paddingRight: 10,
        paddingLeft: 10,
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem', 
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.6rem', 
        },
    },
    logo: {
        width: '45%',
        zIndex: 100,
        [theme.breakpoints.down('sm')]: {
            marginTop: 20,
            marginLeft: 20
        },
        [theme.breakpoints.up('md')]: {
            marginTop: 45,
            marginLeft: 45
        },
    },
    excitingFeeling: {
        width: '45%',
        zIndex: 100,
        [theme.breakpoints.down('sm')]: {
            marginTop: 40,
            marginLeft: 8
        },
        [theme.breakpoints.up('md')]: {
            marginTop: 87,
        },
    },
    video: {
        [theme.breakpoints.down('sm')]: {
            width: '60%',
            marginTop: -30
        },
        [theme.breakpoints.up('md')]: {
            width: '50%',
            marginTop: -100
        },
    },
    visionSection: {
        color: theme.palette.secondary.main ,
        [theme.breakpoints.down('sm')]: {
            height: 500,
        },
        [theme.breakpoints.up('md')]: {
            height: 1000,
        },
    },
    visionImg: {
        width: '70%',
        zIndex: 100,
        marginTop: 20
    },
    visionDescription: {
        display: 'flex',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
            marginTop: 50,
            marginLeft: 20,
            lineHeight: 1.6
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
            marginTop: 100,
            marginLeft: 30,
            lineHeight: 1.8,
        },
    }
}))

const Home = () => {
    const classes = useStyles();

    return (
        <div style={{width: '100%'}} >
            <div className={classes.main}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex'}} >
                    <img src="static/logo-white.png" alt="logo" className={classes.logo} />
                    <img src="static/exciting-feeling.png" alt="exciting-feeling" className={classes.excitingFeeling} />
                    </div>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <img src="static/video-sample-img.png" alt="video" className={classes.video} />
                    </div>
                </div>
            </div>
            <div className={classes.whoWeAreSection} >
               <div className={classes.subtitleIndex}  >
                   001
               </div>
               <div className={classes.subtitleCaption}>
                   WHO WE ARE
               </div>
               <div className={classes.whoWeAreDescription} >
                早稲田大学のイケイケスタートアップサークル。 <br/>
                起業したいやつら、行動力のある奴ら、<br/>
                ここに、あつまれ。<br/>
               </div>
            </div>
            <div className={classes.visionSection}>
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: 30}} >
                    <div className={classes.subtitleIndex}  >
                        002
                    </div>
                    <div className={classes.subtitleCaption}>
                        VISION
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}} >
                <img src="static/vision.png" alt="vision" className={classes.visionImg} /> 
                </div>
                <div className={classes.visionDescription} >
                常にHOTで刺激のある場所。<br/>
                「ここにくるといつもアイデアが浮かぶ」<br/>
                「モチベーションが上がる」<br/>
                そんな学生の居場所を目指します。<br/>
                </div>
            </div>
        </div>
    )
}
export default Home;