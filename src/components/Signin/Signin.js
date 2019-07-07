import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signinEmail: '',
      signinPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signinEmail: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({signinPassword: event.target.value});
  }

  onSubmitSignin = () => {
    if (this.state.signinEmail && this.state.signinPassword) {
      fetch('http://localhost:3001/signin', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.state.signinEmail,
          password: this.state.signinPassword
        })
      })
        .then(res => res.json())
        .then(user => {
          if(user.id) {
            this.props.loadUser(user)
            this.props.onRouteChange('home')
          }
          else {
            alert(user)
          }
        })
    } else {
      alert('Please fill out all fields.');
    }
  }

  onKeyPress = e => {
    if (e.which === 13) {
      this.onSubmitSignin();
    }
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <article 
        className="br3 ba dark-gray b--black10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" 
        onKeyPress={this.onKeyPress}
        >
        <main className="pa4 white">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                ></input>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                ></input>
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black white bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
                onClick={this.onSubmitSignin}
              ></input>
            </div>
            <div className="lh-copy mt3">
              <p onClick={() => onRouteChange('register')} className="pointer f6 link dim white db">Register</p>
            </div>
          </div>
        </main>
      </article>
    );
  }
};

export default Signin;
