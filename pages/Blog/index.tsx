import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '120vh',
    [theme.breakpoints.down('xs')]: { paddingBottom: 50 },
    [theme.breakpoints.up('sm')]: { paddingBottom: 200 },
    [theme.breakpoints.up('md')]: { paddingBottom: 300 },
    [theme.breakpoints.up('lg')]: { paddingBottom: 350 },
  },
  blogItem: {
    borderRadius: 20,
    backgroundColor: theme.palette.secondary.main,
    width: 494,
    maxWidth: '80%',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: { height: 180, marginTop: 40 },
    [theme.breakpoints.up('sm')]: { height: 201, marginTop: 60 },
  },
}));

interface Props {
  blogs: any[] | undefined;
}

const Blog = ({ blogs }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {blogs.length > 0 &&
        blogs.map((blog, index) => (
          <iframe key={blog.id} className={classes.blogItem} src={blog.url} />
        ))}
      {!blogs ||
        (blogs.length === 0 && (
          <div style={{ color: 'white', fontSize: '2rem', marginTop: 30 }}>
            ブログページ準備中
          </div>
        ))}
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
      blogs: data.contents,
      revalidate: 60 * 30
    },
  };
};
