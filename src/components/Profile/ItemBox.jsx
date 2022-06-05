import Div from '../General/Div';
import FormGroup from '../Forms/FormGroup';

export default function ItemBox({ icon, iconBtn, placeholder, ...props }) {
  return (
    <Div classNames={['col-6', 'setting-box no-curve']}>
      <Div classNames={['valign']}>
        <span className={`icon color-font ${icon ? 'pe-7s-config' : 'pe-7s-like2'}`} onClick={iconBtn}></span>
      </Div>
      <Div classNames={['cont']}>
        <h6>{placeholder}</h6>
        <FormGroup {...props} />
      </Div>
    </Div>
  );
}