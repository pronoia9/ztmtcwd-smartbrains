import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Div from '../General/Div';
import FormGroup from './FormGroup';
import './Form.scss';

export default function Register({ loadUser }) {
  const empty = { name: '', username: '', email: '', password: '', messages: '' };
  const [user, setUser] = useState(empty);
  let navigate = useNavigate();

  async function register() {
    if (!user.username || !user.email || !user.password) {
      setUser((user) => ({ ...user, messages: 'Missing a required field.' }));
    } else {
      try {
        const init = { method: 'post', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...user }) };
        const response = await fetch('https://limitless-cliffs-16800.herokuapp.com/register', init);
        const data = await response.json();
        if (response.status === 200) {
          setUser((user) => ({ ...user, messages: '' }));
          loadUser(data);
          setTimeout(() => {
            setUser(empty);
            navigate(`/clarifai/${data.id}`);
          }, 0);
        } else setUser((user) => ({ ...user, messages: data }));
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <Div ids={['register-form-box']} classNames={['register section-padding position-re mh-100vh']}>
      <Div classNames={['container', 'row justify-content-center', 'col-lg-6', 'form-box']}>
        <Div classNames={['head-box']}>
          <h6 className='wow fadeIn'>Don't have an account?</h6>
          <h4 className='wow fadeInLeft'>Register</h4>
        </Div>

        <Div ids={['register-form']} classNames={['form md-mb50']}>
          <Div classNames={['controls']}>
            <Div classNames={['messages mb-10']}>
              <span className='text-red'>{user.messages}</span>
              <span className='text-hide'>!</span>
            </Div>
            <FormGroup
              name='name'
              id='form_name'
              type='text'
              placeholder='Name'
              value={user.name}
              onChange={(e) => setUser((user) => ({ ...user, name: e.target.value }))}
              required
            />
            <FormGroup
              name='username'
              id='form_username'
              type='text'
              placeholder='Username *'
              value={user.username}
              onChange={(e) => setUser((user) => ({ ...user, username: e.target.value }))}
              required
            />
            <FormGroup
              name='email'
              id='form_email'
              type='email'
              placeholder='Email *'
              value={user.email}
              onChange={(e) => setUser((user) => ({ ...user, email: e.target.value }))}
              required
            />
            <FormGroup
              name='password'
              id='form_password'
              type='password'
              placeholder='Password *'
              value={user.password}
              onChange={(e) => setUser((user) => ({ ...user, password: e.target.value }))}
              required
            />
          </Div>
          <button onClick={() => register()} className='butn bord'>
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

const validateEmail = (str) => {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (str.match(validRegex)) return true;
  return false;
};
