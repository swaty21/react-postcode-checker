import React from 'react';

const InputBox = ({ id, onChange, value }) => {
  return <input data-testid={id} onChange={onChange} value={value} />;
};

export default InputBox;
