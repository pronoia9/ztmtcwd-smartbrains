import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Div from '../General/Div';
import FormGroup from './FormGroup';
import './Form.scss';

export default function Signin({ loadUser }) {
  const empty = { username: '', password: '', messages: '' };
  const [user, setUser] = useState(empty);
  let navigate = useNavigate();

  const signin = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...user }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (typeof data === 'string') {
          setUser((user) => ({ ...user, messages: data }));
        } else {
          setUser((user) => ({ ...user, messages: '' }));
          loadUser(data);
          setTimeout(() => {
            setUser(empty);
            // navigate('/');
            navigate(`/profile/${data.id}`);
          }, 1000);
        }
      });
  };

  return (
    <Div ids={['signin-section']} classNames={['signin section-padding position-re mh-100vh']}>
      <Div classNames={['container', 'row justify-content-center', 'col-lg-6', 'form-box']}>
        <Div classNames={['head-box']}>
          <h6 className='wow fadeIn'>Have an account?</h6>
          <h4 className='wow fadeInLeft'>Sign In</h4>
        </Div>

        <Div ids={['signin-form']} classNames={['form md-mb50']}>
          <Div classNames={['messages mb-10']}>
            <span className='text-red'>{user.messages}</span>
            <span className='text-hide'>!</span>
          </Div>
          <Div classNames={['controls']}>
            <FormGroup
              name='username'
              id='form_username'
              type='text'
              placeholder='Username'
              value={user.username}
              onChange={(e) => setUser((user) => ({ ...user, username: e.target.value }))}
            />
            <FormGroup
              name='password'
              id='form_password'
              type='password'
              placeholder='Password'
              value={user.password}
              onChange={(e) => setUser((user) => ({ ...user, password: e.target.value }))}
            />
          </Div>
          <button onClick={() => signin(user, setUser)} className='butn bord'>
            <span>Sign In</span>
          </button>
        </Div>

        <Div classNames={['bottom-box pt-20']}>
          <Link to='/register'>
            <h6>Don't have an account?</h6>
          </Link>
        </Div>
      </Div>

      <div className='line bottom left'></div>
    </Div>
  );
}
