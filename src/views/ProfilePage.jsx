import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import Profile from '../components/Profile/Profile';

export default function ProfilePage(props) {
  let navigate = useNavigate();
  useEffect(() => { !props.state.user && navigate('/'); }, [props.state.user, navigate]);

  return !props.state.user ? <HomePage {...props} /> : <Profile {...props}/>;
}