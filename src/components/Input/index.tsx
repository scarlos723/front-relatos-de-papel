import { InputProps } from "./types"

export const Input = (props: InputProps) => {
  const {
    id,
    label,

    error = "",
  } = props

  return (
    <div className="relative flex flex-col gap-2">
      <label htmlFor={id} className="block text-base font-medium">
        {label}
      </label>
      <input
        {...props}
        id={id}
        name={id}
        className="w-full border border-gray-300 rounded-md p-2"
      />
      {error && <span className="absolute -bottom-4 right-0 text-red-500 text-xs">{error}</span>}
    </div>
  )
}
