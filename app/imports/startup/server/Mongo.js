import { Meteor } from 'meteor/meteor';
import { Adopts } from '../../api/adopt/Adopts';
import { Persons } from '../../api/person/Persons';
import { Volunteers } from '../../api/volunteer/Volunteers';
import { Snaps } from '../../api/snap/Snaps';

/* eslint-disable no-console */

function addAdopt(data) {
  console.log(`  Adding: ${data.name} (${data.gender})`);
  Adopts.collection.insert(data);
}

function addPerson(data) {
  console.log(`  Adding: ${data.lastName} (${data.email})`);
  Persons.collection.insert(data);
}

function addVolunteer(data) {
  console.log(`  Adding: ${data.lastName} (${data.email})`);
  Volunteers.collection.insert(data);
}

if (Adopts.collection.find().count() === 0) {
  if (Meteor.settings.defaultAdopts) {
    console.log('Creating default data.');
    Meteor.settings.defaultAdopts.map(data => addAdopt(data));
  }
}

if (Persons.collection.find().count() === 0) {
  if (Meteor.settings.defaultPersons) {
    console.log('Creating default data.');
    Meteor.settings.defaultPersons.map(data => addPerson(data));
  }
}

if (Volunteers.collection.find().count() === 0) {
  if (Meteor.settings.defaultVolunteers) {
    console.log('Creating default data.');
    Meteor.settings.defaultVolunteers.map(data => addVolunteer(data));
  }
}

function addSnap(data) {
  console.log(`  Adding: ${data.submittedOn} (${data.submittedBy})`);
  Snaps.collection.insert(data);
}

if (Snaps.collection.find().count() === 0) {
  if (Meteor.settings.defaultSnaps) {
    console.log('Creating default data.');
    Meteor.settings.defaultSnaps.map(data => addSnap(data));
  }
}
