import Div from '../General/Div';
import './Signin.scss';

export default function Signin() {
  return (
    <Div ids={['signin']} classNames={['container', 'row justify-content-center', 'block-sec', 'sign-box']}>
      <Div classNames={['head-box']}>
        <h6 className='wow fadeIn'>Have an account?</h6>
        <h4 className='wow fadeInLeft'>Sign In</h4>
      </Div>

      <Div classNames={['container form md-mb50']}>
        <form action='#' id='signin-form' className='form'>
          <Div classNames={['messages']}></Div>
          <Div classNames={['controls']}>
            <Div classNames={['form-group']}>
              <input name='name' id='form_name' type='text' placeholder='Name' required='' value='' />
            </Div>
            <Div classNames={['form-group']}>
              <input name='email' id='form_email' type='email' placeholder='Email' value='' />
            </Div>
          </Div>
          <button type='submit' className='butn bord'>
            <span>Button</span>
          </button>
        </form>
      </Div>
    </Div>
  );
}