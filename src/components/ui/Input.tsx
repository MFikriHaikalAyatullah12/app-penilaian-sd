'use client'

import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1" style={{ color: '#374151' }}>
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          ${error ? 'border-red-500' : 'border-gray-300'}
          text-gray-900 placeholder-gray-500 bg-white
          ${className}
        `}
        style={{ color: '#111827', backgroundColor: '#ffffff' }}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500" style={{ color: '#6b7280' }}>{helperText}</p>
      )}
    </div>
  )
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helperText?: string
  options: { value: string; label: string }[]
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({
  label,
  error,
  helperText,
  options,
  className = '',
  ...props
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1" style={{ color: '#374151' }}>
          {label}
        </label>
      )}
      <select
        ref={ref}
        className={`
          w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          ${error ? 'border-red-500' : 'border-gray-300'}
          text-gray-900 bg-white
          ${className}
        `}
        style={{ color: '#111827', backgroundColor: '#ffffff' }}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} style={{ color: '#111827' }}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500" style={{ color: '#6b7280' }}>{helperText}</p>
      )}
    </div>
  )
})

Select.displayName = 'Select'