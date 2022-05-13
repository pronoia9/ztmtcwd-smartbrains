import React from 'react';

export default function Div({ children, classNames, index = 0 }) {
  return <div className={classNames[index]}>{index < classNames.length - 1 ? <Div classNames={classNames} index={index + 1}>{children}</Div> : children}</div>;
}