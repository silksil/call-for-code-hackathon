import React from 'react';

export default ({input, placeholder, className, data, meta: { error, touched }}) => {
  const renderOptions = data.map((option) => {
    return (
      <option key={option} value={option}>{option}</option>
    )
  });

  return (
    <div className="input-container ">
      <div className={className}>
        <select required {...input}>
          <option value="" selected disabled hidden>{placeholder}</option>
          <option />
          {renderOptions}
        </select>
      </div>
      <div className="red-text">
        {touched && error}
      </div>
    </div>
  );
};
