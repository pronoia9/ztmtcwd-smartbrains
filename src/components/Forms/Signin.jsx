import { Link } from 'react-router-dom';
import Div from '../General/Div';
import FormGroup from './FormGroup';
import './Form.scss';

export default function Signin() {
  return (
    <Div ids={['signin-section']} classNames={['signin section-padding position-re min-100']}>
      <Div classNames={['container', 'row justify-content-center', 'col-lg-6', 'form-box']}>
        <Div classNames={['head-box']}>
          <h6 className='wow fadeIn'>Have an account?</h6>
          <h4 className='wow fadeInLeft'>Sign In</h4>
        </Div>

        <Div ids={[null, 'signin-form']} classNames={['form md-mb50', 'form']}>
          <Div classNames={['messages']}></Div>
          <Div classNames={['controls']}>
            <FormGroup name='email' id='form_email' type='email' placeholder='Email' value='' />
            <FormGroup name='password' id='form_password' type='password' placeholder='Password' value='' />
          </Div>
          <button onClick={() => console.log('add sign in function')} className='butn bord'>
            <span>Sign In</span>
          </button>
        </Div>

        <Div classNames={['bottom-box pt-20']}>
          <Link to='/register'>
            <h6>Don't have an account?</h6>
          </Link>
        </Div>
      </Div>

      <div className='line bottom left'></div>
    </Div>
  );
}
