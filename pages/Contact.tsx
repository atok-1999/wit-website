import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useFormik } from 'formik';
import * as React from 'react';
import * as Font from 'src/constant/fonts';

interface Values {
  company: string;
  name: string;
  phoneNumber: string;
  mail: string;
  content: string;
}

const initialValues: Values = {
  company: '',
  name: '',
  phoneNumber: '',
  mail: '',
  content: '',
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    width: '80%',
    paddingTop: 30,
    paddingBottom: 50,
    maxWidth: '540px',
  },
  typography: {
    fontFamily: Font.LEMONMILK_REGULAR,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
      marginLeft: -15,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
      marginLeft: -20,
      marginBottom: 20,
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  label: {
    margin: theme.spacing(2, 0, 0.5),
    color: theme.palette.secondary.main,
  },
  input: {
    height: '45px',
    borderRadius: '6px',
    padding: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      height: '40px',
    },
  },
  textArea: {
    height: '184px',
    borderRadius: '6px',
    padding: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      height: '160px',
    },
  },
  button: {
    minHeight: '35px',
    width: '80%',
    color: theme.palette.primary.main,
    borderRadius: '56px',
    margin: '42px auto 0',
    display: 'block',
    fontWeight: 600,
  },
  snsSectionForPC: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    marginTop: 100,
    marginLeft: 50,
  },
  snsSectionForPhone: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    display: 'flex',
    alignItems: 'center',
  },
  twitter: {
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      height: 33,
      width: 41,
      marginRight: 15,
    },
    [theme.breakpoints.up('sm')]: {
      width: 58,
      height: 46,
      marginRight: 15,
    },
    [theme.breakpoints.up('md')]: {
      width: 82,
      height: 66,
      marginRight: 30,
    },
  },
  instagram: {
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      height: 44,
      width: 44,
    },
    [theme.breakpoints.up('sm')]: {
      width: 64,
      height: 64,
    },
    [theme.breakpoints.up('md')]: {
      width: 86,
      height: 86,
    },
  },
}));

const Contact = () => {
  const classes = useStyles();

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (values: Values) => {
    setIsSubmitted(false);
    fetch('/api/form', {
      method: 'POST',
      mode: 'same-origin',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(values),
    }).catch((err) => console.error(err));
    setIsSubmitted(true);
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
  });

  React.useEffect(() => {
    if (isSubmitted) {
      formik.resetForm();
    }
  }, [isSubmitted]);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            color='secondary'
            variant='h4'
            className={classes.typography}
          >
            CONTACT
          </Typography>
          <div className={classes.snsSectionForPhone}>
            <a href='https://twitter.com/Wit_waseda' target='_blank'>
              <img
                src='images/twitter-icon@3x.png'
                alt='twitter'
                className={classes.twitter}
              />
            </a>

            <a href='https://www.instagram.com/wit_waseda' target='_blank'>
              <img
                src='images/instagram-icon@3x.png'
                alt='instagram'
                className={classes.instagram}
              />
            </a>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <label htmlFor='company' className={classes.label}>
            会社名
          </label>
          <input
            id='company'
            name='company'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.company}
            className={classes.input}
          />
          <label htmlFor='name' className={classes.label}>
            お名前
          </label>
          <input
            id='name'
            name='name'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.name}
            className={classes.input}
          />
          <label htmlFor='phoneNumber' className={classes.label}>
            電話番号
          </label>
          <input
            id='phoneNumber'
            name='phoneNumber'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            className={classes.input}
          />
          <label htmlFor='mail' className={classes.label}>
            メールアドレス
          </label>
          <input
            id='mail'
            name='mail'
            type='email'
            onChange={formik.handleChange}
            value={formik.values.mail}
            className={classes.input}
          />
          <label htmlFor='content' className={classes.label}>
            お問い合わせ内容
          </label>
          <textarea
            id='content'
            name='content'
            onChange={formik.handleChange}
            value={formik.values.content}
            className={classes.textArea}
          />
          <Button
            type='submit'
            color='secondary'
            variant='contained'
            className={classes.button}
          >
            お問い合わせ内容を送信
          </Button>
        </form>
      </div>
      <div className={classes.snsSectionForPC}>
        <div
          style={{
            fontSize: '1rem',
            color: 'white',
            fontWeight: 700,
            marginBottom: 20,
            fontFamily: Font.HIRAGINO_KAKU_GOTHIC_PRO,
          }}
        >
          学生の方はSNSのDMから！
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <a href='https://twitter.com/Wit_waseda' target='_blank'>
            <img
              src='images/twitter-icon@3x.png'
              alt='twitter'
              className={classes.twitter}
            />
          </a>

          <a href='https://www.instagram.com/wit_waseda' target='_blank'>
            <img
              src='images/instagram-icon@3x.png'
              alt='instagram'
              className={classes.instagram}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
