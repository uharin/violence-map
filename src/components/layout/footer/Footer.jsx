import React from 'react';
import withStyles from 'react-jss';
import styles from './FooterStyles';

const Footer = ({ classes }) => {
  return (
    <footer className={classes.footer}>
      <div>Footer</div>
    </footer>
  );
}

export default withStyles(styles)(Footer);
