import React from 'react';

export default function Div({ properties, children, classNames, ids, index = 0 }) {
  // console.log('properties[', index, ']:', properties[index])
  // console.log(Object.keys(properties[index]), '=', Object.values(properties[index]));

  return (
    <div className={classNames[index]} id={ids[index]}>
      {(index < properties.length - 1) ? <Div properties={properties} classNames={classNames} ids={ids} index={index + 1}>{children}</Div> : children}
    </div>
  );
}