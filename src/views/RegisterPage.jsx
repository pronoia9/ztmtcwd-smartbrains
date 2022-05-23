import { useNavigate } from 'react-router-dom';
import Register from '../components/Forms/Register';
import ProfilePage from './ProfilePage';

export default function RegisterPage(props) {
  let navigate = useNavigate();

  if (props.state.user) { navigate(`/profile/${props.state.user.id}`); return <ProfilePage {...props} />; }
  return <Register {...props} />;
}