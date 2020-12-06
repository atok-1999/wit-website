import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import * as Font from 'src/constant/fonts';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
  },
  description: {
    fontFamily: Font.HIRAGINO_KAKU_GOTHIC_PRO,
    color: theme.palette.primary.contrastText,
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 2.1,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
      marginLeft: 35,
      marginTop: 75,
      marginBottom: 100,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.6rem',
      marginLeft: 100,
      marginTop: 100,
      marginBottom: 250,
    },
  },
}));

export const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div style={{ textAlign: 'center' }}>
        <img
          src='/images/exciting-feeling-2.png'
          alt='exciting-feeling'
          width={'70%'}
          style={{ marginTop: 20 }}
        />
      </div>
      <div style={{ position: 'relative', marginTop: 50 }}>
        <img src='/images/about-sample.png' alt='about' width={'60%'} />
        <img
          src='/images/stimulating-environment.png'
          alt='about'
          style={{ position: 'absolute', right: 0, bottom: -25, width: '60%' }}
        />
      </div>
      <div className={classes.description}>
        ここにくると、
        <br />
        新しいアイデアが浮かぶ。
        <br />
        モチベーションが上がる。
        <br />
        みんなから反応をもらえる。
        <br />
        いつもHOTで燃えている。
        <br />
        そんな場所を目指しています。
      </div>
    </div>
  );
};
