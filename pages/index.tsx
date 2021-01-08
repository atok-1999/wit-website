import * as React from 'react';
import Home from 'src/components/organisms/Home';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Index = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Home></Home>
    </div>
  );
};

export default Index;
