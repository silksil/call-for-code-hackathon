import React from 'react';

export default ({input, label, data, meta: { error, touched }}) => {
  return (
    <div>
      <label> {label} </label>
      <div className="switch">
        <label>
          {data[1]}
          <input type="checkbox" {...input}/>
          {data[0]}
        </label>
      </div>
    </div>
  );
};
