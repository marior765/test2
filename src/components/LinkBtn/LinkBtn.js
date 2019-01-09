import React from 'react';
import { Link } from 'react-router-dom';

const text = {
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.6px',
    color: '#000000'
}

const LinkBtn = ({ to, children, click }) => {
  return (
    <Link onClick={click} style={text} to={to}>
      {children}
    </Link>
  )
}


export default LinkBtn;