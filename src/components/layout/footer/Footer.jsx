import React from 'react';
import styles from './FooterStyles';
import withStyles from 'react-jss';


const Footer = ({ classes }) => {
  return (
    <footer className={classes.footer}>
      <div>Footer</div>
    </footer>
  )
};

export default withStyles(styles)(Footer);