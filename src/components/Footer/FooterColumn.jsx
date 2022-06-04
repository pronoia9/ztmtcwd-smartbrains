import Div from '../General/Div';

export default function FooterColumn({ classNames, ...props }) {
  return <Div classNames={classNames}>{props.children}</Div>;
}