import { Navigate } from 'react-router-dom';
import Profile from '../components/Profile/Profile';

export default function ProfilePage(props) {
  return props.state.user ? <Profile {...props} /> : <Navigate to='/' />;
}