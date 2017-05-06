import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    console.log('bean');
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  render() {
    return (
      <Card>
      <CardSection>
        <Input
          label="Email"
          placeholder="email@gmail.com"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
        />
      </CardSection>

      <CardSection>
      <Input
        secureTextEntry
        label="Password"
        placeholder="password"
        value={this.props.password}
        onChangeText={this.onPasswordChange.bind(this)}
      />
      </CardSection>

      <CardSection>
        <Button action={this.onButtonPress.bind(this)}>
          SIGN IN
        </Button>
      </CardSection>

      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { email, password } = state.auth;
    return { email, password };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
