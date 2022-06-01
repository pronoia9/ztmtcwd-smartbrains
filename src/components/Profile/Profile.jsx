import React, { useState } from 'react';
import Div from '../General/Div';
import ItemBox from './ItemBox';
import './Profile.scss';

export default function Profile({ state }) {
  // const sspony = { id: 0, name: 'Sspony', email: 'sspony@gmail.com', username: 'sspony', password: 'sspony', entries: '0', joined: '2022-05-26T01:26:06.266Z' };
  const [user, setUser] = useState(state.user);
  const [disable, setDisable] = useState({ name: true, username: true, email: true, password: true });

  const toggle = (setting) => setDisable((disable) => ({ ...disable, ...setting }));
  return (
    <Div classNames={['freelancre valign']}>
      <Div classNames={['container']}>
        <Div classNames={['row']}>
          <Div classNames={['col-lg-4 valign', 'img']}>
            <img
              src='https://cdn-icons.flaticon.com/png/512/1144/premium/1144709.png?token=exp=1654081377~hmac=1170aad42c9c3c1f134887b100af0485'
              alt=''
            />
          </Div>
          <Div classNames={['col-lg-8 valign', 'services box lficon position-re', 'container', 'row']}>
            <ItemBox
              disabled={disable.name}
              icon={disable.name}
              disable={() => toggle({ name: !disable.name })}
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
              disable={() => toggle({ username: !disable.username })}
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
              disable={() => toggle({ email: !disable.email })}
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
              disable={() => toggle({ password: !disable.password })}
              name='password'
              id='form_password'
              type='password'
              placeholder='Password'
              value={user.password}
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
                <h3>{Math.floor((Date.now() - new Date(user.joined)) / (1000 * 3600 * 24))}</h3>
              </Div>
              <Div classNames={['text valign']}>
                <p>
                  Days Of <br /> Membership
                </p>
              </Div>
            </li>
            <li className='mail-us'>
              <a href='mailto:your@email.com?subject=Subject'>
                <Div classNames={['flex']}>
                  <Div classNames={['text valign', 'full-width']}>
                    <p>Get In Touch</p>
                    <h6>Vie_Support@Gmail.Com</h6>
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
