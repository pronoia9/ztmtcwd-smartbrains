import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Div from '../General/Div';
import FormGroup from './FormGroup';
import './Form.scss';

export default function Signin({ loadUser }) {
  const empty = { email: '', password: '', messages: '' };
  const [user, setUser] = useState(empty);
  let navigate = useNavigate();

  async function signin() {
    if (!user.username || !user.password) {
      setUser((user) => ({ ...user, messages: 'Missing a field.' }));
    } else {
      try {
        const init = { method: 'post', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...user }) };
        const response = await fetch('http://localhost:3000/signin', init);
        // console.log('response:', response);
        if (response.status === 200) {
          const data = await response.json();
          // console.log('data:', data);
          setUser((user) => ({ ...user, messages: '' }));
          loadUser(data);
          setTimeout(() => {
            setUser(empty);
            navigate(`/clarifai/${data.id}`);
          }, 1000);
        } else {
          setUser((user) => ({ ...user, messages: 'There was an error.' }));
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

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
              id='username'
              type='username'
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