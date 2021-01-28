import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.85rem',
      marginLeft: 20,
      marginRight: 20,
      marginTop: 75,
      marginBottom: 100,
    },
    [theme.breakpoints.up('sm')]: {
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
          src='/images/exciting-feeling2.jpg'
          alt='exciting-feeling'
          width={'70%'}
          style={{ marginTop: 20 }}
        />
      </div>
      <div style={{ position: 'relative', marginTop: 50 }}>
        <img src='/images/about-image.png' alt='about' width={'60%'} />
        <img
          src='/images/stimulating-environment.png'
          alt='about'
          style={{ position: 'absolute', right: 0, bottom: -25, width: '60%' }}
        />
      </div>
      <div className={classes.description}>
        「やりたいこと」は <br />
        　みつかったか？
        <br />
        <br />
        刺激がある場所。
        <br />
        仲間がいる場所。
        <br />
        好きを知る場所。
        <br />
        ここに来ると、
        <br />
        普段の学生生活では思いつかない新しいアイデアが浮かぶ。
        <br />
        仲間から刺激をもらえてモチベーションが200%になる。
        <br />
        大人の世界でも通用するビジネス経験の機会があふれている。
        <br />
        そんな場所を目指しています。
      </div>
    </div>
  );
};
