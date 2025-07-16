interface CheckboxFieldProps {
  label: string
  options: string[]
  isRequired: boolean
}

export default function CheckboxFieldPreview({
  label,
  options,
  isRequired,
}: CheckboxFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-text-primary mb-1">
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <div className="space-y-2">
        {options.map((option, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-4 h-4 text-text-primary border-text-secondary rounded focus:outline-none focus:ring-1 focus:ring-brand-default focus:border-brand-default"
            />
            <span className="text-sm text-text-primary">{option}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
