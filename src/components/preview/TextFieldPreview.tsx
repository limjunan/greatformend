interface TextFieldProps {
  label: string
  placeholder: string
  isRequired: boolean
}

export default function TextFieldPreview({
  label,
  placeholder,
  isRequired,
}: TextFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-text-primary mb-1">
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-default focus:border-brand-default"
      />
    </div>
  )
}
