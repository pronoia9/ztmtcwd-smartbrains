import Div from '../General/Div';
import FormGroup from './FormGroup';
import './Signin.scss';

export default function Signin() {
  return (
    <Div ids={['signin']} classNames={['container', 'row justify-content-center', 'col-lg-6', 'block-sec', 'sign-box']}>
      <Div classNames={['head-box']}>
        <h6 className='wow fadeIn'>Have an account?</h6>
        <h4 className='wow fadeInLeft'>Sign In</h4>
      </Div>

      <Div classNames={['form md-mb50']}>
        <form action='#' id='signin-form' className='form' onSubmit={(e) => e.preventDefault()}>
          <Div classNames={['messages']}></Div>
          <Div classNames={['controls']}>
            <FormGroup name='email' id='form_email' type='email' placeholder='Email' value='' />
            <FormGroup name='password' id='form_password' type='password' placeholder='Password' value='' />
          </Div>
          <button type='submit' className='butn bord'>
            <span>Sign In</span>
          </button>
        </form>
      </Div>

      <Div classNames={['bottom-box pt-20']}>
        <button>
          <h6>Don't have an account?</h6>
        </button>
      </Div>
    </Div>
  );
}