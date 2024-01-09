import React from 'react'

// Define the props interface for the InputField component
interface InputFieldProps {
  type: string // The type of the input field
  value: string // The current value of the input field
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void // The event handler for input changes
  disabled?: boolean // Optional property to disable the input field
}

// Define the InputField component as a functional component
const InputField: React.FC<InputFieldProps> = ({
  type,
  value,
  onChange,
  disabled = false, // Default value for the disabled property is false
}) => {
  // Render an input element with the specified type, value, onChange event handler, and disabled property
  return (
    <input type={type} value={value} onChange={onChange} disabled={disabled} />
  )
}

export default InputField // Export the InputField component as the default export
