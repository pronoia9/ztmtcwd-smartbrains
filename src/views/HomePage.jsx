import Header from '../components/Header/Header';
import Body from '../components/Body/Body';

export default function HomePage({ user, inputChange, buttonClick, clear }) {
  return !user ? <Header /> : <Body {...user} inputChange={inputChange} buttonClick={buttonClick} clear={clear} />;
}