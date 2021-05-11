import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SubmitField, TextField, SelectField, LongTextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Snaps } from '../../api/snap/Snaps';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  image: String,
  submittedBy: String,
  submittedOn: String,
  caption: String,
  locatedNear: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddSnap extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { image, submittedBy, submittedOn, caption, locatedNear } = data;
    const owner = Meteor.user().username;
    Snaps.collection.insert({ image, submittedBy, submittedOn, caption, locatedNear, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'New Snap Added', 'success');
          formRef.reset();
        }
      });
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  render() {
    let fRef = null;
    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center" inverted>Snap A Cat</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
            <Segment>
              <TextField name='image'/>
              <TextField name='submittedBy'/>
              <TextField name='submittedOn'/>
              <TextField name='caption'/>
              <TextField name='locatedNear'/>
              <SubmitField value='Submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

export default AddSnap;
