import React from 'react';

export default ({ input, placeholder, className, data, meta: { error, touched }}) => {
  return (
    <div className={`input-box ${className}`}>
      <div className="input-content">
        <div className="input-left">
          {placeholder}
        </div>
        <div className="input-right">
          <label className="switch1">
            <input type="checkbox" {...input} />
            <span className="slider-round" />
          </label>
        </div>
      </div>
    </div>
  );
};
