import React, { useState } from 'react';
import Div from '../General/Div';
import ItemBox from './ItemBox';
import './Profile.scss';
const defaultAvatar = require('../../assets/images/defaultAvatar.png');

export default function Profile({ state, loadUser }) {
  const [user, setUser] = useState({ ...state.user, password: '' });
  const [disable, setDisable] = useState({ name: true, username: true, email: true, password: true });

  const dateCalc = (num) => Math.floor((Date.now() - new Date(num)) / (1000 * 3600 * 24)) + 1;

  async function updateUser(update) {
    try {
      const init = { method: 'put', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: user.id, ...update }) };
      const response = await fetch(`http://localhost:3000/profile/${user.id}`, init);
      const data = await response.json();
      if (response.status === 200) {
        setUser((user) => ({...user, ...data, password: ''}));
        loadUser(data);
      } else if (response.status === 400) console.error(data);
      else console.error('Something went wrong:', data);
    } catch (e) { console.error(e); }
  }

  const toggle = (setting) => setDisable((disable) => ({ ...disable, ...setting }));
  return (
    <Div ids={['profile-section']} classNames={['section-padding position-re valign sub-bg mh-100vh']}>
      <Div classNames={['container']}>
        <Div classNames={['row']}>
          <Div classNames={['col-lg-4 valign', 'img']}>
            <img src={defaultAvatar.default} alt='' />
          </Div>
          <Div classNames={['col-lg-8 valign', 'settings box lficon position-re', 'container', 'row']}>
            <ItemBox
              disabled={disable.name}
              icon={disable.name}
              iconBtn={() => {
                toggle({ name: !disable.name });
                !disable.name && updateUser({ name: user.name });
              }}
              name='name'
              id='form_name'
              type='name'
              placeholder='Name'
              value={user.name}
              onChange={(e) => setUser((user) => ({ ...user, name: e.target.value }))}
            />
            <ItemBox
              disabled={disable.username}
              icon={disable.username}
              iconBtn={() => {
                toggle({ username: !disable.username });
                !disable.username && updateUser({ username: user.username });
              }}
              name='username'
              id='form_username'
              type='username'
              placeholder='Username'
              value={user.username}
              onChange={(e) => setUser((user) => ({ ...user, username: e.target.value }))}
            />
            <ItemBox
              disabled={disable.email}
              icon={disable.email}
              iconBtn={() => {
                toggle({ email: !disable.email });
                !disable.email && updateUser({ email: user.email });
              }}
              name='email'
              id='form_email'
              type='email'
              placeholder='Email'
              value={user.email}
              onChange={(e) => setUser((user) => ({ ...user, email: e.target.value }))}
            />
            <ItemBox
              disabled={disable.password}
              icon={disable.password}
              iconBtn={() => {
                toggle({ password: !disable.password });
                !disable.password && user.password.length && updateUser({ password: user.password });
              }}
              name='password'
              id='form_password'
              type='password'
              placeholder='Password'
              value={user.password}
              // onFocus={() => !user.password.length && setUser((user) => ({ ...user, password: '' }))}
              onChange={(e) => setUser((user) => ({ ...user, password: e.target.value }))}
            />
          </Div>
        </Div>
        <Div classNames={['states', 'container']}>
          <ul className='flex'>
            <li className='flex'>
              <Div classNames={['numb valign']}>
                <h3>{user.entries}</h3>
              </Div>
              <Div classNames={['text valign']}>
                <p>
                  Images <br /> Searched
                </p>
              </Div>
            </li>
            <li className='flex'>
              <Div classNames={['numb valign']}>
                <h3>{dateCalc(user.joined)}</h3>
              </Div>
              <Div classNames={['text valign']}>
                <p>
                  Days Of <br /> Membership
                </p>
              </Div>
            </li>
            <li className='mail-us'>
              <a href='mailto:support@smartbrains.com?subject=Subject'>
                <Div classNames={['flex']}>
                  <Div classNames={['text valign', 'full-width']}>
                    <p>Get In Touch</p>
                    <h6>support@smartbrains.com</h6>
                  </Div>
                  <Div classNames={['mail-icon', 'icon-box']}>
                    <span className='icon color-font pe-7s-mail'></span>
                  </Div>
                </Div>
              </a>
            </li>
          </ul>
        </Div>
      </Div>

      <div className='line bottom left'></div>
    </Div>
  );
}
