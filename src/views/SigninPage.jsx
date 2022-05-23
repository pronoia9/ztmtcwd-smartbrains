import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Signin from '../components/Forms/Signin';
import ProfilePage from './ProfilePage';

export default function SigninPage(props) {
  let navigate = useNavigate();
  useEffect(() => { props.state.user && navigate(`/profile/${props.state.user.id}`); }, [props.state.user, navigate]);

  return !props.state.user ? <Signin {...props} /> : <ProfilePage {...props} />;
}