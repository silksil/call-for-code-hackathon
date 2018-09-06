import React from 'react';

export default ({input, label, className, meta: { error, touched }}) => {
  return (
    <div>
      <input{...input} className={className} placeholder={label}/>
      <div className="red-text" style={{}}>
        {touched && error}
      </div>
    </div>
  );
};
