import { useNavigate } from 'react-router-dom';
import Register from '../components/Forms/Register';

export default function RegisterPage(props) {
  let navigate = useNavigate();
  return props.state.user ? navigate(`/profile/${props.state.user.id}`) : <Register {...props} />;
}