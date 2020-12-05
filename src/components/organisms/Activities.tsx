import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import * as Font from 'src/constant/fonts';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 100,
    },
    [theme.breakpoints.up('sm')]: {
      paddingBottom: 300,
    },
  },
  activityLeft: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      marginTop: 80,
      flexDirection: 'column',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: 160,
      flexDirection: 'row',
    },
  },
  activityRight: {
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      marginTop: 80,
      flexDirection: 'column',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: 160,
      flexDirection: 'row',
    },
  },
  textSectionLeft: {
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 20,
    },
    [theme.breakpoints.up('md')]: {
      marginRight: 70,
      marginLeft: 70,
      maxWidth: '28%',
    },
  },
  textSectionRight: {
    color: theme.palette.primary.contrastText,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      marginRight: 20,
      textAlign: 'right',
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: 20,
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: 70,
      maxWidth: '28%',
    },
  },
  index: {
    fontFamily: Font.WONDER_UNIT_SANS_REGULAR,
    fontSize: '3rem',
    lineHeight: 0.9,
  },
  caption: {
    fontFamily: Font.HIRAGINO_KAKU_GOTHIC_PRO,
    fontSize: '1.5rem',
    paddingBottom: 30,
  },
  description: {
    fontFamily: Font.HIRAGINO_KAKU_GOTHIC_PRO,
    fontSize: '1rem',
    lineHeight: 2,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 20,
      maxWidth: '80%',
    },
  },
  rightSideImagePC: {
    width: '65%',
    maxHeight: 300,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  rightSideImagePhone: {
    width: '80%',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  rightSideImagePhoneContainer: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  },
  leftSideImagePC: {
    width: '65%',
    maxHeight: 300,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  leftSideImagePhone: {
    width: '80%',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  leftSideImagePhoneContainer: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'flex-start',
    },
  },
}));

export const Activities = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src='/images/what-we-are-doing.png'
          alt='what-we-are-doing'
          width={'70%'}
          style={{ marginTop: 20 }}
        />
      </div>
      <div className={classes.activityLeft}>
        <div className={classes.textSectionLeft}>
          <div className={classes.index}>001</div>
          <div className={classes.caption}>定例会</div>
          <div className={classes.rightSideImagePhoneContainer}>
            <img
              src='/images/activity-1.png'
              alt='activity'
              className={classes.rightSideImagePhone}
            />
          </div>
          <div className={classes.description}>
            定例ミーティングという名の、 <br />
            情報アップデート会という名の、 <br />
            飲み会。
          </div>
        </div>
        <img
          src='/images/activity-1.png'
          alt='activity'
          className={classes.rightSideImagePC}
        />
      </div>
      <div className={classes.activityRight}>
        <img
          src='/images/activity-2.png'
          alt='activity'
          className={classes.leftSideImagePC}
        />
        <div className={classes.textSectionRight}>
          <div className={classes.index}>002</div>
          <div className={classes.caption}>インターン生輩出</div>
          <div className={classes.leftSideImagePhoneContainer}>
            <img
              src='/images/activity-2.png'
              alt='activity'
              className={classes.leftSideImagePhone}
            />
          </div>
          <div className={classes.description}>
            イケてる企業と、インターンを探して
            <br />
            いる優秀な学生をマッチングさせる
            <br />
            プラットフォームを構築します。
          </div>
        </div>
      </div>
      <div className={classes.activityLeft}>
        <div className={classes.textSectionLeft}>
          <div className={classes.index}>003</div>
          <div className={classes.caption}>勉強会</div>
          <div className={classes.rightSideImagePhoneContainer}>
            <img
              src='/images/activity-3.png'
              alt='activity'
              className={classes.rightSideImagePhone}
            />
          </div>
          <div className={classes.description}>
            著名な社長の話を一方的に聞く講演会のような形は、ニーズがあればやろうと思いますが、もっとアクティブな勉強会をしたい。
            例えば、学生メンバーが、協力してくれる会社に行き、戦略を練るとか。
          </div>
        </div>
        <img
          src='/images/activity-3.png'
          alt='activity'
          className={classes.rightSideImagePC}
        />
      </div>
      <div className={classes.activityRight}>
        <img
          src='/images/activity-4.png'
          alt='activity'
          className={classes.leftSideImagePC}
        />
        <div className={classes.textSectionRight}>
          <div className={classes.index}>004</div>
          <div className={classes.caption}>
            おもしろそうな <br />
            イベントの開催
          </div>
          <div className={classes.leftSideImagePhoneContainer}>
            <img
              src='/images/activity-4.png'
              alt='activity'
              className={classes.leftSideImagePhone}
            />
          </div>
          <div className={classes.description}>
            メンバーが魅力的なイベントを発案した際の、また企業や行政など外部から価値のあるイベントのコラボを依頼された場合、Witのアセットを用いて、最高のイベントになるよう全力でサポートします。
          </div>
        </div>
      </div>
    </div>
  );
};
