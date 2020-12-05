import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import * as Font from 'src/constant/fonts';
import Router from 'next/router';

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
    fontSize: '2.5rem',
  },
  whoWeAreDescription: {
    fontFamily: Font.HIRAGINO_KAKU_GOTHIC_PRO,
    marginTop: 40,
    lineHeight: 1.8,
    paddingRight: 10,
    paddingLeft: 10,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      fontWeight: '700',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.6rem',
      fontWeight: '700',
    },
  },
  logo: {
    width: '45%',
    zIndex: 100,
    [theme.breakpoints.down('sm')]: {
      marginTop: 20,
      marginLeft: 20,
    },
    [theme.breakpoints.up('md')]: {
      marginTop: 45,
      marginLeft: 45,
    },
  },
  excitingFeeling: {
    width: '45%',
    zIndex: 100,
    [theme.breakpoints.down('sm')]: {
      marginTop: 40,
      marginLeft: 8,
    },
    [theme.breakpoints.up('md')]: {
      marginTop: 87,
    },
  },
  video: {
    [theme.breakpoints.down('xs')]: {
      width: '78%',
      marginTop: -30,
    },
    [theme.breakpoints.up('sm')]: {
      width: '55%',
      marginTop: -90,
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
      marginTop: -100,
    },
  },
  visionSection: {
    color: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
      height: 540,
    },
    [theme.breakpoints.up('md')]: {
      height: 870,
    },
  },
  visionImg: {
    width: '65%',
    zIndex: 100,
    marginTop: 20,
  },
  visionDescription: {
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      marginTop: 60,
      marginLeft: 20,
      lineHeight: 1.6,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.6rem',
      marginTop: 120,
      marginLeft: 50,
      lineHeight: 1.8,
    },
  },
  newsEventSection: {
    color: theme.palette.secondary.main,
    [theme.breakpoints.down('xs')]: {
      height: 600,
    },
    [theme.breakpoints.up('sm')]: {
      height: 800,
    },
    [theme.breakpoints.up('md')]: {
      height: 1500,
    },
  },
  eventImgContainer: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
  },
  hoverContainer: {
    position: 'relative',
    overflow: 'hidden',
    maxWidth: '22%',
  },
  hoverCaption: {
    fontFamily: Font.LEMONMILK_REGULAR,
    fontSize: '1rem',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
    color: '#fff',
  },
  hoverMask: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.01,
    backgroundColor: 'rgba(0,0,0,0.4)',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    '&:hover': {
      opacity: 1,
    },
  },
  seeActivities: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: 50,
    },
    [theme.breakpoints.up('md')]: {
      marginTop: 200,
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div style={{ width: '100%' }}>
      <div className={classes.main}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex' }}>
            <img
              src='/images/logo-white.png'
              alt='logo'
              className={classes.logo}
            />
            <img
              src='/images/exciting-feeling.png'
              alt='exciting-feeling'
              className={classes.excitingFeeling}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <img
              src='/images/video-sample-img.png'
              alt='video'
              className={classes.video}
            />
          </div>
        </div>
      </div>

      <div className={classes.whoWeAreSection}>
        <div className={classes.subtitleIndex}>001</div>
        <div className={classes.subtitleCaption}>WHO WE ARE</div>
        <div className={classes.whoWeAreDescription}>
          早稲田大学のイケイケスタートアップサークル。 <br />
          起業したいやつら、行動力のある奴ら、
          <br />
          ここに、あつまれ。
          <br />
        </div>
      </div>

      <div className={classes.visionSection}>
        <div
          style={{ display: 'flex', flexDirection: 'column', marginLeft: 30 }}
        >
          <div className={classes.subtitleIndex}>002</div>
          <div className={classes.subtitleCaption}>VISION</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src='/images/vision.png'
            alt='vision'
            className={classes.visionImg}
          />
        </div>
        <div className={classes.visionDescription}>
          常にHOTで刺激のある場所。
          <br />
          「ここにくるといつもアイデアが浮かぶ」
          <br />
          「モチベーションが上がる」
          <br />
          そんな学生の居場所を目指します。
          <br />
        </div>
      </div>

      <div className={classes.newsEventSection}>
        <div
          style={{ display: 'flex', flexDirection: 'column', marginLeft: 30 }}
        >
          <div className={classes.subtitleIndex}>003</div>
          <div className={classes.subtitleCaption}>NEWS/EVENT</div>
        </div>
        <div
          className={classes.eventImgContainer}
          onClick={() => Router.push('/Blog').then(() => window.scrollTo(0, 0))}
        >
          <div className={classes.hoverContainer}>
            <img
              src='/images/event-sample-1.png'
              alt='event-1'
              style={{ width: '100%' }}
            />
            <div className={classes.hoverMask}>
              <div className={classes.hoverCaption}>
                NEWS
                <br />①
              </div>
            </div>
          </div>
          <div className={classes.hoverContainer}>
            <img
              src='/images/event-sample-2.png'
              alt='event-1'
              style={{ width: '100%' }}
            />
            <div className={classes.hoverMask}>
              <div className={classes.hoverCaption}>
                NEWS
                <br />②
              </div>
            </div>
          </div>
          <div className={classes.hoverContainer}>
            <img
              src='/images/event-sample-3.png'
              alt='event-1'
              style={{ width: '100%' }}
            />
            <div className={classes.hoverMask}>
              <div className={classes.hoverCaption}>
                EVENT
                <br />③
              </div>
            </div>
          </div>
          <div className={classes.hoverContainer}>
            <img
              src='/images/event-sample-4.png'
              alt='event-1'
              style={{ width: '100%' }}
            />
            <div className={classes.hoverMask}>
              <div className={classes.hoverCaption}>
                EVENT
                <br />④
              </div>
            </div>
          </div>
        </div>

        <div className={classes.seeActivities}>
          <div
            style={{ width: '88%', position: 'relative' }}
            onClick={() =>
              Router.push('/Activities').then(() => window.scrollTo(0, 0))
            }
          >
            <img
              src='/images/see-activities.png'
              alt='activities'
              width={'100%'}
            />
            <div
              style={{
                position: 'absolute',
                fontFamily: Font.LEMONMILK_REGULAR,
                fontSize: '1rem',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%)`,
                zIndex: 10,
                pointerEvents: 'none',
              }}
            >
              SEE ACTIVITES
            </div>
            <div className={classes.hoverMask}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
