import { useNavigate } from 'react-router-dom';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import HomePage from './HomePage';

export default function ProfilePage(props) {
  let navigate = useNavigate();

  if (props.state.user) { return <FaceRecognition {...props} />; }
  navigate('/');
  return <HomePage {...props} />;
}
