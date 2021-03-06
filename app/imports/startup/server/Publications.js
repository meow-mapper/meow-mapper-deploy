import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Adopts } from '../../api/adopt/Adopts';
import { Persons } from '../../api/person/Persons';
import { Snaps } from '../../api/snap/Snaps';
import { Volunteers } from '../../api/volunteer/Volunteers';

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise publish nothing.
Meteor.publish(Adopts.userPublicationName, function () {
  if (this.userId) {
    return Adopts.collection.find({ });
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise publish nothing.

Meteor.publish(Adopts.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Adopts.collection.find();
  }
  return this.ready();
});

Meteor.publish(Persons.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Persons.collection.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish(Volunteers.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Volunteers.collection.find({ owner: username });
  }
  return this.ready();
});

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise publish nothing.
Meteor.publish(Snaps.userPublicationName, function () {
  if (this.userId) {
    return Snaps.collection.find();
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise publish nothing.

Meteor.publish(Persons.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Persons.collection.find();
  }
  return this.ready();
});

Meteor.publish(Volunteers.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Volunteers.collection.find();
  }
  return this.ready();
});

Meteor.publish(Snaps.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Snaps.collection.find();
  }
  return this.ready();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
