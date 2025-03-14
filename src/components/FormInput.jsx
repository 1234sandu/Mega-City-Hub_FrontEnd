import React from 'react';

export const FormInput = ({
  label,
  name,
  type,
  icon,
  value,
  onChange,
  error,
  placeholder,
}) => {
  return (
    <div className="space-y-1">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-emerald-100"
      >
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full pl-10 pr-3 py-2 bg-emerald-800 border ${
            error ? 'border-red-400' : 'border-emerald-700'
          } rounded-lg focus:ring-2 focus:ring-yellow-300/50 focus:border-yellow-300 text-emerald-100 placeholder-emerald-500 transition-all duration-200`}
        />
      </div>
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
};