import { Navigate } from 'react-router-dom';
import Register from '../components/Forms/Register';

export default function RegisterPage(props) {
  return props.state.user ? <Navigate to='/' /> : <Register {...props} />;
}