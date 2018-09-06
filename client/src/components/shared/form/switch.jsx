import React from 'react';

export default ({input, label, data, meta: { error, touched }}) => {
  return (
    <div>
      <div>
        <div className='box-slider input-light'>
          <div className='box-left-text'> {label} </div>
          <div className='box-right-switch'>
            <label className="switch1">
              <input type="checkbox" {...input}/>
              <span className="slider-round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
