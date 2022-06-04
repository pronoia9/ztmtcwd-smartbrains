import { Navigate } from 'react-router-dom';
import Signin from '../components/Forms/Signin';

export default function SigninPage(props) {
  return props.state.user ? <Navigate to='/' /> : <Signin {...props} />;
}