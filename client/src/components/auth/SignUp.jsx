import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signUp } from '../../actions/action_auth'

class SignUp extends Component {
  onSubmit = (formProps) => {
    this.props.signUp(formProps, () => {
      this.props.history.push('/feature');
    });
  }

	render() {
    const className = `${this.props.errorMessage ? 'warning' : 's'}`;

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
          <button className="btn-green">Sign Up!</button>
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
)(SignUp);
// compose allows you to include as many higher order components with an easier to read syntax
