import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/action_auth'

class AuthSignUp extends Component {
  onSubmit = (formProps) => {
    this.props.signUp(formProps, () => {
      this.props.history.push('/feature');
    });
  }

	render() {
    const className = `${this.props.errorMessage ? 'warning' : 's'}`;

    const { handleSubmit } = this.props;
		return (
      <div>
  			<form onSubmit={handleSubmit(this.onSubmit)}>
  				<fieldset>
  					<label></label>
  					<Field
  						name="email"
  						type="text"
  						component="input"
							autoComplete="none"
							placeholder="Email"
              className="input-light shadow"
  					/>
  				</fieldset>
  				<fieldset>
  					<label></label>
  					<Field
  						name="password"
  						type="password"
  						component="input"
							autoComplete="none"
							placeholder="Password"
              className="input-light shadow"
  					/>
  				</fieldset>
          <div className="warning-text"> {this.props.errorMessage}</div>
          <button className="btn btn-blue">Sign Up!</button>
  			</form>
      </div>
		);
	}
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose (
  connect(mapStateToProps, { signUp }),
  reduxForm({ form: 'signUp' })
)(AuthSignUp);
// compose allows you to include as many higher order components with an easier to read syntax
