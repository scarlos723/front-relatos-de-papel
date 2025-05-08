import { InputProps } from "./types"

export const Input = ({
  id,
  label,
  type,
  value,
  placeholder = "",
  required = true,
  disabled = false,
  error = "",
  onChange = () => {}
}: InputProps) => {
  return (
    <div className="relative flex flex-col gap-2">
      <label htmlFor={id} className="block text-base font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-md p-2"
      />
      {error && <span className="absolute -bottom-4 right-0 text-red-500 text-xs">{error}</span>}
    </div>
  )
}
