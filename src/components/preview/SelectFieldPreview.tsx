interface SelectFieldProps {
  label: string
  options: string[]
  isRequired: boolean
}

export default function SelectFieldPreview({
  label,
  options,
  isRequired,
}: SelectFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-text-primary mb-1">
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <select         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-default focus:border-brand-default">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
