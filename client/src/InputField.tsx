import React from 'react'

interface InputFieldProps {
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean // Add the disabled property
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <input type={type} value={value} onChange={onChange} disabled={disabled} />
  )
}

export default InputField
