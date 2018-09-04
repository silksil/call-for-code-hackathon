import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/action_auth';

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
					<fieldset>
						<Field
							name="email"
							type="text"
							component="input"
							autoComplete="none"
							placeholder="Email"
							className="input-light"
						/>
					</fieldset>
					<fieldset>
						<Field
							name="password"
							type="password"
							component="input"
							autoComplete="none"
							placeholder="Password"
							className="input-light"
						/>
					</fieldset>
					<div className="warning-text"> {this.props.errorMessage}</div>
					<p className="grey center-text" id="forgot-password"> Forgot password? </p>
					<button className="btn btn-blue">Continue</button>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { errorMessage: state.auth.errorMessage };
}

export default compose(
	connect(mapStateToProps, { signIn }),
	reduxForm({ form: 'signIn' })
)(AuthSignIn);
// compose allows you to include as many higher order components with an easier to read syntax
