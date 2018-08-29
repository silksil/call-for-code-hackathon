import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signIn } from '../../actions/action_auth'

class SignIn extends Component {
	onSubmit = (formProps) => {
		this.props.signIn(formProps, () => {
			this.props.history.push('/feature');
		});
	}
	render() {
		const { handleSubmit } = this.props;
		return (
			<div className="container">
				<form onSubmit={handleSubmit(this.onSubmit)}>
					<fieldset>
						<label className="grey"></label>
						<Field
							name="email"
							type="text"
							component="input"
							autoComplete="none"
							placeholder="Email"
						/>
					</fieldset>
					<fieldset>
						<label className="grey"></label>
						<Field
							name="password"
							type="password"
							component="input"
							autoComplete="none"
							placeholder="Password"
						/>
					</fieldset>
					<div className="warning-text"> {this.props.errorMessage}</div>
					<button className="btn-green">Continue</button>
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
)(SignIn);
// compose allows you to include as many higher order components with an easier to read syntax
