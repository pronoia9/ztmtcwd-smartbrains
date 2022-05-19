import Div from '../General/Div';
import FormGroup from './FormGroup';
import './Form.scss';

export default function Register() {
  return (
    <Div ids={['register']} classNames={['container', 'row justify-content-center', 'col-lg-6', 'sign-box']}>
      <Div classNames={['head-box']}>
        <h6 className='wow fadeIn'>Don't have an account?</h6>
        <h4 className='wow fadeInLeft'>Register</h4>
      </Div>

      <Div ids={[null, 'signin-form']} classNames={['form md-mb50', 'form']}>
         <Div classNames={['messages']}></Div>
          <Div classNames={['controls']}>
            <FormGroup name='username' id='form_username' type='text' placeholder='Username' value='' />
            <FormGroup name='email' id='form_email' type='email' placeholder='Email' value='' />
            <FormGroup name='password1' id='form_password1' type='password' placeholder='Password' value='' />
            <FormGroup name='password2' id='form_password2' type='password' placeholder='Re-type Password' value='' />
          </Div>
          <button onClick={() => console.log('add register function')} className='butn bord'><span>Register</span></button>
      </Div>

      <Div classNames={['bottom-box pt-20']}>
        <button onClick={() => console.log('add react router and change to sign in page')}><h6>Already have an account?</h6></button>
      </Div>
    </Div>
  );
}