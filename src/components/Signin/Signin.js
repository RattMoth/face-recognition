import React from 'react';

const Signin = ({ onRouteChange }) => {
  return (
    <article className="br3 ba dark-gray b--black10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
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
              ></input>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              ></input>
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black white bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
              onClick={() => onRouteChange('home')}
            ></input>
          </div>
          <div className="lh-copy mt3">
            <p onClick={() => onRouteChange('register')} className="pointer f6 link dim white db">Register</p>
          </div>
        </div>
      </main>
    </article>
  );
};

export default Signin;
