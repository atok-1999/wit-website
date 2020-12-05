import * as React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Router from 'next/router';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down('sm')]: {
      height: 1500,
    },
    [theme.breakpoints.up('md')]: {
      height: 2000,
    },
    backgroundColor: theme.palette.primary.main,
    justifyContent: 'center',
  },
  firstPhoto: {
    objectFit: 'cover',
    [theme.breakpoints.down('xs')]: {
      height: 120,
      width: 300,
    },
    [theme.breakpoints.up('sm')]: {
      height: 200,
      width: 450,
    },
    [theme.breakpoints.up('md')]: {
      height: 300,
      width: 600,
    },
  },
  photo: {
    objectFit: 'cover',
    [theme.breakpoints.down('xs')]: {
      height: 120,
      width: 300,
    },
    [theme.breakpoints.up('sm')]: {
      height: 200,
      width: 450,
    },
    [theme.breakpoints.up('md')]: {
      height: 200,
      width: 350,
    },
  },
  title: {
    fontSize: '1rem',
    cursor: 'pointer',
    paddingTop: 10,
    color: theme.palette.primary.contrastText,
  },
}));

const Blog = ({ blog }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container justify={'space-between'}>
        {blog.map((blog, index) =>
          index === 0 ? (
            <Grid item xs={12} key={blog.id}>
              <div
                onClick={() =>
                  Router.push(`Blog/${blog.id}`).then(() =>
                    window.scrollTo(0, 0)
                  )
                }
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: 20,
                }}
              >
                <img
                  src={blog.image.url}
                  alt=''
                  className={classes.firstPhoto}
                />
                <div className={classes.title}>{blog.title}</div>
              </div>
            </Grid>
          ) : (
            <Grid item xs={12} md={6} key={blog.id}>
              <div
                onClick={() =>
                  Router.push(`Blog/${blog.id}`).then(() =>
                    window.scrollTo(0, 0)
                  )
                }
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: 20,
                }}
              >
                <img
                  src={blog.image.url}
                  alt=''
                  className={classes.photo}
                  style={{ borderRadius: 21 }}
                />
                <div className={classes.title}>{blog.title}</div>
              </div>
            </Grid>
          )
        )}
      </Grid>
    </div>
  );
};

export default Blog;

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://wit-api.microcms.io/api/v1/blog', key)
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
    },
  };
};
