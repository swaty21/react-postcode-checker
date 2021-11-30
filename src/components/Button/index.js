import React from 'react';

const Button = ({ id, onClick, name, type = 'button' }) => {
  return (
    <button data-testid={id} onClick={onClick} name={name} type={type}>
      {name}{' '}
    </button>
  );
};

export default Button;
