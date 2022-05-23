import { useNavigate } from 'react-router-dom';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';

export default function ProfilePage(props) {
  let navigate = useNavigate();
  return props.user ? <FaceRecognition {...props} /> : navigate('/');
}
