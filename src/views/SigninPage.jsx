import { useNavigate } from 'react-router-dom';
import Signin from '../components/Forms/Signin';

export default function SigninPage(props) {
  let navigate = useNavigate();
  return props.state.user ? navigate(`/profile/${props.state.user.id}`) : <Signin {...props} />;
}