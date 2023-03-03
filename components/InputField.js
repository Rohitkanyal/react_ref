import React, { forwardRef } from 'react';

const InputField = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default InputField;
