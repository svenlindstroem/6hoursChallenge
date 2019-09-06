import React from 'react';
import { Meteor } from 'meteor/meteor';
import Styles from './styles';

const { productName } = Meteor.settings.public;

const Index = () => (
  <Styles.Index>
    <h1>{`${productName}`}</h1>
    <p />
    <footer>
      <p />
    </footer>
  </Styles.Index>
);

export default Index;
