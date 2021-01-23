import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.primary.contrastText,
    fontSize: '1rem',
    backgroundColor: theme.palette.primary.main,
    paddingTop: 10,
    paddingBottom: 10,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      Copyright © 2021 Wit All Rights Reserved.
    </div>
  );
};

export default Footer;
