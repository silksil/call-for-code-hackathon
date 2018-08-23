import React from 'react';

export default ({input, label, data, meta: { error, touched }}) => {
  const renderOptions = data.map((option) => {
    return (
      <option key={option} value={option}>{option}</option>
    )
  });
  

  return (
    <div>
      <label>{label}</label>
      <select {...input} style={{ marginBottom: '5px'}}>
        <option> </option>
        {renderOptions}
      </select>
      <div className="red-text" style={{marginBottom: '20px'}}>
        {touched && error}
      </div>
    </div>
  );
};
