import { Meteor } from 'meteor/meteor';
import { Adopts } from '../../api/adopt/Adopts';
import { Persons } from '../../api/person/Persons';

/* eslint-disable no-console */

function addAdopt(data) {
  console.log(`  Adding: ${data.name} (${data.gender})`);
  Adopts.collection.insert(data);
}

function addPerson(data) {
  console.log(`  Adding: ${data.lastName} (${data.mail})`);
  Persons.collection.insert(data);
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
