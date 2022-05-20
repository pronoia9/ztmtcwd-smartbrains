import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Div from '../General/Div';
import FormGroup from './FormGroup';
import './Form.scss';

export default function Register({ signup }) {
  const empty = { username: '', email: '', password1: '', password2: '', messages: '' };
  const [user, setUser] = useState(empty);

  return (
    <Div ids={['register-section']} classNames={['register section-padding position-re mh-100vh']}>
      <Div classNames={['container', 'row justify-content-center', 'col-lg-6', 'form-box']}>
        <Div classNames={['head-box']}>
          <h6 className='wow fadeIn'>Don't have an account?</h6>
          <h4 className='wow fadeInLeft'>Register</h4>
        </Div>

        <Div ids={[null, 'signin-form']} classNames={['form md-mb50', 'form']}>
          <Div classNames={['controls']}>
            <Div classNames={['messages']}>
              <strong>
                <span className='color-font'>{user.messages}</span>
                <p className='text-hide'>!</p>
              </strong>
            </Div>
            <FormGroup
              name='username'
              id='form_username'
              type='text'
              placeholder='Username'
              value={user.username}
              onChange={(e) => setUser((user) => ({ ...user, username: e.target.value }))}
              required
            />
            <FormGroup
              name='email'
              id='form_email'
              type='email'
              placeholder='Email'
              value={user.email}
              onChange={(e) => setUser((user) => ({ ...user, email: e.target.value }))}
              required
            />
            <FormGroup
              name='password1'
              id='form_password1'
              type='password'
              placeholder='Password'
              value={user.password1}
              onChange={(e) => setUser((user) => ({ ...user, password1: e.target.value }))}
              required
            />
            <FormGroup
              name='password2'
              id='form_password2'
              type='password'
              placeholder='Re-type Password'
              value={user.password2}
              onChange={(e) => setUser((user) => ({ ...user, password2: e.target.value }))}
              required
            />
          </Div>
          <button
            onClick={() => {
              const response = signup(user);
              setUser((user) => ({ ...user, messages: response }));
              response === 'Registration complete.' && setTimeout(() => console.log('go to homepage'), 2000);
            }}
            className='butn bord'>
            <span>Register</span>
          </button>
        </Div>

        <Div classNames={['bottom-box pt-20']}>
          <Link to='/signin'>
            <h6>Already have an account?</h6>
          </Link>
        </Div>
      </Div>

      <div className='line bottom right'></div>
    </Div>
  );
}
