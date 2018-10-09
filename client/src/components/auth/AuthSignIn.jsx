import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

import { signIn } from '../../store/actions/action_auth';
import InputField from '../shared/form/inputField';
import validateEmails from '../../utils/validateEmails'

class AuthSignIn extends Component {
	onSubmit = (formProps) => {
		this.props.signIn(formProps, () => {
			this.props.history.push('/disasters');
		});
	}
	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<form onSubmit={handleSubmit(this.onSubmit)}>
					<Field
						name="email"
						type="text"
						component={InputField}
						autoComplete="none"
						placeholder="Email"
						className="input-light"
					/>
					<Field
						name="password"
						type="password"
						component={InputField}
						autoComplete="none"
						placeholder="Password"
						className="input-light"
					/>
					<div className="red-text">  {this.props.errorMessage} </div>
					<p className="grey center-text" id="forgot-password"> Forgot password? </p>
					<button className="btn btn-blue">Continue</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

  errors.email = validateEmails(values.email || '');
	if (!values.password) {
		errors.password = 'Enter a password';
	}
	return errors;
}

function mapStateToProps(state) {
	return { errorMessage: state.auth.errorMessageSignIn };
}

AuthSignIn.propTypes = { errorMessage: PropTypes.string };

export default compose(
	connect(mapStateToProps, { signIn }),
	reduxForm({
		validate,
		form: 'signIn' })
)(withRouter(AuthSignIn));
