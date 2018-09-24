import React, {PureComponent} from 'react';
import FieldText from '@atlaskit/field-text';
import Button from '@atlaskit/button';
import {Checkbox} from '@atlaskit/checkbox';

import './style.css'

import Form, {FormHeader, FormSection, FormFooter, Field, Validator} from '@atlaskit/form';

//TODO: Should be refactored/moved to a separate place.
const isEmailValid = (value : string): boolean => {
  return value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i);
};

const isPasswordValid = (value : string): boolean => {
  return value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i);
};

class RegistrationForm extends PureComponent<void> {

  onSubmitHandler = () => {
    console.log('Submitting form');

    const validateResult = this.formRef.validate();
    console.log(validateResult);

    if (validateResult.isInvalid) {
      console.log('onSubmitHandler = Form Fields Invalid');
    } else {
      this.formRef.submit();
    }
  };

  render() {
    return (<div className="form">
      <Form name="registration-form" onSubmit={this.onSubmitHandler} onReset={this.onResetHandler} ref={form => {
          this.formRef = form;
        }} method="POST" target="submitFrame" action="//httpbin.org/post">

        <FormHeader title="Please, fill fields below to sign up"/>

        <FormSection>
          <Field label="First Name" isRequired="isRequired">
            <FieldText name="first_name" placeholder="First Name" shouldFitContainer="shouldFitContainer"/>
          </Field>
          <Field label="Last Name" isRequired="isRequired">
            <FieldText name="last_name" placeholder="Last Name" shouldFitContainer="shouldFitContainer"/>
          </Field>
          <Field label="Email" isRequired="isRequired" validators={[<Validator func={isEmailValid} invalid="Email is invalid"/>]}>
            <FieldText name="email" placeholder="email@domain.com" shouldFitContainer="shouldFitContainer"/>
          </Field>

          <Field label="Password" validators={[<Validator func={isPasswordValid} invalid="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"/>]}>
            <FieldText name="password" type="password" shouldFitContainer="shouldFitContainer"/>
          </Field>
          <p>Subscriptions</p>
          <span>
            <Checkbox label="Send me news to email" value="news" name="subscriptions"/>
            <Checkbox label="I want to get latest updates" value="updates" name="subscriptions"/>
          </span>
        </FormSection>

        <FormFooter actionsContent={[
            {
              id: 'submit-button'
            }, {}
          ]}>
          <Button appearance="primary" type="submit">
            Sign Up
          </Button>
          <Button appearance="subtle" href="/question">Back</Button>
        </FormFooter>
      </Form>

      <p>The data submitted by the form will appear below:</p>
      <iframe title="Response Frame" id="submitFrame" name="submitFrame" style={{
          width: '100%',
          height: '400px',
          borderStyle: 'dashed',
          borderWidth: '1px',
          color: '#ccc'
        }}/>
    </div>);
  }
}

export default RegistrationForm;
