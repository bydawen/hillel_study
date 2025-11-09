import React from "react";

import './style.scss';

export default function ContactInput({label, id, type, value, placeholder, maxLength, onChange, onError}) {
  return (
    <div className={`form-group ${onError ? 'is-invalid' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
      />

      {onError &&
        <div className="is-error">{onError}</div>
      }
    </div>
  )
}
