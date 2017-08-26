import React, { Component } from 'react';
// Redux form stuff
// redux form allows this component to talk to redux store (like connect)
import { Field, reduxForm } from 'redux-form';


// component={} property
// field does not know how to show on the screen, only to interact to redux form
//  needs a jsx blob to help with what it looks like

class PostsNew extends Component{

  // this field contains an event renderer to wire up to the Field
  // formatting style goes here
  renderField(field){
    return(
      <div className='form-group'>
        <label>{field.label}</label>
        <input
          className='form-control'
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  // Label is an arbitrary property that gets passed down and can be re-used
  // you can add many properties to it
  render(){
    return(
      <form>
        <Field
          name='title'
          component={this.renderField}
          label='Title'
          type='text'
        />
        <Field
          name='categories'
          component={this.renderField}
          label='Categories'
          type='text'
        />
        <Field
          name='content'
          component={this.renderField}
          label='Post content'
          type='text'
        />
      </form>
    );
  }
}

// adds helper function for validation
// values contain all the values in the form
function validate(values){
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title){
    errors.title = 'Enter title';
  }
  if (!values.categories){
    errors.categories = 'Enter categories';
  }
  if (!values.content){
    errors.content = 'Enter content';
  }
  // Ir errors is blank the form is good to go
  return errors;
}

// Name of the for is the form thingy in the middle

// validate, => validate: validate
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
