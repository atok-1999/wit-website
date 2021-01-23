import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
      <div style={{ textAlign: 'center' }}>
        <img
          src='/images/what-we-are-doing.png'
          alt='what-we-are-doing'
          width={'65%'}
          style={{ marginTop: 20 }}
        />
      </div>
      <div className={classes.activityLeft}>
        <div className={classes.textSectionLeft}>
          <div className={classes.index}>001</div>
          <div className={classes.caption}>Witマフィアの輩出</div>
          <div className={classes.rightSideImagePhoneContainer}>
            <div className={classes.rightSideImagePhone}>
              <img
                src='/images/activity-image-1.png'
                alt='activity'
                width={'100%'}
              />
            </div>
          </div>
          <div className={classes.description}>
            起業家、VC、インターン生がほとんどを占めるサークルのため
            <br /> 新鮮かつ貴重なインターン情報を共有しています。
            <br /> 実務経験を通して、勝つために必要な「技」を身に付け、
            <br />
            同世代で頭一つ抜けた学生の集団を創ります！
          </div>
        </div>
        <img
          src='/images/activity-image-1.png'
          alt='activity'
          className={classes.rightSideImagePC}
        />
      </div>
      <div className={classes.activityRight}>
        <img
          src='/images/activity-image-2.png'
          alt='activity'
          className={classes.leftSideImagePC}
        />
        <div className={classes.textSectionRight}>
          <div className={classes.index}>002</div>
          <div className={classes.caption}>イノベイティブなイベント</div>
          <div className={classes.leftSideImagePhoneContainer}>
            <div className={classes.leftSideImagePhone}>
              <img
                src='/images/activity-image-2.png'
                alt='activity'
                width={'100%'}
              />
            </div>
          </div>
          <div className={classes.description}>
            ネットやSNSに入り乱れているありふれたビジネスイベント
            <br /> ではなく、これまでにはない革新的なイベントを開催します！
            <br /> 多方面から頂く厳選された協賛イベントを通じて、学生にとって
            <br />
            価値のあるものを提供します！
          </div>
        </div>
      </div>
      <div className={classes.activityLeft}>
        <div className={classes.textSectionLeft}>
          <div className={classes.index}>003</div>
          <div className={classes.caption}>交流会</div>
          <div className={classes.rightSideImagePhoneContainer}>
            <div className={classes.rightSideImagePhone}>
              <img
                src='/images/activity-image-3.png'
                alt='activity'
                width={'100%'}
              />
            </div>
          </div>
          <div className={classes.description}>
            少人数でのミーティングや、飲み会をする中で
            <br /> 互いの現在地を把握したり、情報交換をしたりと、
            <br />
            同士と刺激し合える場を作ります！
          </div>
        </div>
        <img
          src='/images/activity-image-3.png'
          alt='activity'
          className={classes.rightSideImagePC}
        />
      </div>
      <div className={classes.activityRight}>
        <img
          src='/images/activity-image-4.png'
          alt='activity'
          className={classes.leftSideImagePC}
        />
        <div className={classes.textSectionRight}>
          <div className={classes.index}>004</div>
          <div className={classes.caption}>スポーツアクティビティ</div>
          <div className={classes.leftSideImagePhoneContainer}>
            <div className={classes.leftSideImagePhone}>
              <img
                src='/images/activity-image-4.png'
                alt='activity'
                width={'100%'}
              />
            </div>
          </div>
          <div className={classes.description}>
            週末など、定期的にフットサルや野球、
            <br />
            バドミントンを通して親睦を深めよう！
            <br /> また、日常生活にフレッシュな体を取り戻そう！
          </div>
        </div>
      </div>
      <div className={classes.activityLeft}>
        <div className={classes.textSectionLeft}>
          <div className={classes.index}>005</div>
          <div className={classes.caption}>???</div>
          <div className={classes.rightSideImagePhoneContainer}>
            <div className={classes.rightSideImagePhone}>
              <img
                src='/images/activity-image-5.png'
                alt='activity'
                width={'100%'}
              />
            </div>
          </div>
          <div className={classes.description}>
            あなたがWitのアセットを活用して、社会にインパクトのあるイベントを創造してください！
            「子供は誰でも芸術家だ。
            問題は大人になっても、芸術家でいられるかどうかだ。」
            <br />
            －パブロ・ピカソ
          </div>
        </div>
        <img
          src='/images/activity-image-5.png'
          alt='activity'
          className={classes.rightSideImagePC}
        />
      </div>
    </div>
  );
};
