import React from 'react';

export default ({ input, placeholder, type, className, meta: { error, touched } }) => {
  return (
    <div className="input-container">
      <input {...input} className={className} placeholder={placeholder} type={type} />
      <div className="red-text">
        {touched && error}
      </div>
    </div>
  );
};
