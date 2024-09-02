import { Link } from 'react-router-dom';
import React from 'react';
import { useExtraParameterCtx } from '../context/extra-parameters-provider';

type CallToActionButtonType = {
    title: string,
    url: string
}

export function CallToActionButtonComponent(props: CallToActionButtonType) {
  const extraParameter = useExtraParameterCtx();
  console.log("BNG Component");
  console.log(extraParameter);

  return (
    <Link
      {...extraParameter}
      to={props.url}
      className='btn tertiary-btn'
    >
      {props.title}
    </Link>
  );
}