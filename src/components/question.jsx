import React, {PureComponent} from 'react';
import SingleSelect from '@atlaskit/single-select';
import FieldText from '@atlaskit/field-text';
import FieldTextArea from '@atlaskit/field-text-area';
import Button from '@atlaskit/button';
import {Link} from 'react-router';

import './style.css'

import Form, {
  FormHeader,
  FormSection,
  FormFooter,
  Field,
  Validator
} from '@atlaskit/form';


const selectItems = [
  {
    heading: 'PLAN, TRACK, SUPPORT',
    items: [
      { content: 'Jira Software', value: 'jira_software' },
      { content: 'Jira Service Desk', value: 'jira_service_desk' },
      { content: 'Jira Core', value: 'jira_core' },
      { content: 'Portfolio For Jira', value: 'jira_portfolio' },
    ],
  },
  {
    heading: 'CODE, BUILD, SHIP',
    items: [
      { content: 'Bitbucket', value: 'bitbucket' },
      { content: 'Sourcetree', value: 'sourcetree' },
      { content: 'Bamboo', value: 'bamboo' },
      { content: 'Fisheye', value: 'fisheye' },
      { content: 'Cruicible', value: 'cruicible' },
    ],
  },
  {
    items: [{ content: 'I\'m not sure which product are right for me', value: 'default' }],
  },
];


const isEmailValid = (value : string): boolean => {
  return value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i);
};

class QuestionForm extends PureComponent<void> {

  formRef: any;

  onSubmitHandler = () => {
    console.log('onSubmitHandler');

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
      <Form name="create-repo" onSubmit={this.onSubmitHandler} onReset={this.onResetHandler} ref={form => {
          this.formRef = form;
        }}
          onValidate={this.onValidateHandler} action="//httpbin.org/get" method="GET" target="submitFrame">
        <FormHeader title="Have a question for us?" position="center"/>

        <FormSection label="Email">
          <Field label="Email" isRequired="isRequired" validators={[<Validator func={isEmailValid} invalid="Email is invalid"/>]}>
            <FieldText name="email" placeholder="name@company.com" shouldFitContainer="shouldFitContainer"/>
          </Field>
          <Field>
            <SingleSelect label="Which product would you like advice on?" items={selectItems} placeholder="Choose a product" name="product" shouldFitContainer/>
          </Field>
          <Field label="Your question">
            <FieldTextArea name="question" shouldFitContainer="shouldFitContainer" enableResize="true" minimumRows="7"/>
          </Field>
        </FormSection>

        <FormFooter actionsContent={[{
              id: 'submit-button'
            }
          ]}>
          <Button appearance="primary" type="submit">
            Send
          </Button>
        </FormFooter>
      </Form>

      <p>Do you want to Sign Up? Click
        <Link to="/registration"> here</Link>
      </p>
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

export default QuestionForm;
