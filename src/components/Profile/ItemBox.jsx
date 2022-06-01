import Div from "../General/Div";

export default function ItemBox() {
  return (
    <Div classNames={['col-6 wow fadeInLeft', 'item-box no-curve']}>
      <Div>
        <span className='icon color-font pe-7s-config'></span>
      </Div>
      <Div classNames={['cont']}>
        <h6>Name</h6>
        <p>Name</p>
      </Div>
    </Div>
  );
}