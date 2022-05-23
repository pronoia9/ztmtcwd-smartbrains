import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Register from '../components/Forms/Register';
import ProfilePage from './ProfilePage';

export default function RegisterPage(props) {
  let navigate = useNavigate();
  useEffect(() => { props.state.user && navigate(`/profile/${props.state.user.id}`); }, [props.state.user, navigate]);

  return !props.state.user ? <Register {...props} /> : <ProfilePage {...props} />;
}