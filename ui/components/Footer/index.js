import React from 'react';
import { Grid } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { year } from '../../../modules/dates';
import Styles from './styles';

const { productName, copyrightStartYear } = Meteor.settings.public;
const copyrightYear = () => {
  const currentYear = year();
  return currentYear === copyrightStartYear
    ? copyrightStartYear
    : `${copyrightStartYear}-${currentYear}`;
};

const Footer = () => (
  <Styles.Footer>
    <Grid>
      <p className="pull-left">
        &copy;
        {` ${copyrightYear()} ${productName}`}
      </p>
    </Grid>
  </Styles.Footer>
);

Footer.propTypes = {};

export default Footer;
