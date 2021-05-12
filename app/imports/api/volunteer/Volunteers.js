import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The AdoptsCollection. It encapsulates state and variable values for Adopt.
 */
class VolunteersCollection {
  constructor() {
    // The name of this collection.
    this.name = 'VolunteersCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      firstName: String,
      lastName: String,
      email: String,
      phoneNumber: String,
      status: {
        type: String,
        allowedValues: ['Active', 'Denied', 'Hiatus', 'Pending Review'],
        defaultValue: 'Pending Review',
      },
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the AdoptsCollection.
 * @type {AdoptsCollection}
 */
export const Volunteers = new VolunteersCollection();
