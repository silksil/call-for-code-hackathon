import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

import { signUp } from '../../store/actions/action_auth'
import InputField from '../shared/form/inputField';
import validateEmails from '../../utils/validateEmails'

class AuthSignUp extends Component {
  onSubmit = (formProps) => {
    this.props.signUp(formProps, () => {
      this.props.history.push('/disasters');
    });
  }

	render() {
    const { handleSubmit } = this.props;
		return (
      <div>
  			<form onSubmit={handleSubmit(this.onSubmit)}>
					<label></label>
					<Field
						name="email"
						type="text"
						component={InputField}
						autoComplete="none"
						placeholder="Email"
            className="input-light"
					/>
					<label></label>
					<Field
						name="password"
						type="password"
						component={InputField}
						autoComplete="none"
						placeholder="Password"
            className="input-light"
					/>
          <div className="red-text">{this.props.errorMessage}</div>
          <button className="btn btn-blue">Sign Up!</button>
  		  </form>
      </div>
		);
	}
}

function validate(values) {
	const errors = {};

  errors.email = validateEmails(values.email || '')
	if (!values.password) {
		errors.password = 'Enter a password'
	}
	return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessageSignUp };
}

AuthSignUp.propTypes = { errorMessage: PropTypes.string };

export default compose (
  connect(mapStateToProps, { signUp }),
  reduxForm({
    validate,
    form: 'signUp' })
)(withRouter(AuthSignUp));
