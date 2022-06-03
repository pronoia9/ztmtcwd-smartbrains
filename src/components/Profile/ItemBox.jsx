import Div from '../General/Div';
import FormGroup from '../Forms/FormGroup';

export default function ItemBox(props) {
  return (
    <Div classNames={['col-6 wow fadeInLeft', 'setting-box no-curve']}>
      <Div classNames={['valign']}>
        <span className={`icon color-font ${props.icon ? 'pe-7s-config' : 'pe-7s-like2'}`} onClick={props.disable}></span>
      </Div>
      <Div classNames={['cont']}>
        <h6>{props.placeholder}</h6>
        <FormGroup {...props} />
      </Div>
    </Div>
  );
}
