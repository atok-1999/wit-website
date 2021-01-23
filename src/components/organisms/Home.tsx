import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as Font from 'src/constant/fonts';
import Router from 'next/router';

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      height: 280,
    },
    [theme.breakpoints.up('sm')]: {
      height: 400,
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
    [theme.breakpoints.down('xs')]: {
      marginTop: 30,
      height: 750,
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: 60,
      height: 700,
    },
    [theme.breakpoints.up('md')]: {
      height: 900,
    },
  },
  subtitleIndex: {
    fontFamily: Font.WONDER_UNIT_SANS_REGULAR,
    fontSize: '3rem',
    [theme.breakpoints.down('xs')]: {
      marginTop: 40,
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: 40,
    },
    [theme.breakpoints.up('md')]: {
      marginTop: 110,
    },
  },
  subtitleCaption: {
    fontFamily: Font.WONDER_UNIT_SANS_REGULAR,
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
    },
  },
  whoWeAreDescriptionHeader: {
    fontFamily: Font.HIRAGINO_KAKU_GOTHIC_PRO,
    fontWeight: 700,
    marginTop: 40,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 30,
      fontSize: '1.2rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.4rem',
      marginBottom: 60,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.7rem',
      marginBottom: 60,
    },
  },
  whoWeAreDescription: {
    fontFamily: Font.HIRAGINO_KAKU_GOTHIC_PRO,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 20,
      marginRight: 20,
      fontSize: '1.05rem',
      lineHeight: 1.8,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.1rem',
      lineHeight: 1.9,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.45em',
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
      width: '60%',
      marginTop: -70,
    },
    [theme.breakpoints.up('md')]: {
      width: '55%',
      marginTop: -120,
    },
    [theme.breakpoints.up('lg')]: {
      width: '55%',
      marginTop: -160,
    },
  },
  visionSection: {
    color: theme.palette.secondary.main,
    [theme.breakpoints.down('xs')]: {
      height: 700,
    },
    [theme.breakpoints.up('sm')]: {
      height: 800,
    },
    [theme.breakpoints.up('md')]: {
      height: 950,
    },
  },
  visionImg: {
    width: '62%',
    zIndex: 100,
    marginTop: 20,
  },
  visionDescription: {
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      marginTop: 60,
      marginLeft: 20,
      fontSize: '1.05rem',
      lineHeight: 1.8,
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: 60,
      marginLeft: 30,
      fontSize: '1.1rem',
      lineHeight: 1.9,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.45rem',
      marginTop: 120,
      marginLeft: 50,
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
            <div className={classes.logo}>
              <img src='/images/logo-white.png' alt='logo' width={'100%'} />
            </div>
            <div className={classes.excitingFeeling}>
              <img
                src='/images/exciting-feeling.png'
                alt='exciting-feeling'
                width={'100%'}
              />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div className={classes.video}>
              <img
                src='/images/video-sample-img.png'
                alt='video'
                width={'100%'}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={classes.whoWeAreSection}>
        <div className={classes.subtitleIndex}>001</div>
        <div className={classes.subtitleCaption}>WHO WE ARE</div>
        <div className={classes.whoWeAreDescriptionHeader}>
          早稲田発「革新を創造する」スタートアップサークル
        </div>
        <div className={classes.whoWeAreDescription}>
          「学生で起業？」
          <br />
          早いものか。生き急いでるものか。
          <br />
          彼らは周りより少し早く「やりたいこと」を見つけただけ。
          <br />
          自分の知的好奇心はどこに向いているのか、どうすれば満たされるのか。
          <br />
          己と向き合い、行動するのが、大学という期間なのではないか。
          <br />
          チャレンジでしか満たされない自分がいることを知っているのでは？
          <br />
          <br />
          熱狂を求めるもの、ここに集え。
          <br />
          <br />
          そして、日本、世界にインパクトを与える革新を創造しよう。
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
          <div className={classes.visionImg}>
            <img src='/images/vision.png' alt='vision' width={'100%'} />
          </div>
        </div>
        <div className={classes.visionDescription}>
          周囲さえも熱くさせるエネルギー、
          <br />
          非凡な知恵、とどまることを知らない向上心、
          <br />
          比類なき感性。
          <br />
          多種多様な才能を持つ者達が集い、
          <br />
          切磋琢磨し、
          <br />
          数年後、日本や世界を席巻するような人材が生まれる。
          <br />
          そんな場所を目指しています。
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
              src='/images/event-image-1.png'
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
              src='/images/event-image-2.png'
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
              src='/images/event-image-3.png'
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
              src='/images/event-image-4.png'
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
