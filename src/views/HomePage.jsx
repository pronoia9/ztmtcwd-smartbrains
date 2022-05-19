import Header from '../components/Header/Header';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';

export default function HomePage({ user, inputChange, buttonClick, clear }) {
  return !user ? <Header /> : <FaceRecognition {...user} inputChange={inputChange} buttonClick={buttonClick} clear={clear} />;
}