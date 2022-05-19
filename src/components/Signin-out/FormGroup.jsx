import Div from '../General/Div';

export default function FormGroup(props) {
  return (
    <Div classNames={['form-group']}>
      <input {...props} />
    </Div>
  );
}