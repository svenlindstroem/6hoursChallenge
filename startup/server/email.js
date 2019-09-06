import { Meteor } from 'meteor/meteor';

if (Meteor.isDevelopment) {
  if (Meteor.settings.private && Meteor.settings.private.MAIL_URL) {
    process.env.MAIL_URL = Meteor.settings.private.MAIL_URL;
  }
}
