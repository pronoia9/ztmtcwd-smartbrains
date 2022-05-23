import { useNavigate } from 'react-router-dom';
import Signin from '../components/Forms/Signin';
import ProfilePage from './ProfilePage';

export default function SigninPage(props) {
  let navigate = useNavigate();
  if (props.state.user) { navigate(`/profile/${props.state.user.id}`); return <ProfilePage {...props} /> }
  return <Signin {...props} />;
}