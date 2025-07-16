interface ParagraphFieldProps {
  label: string
  placeholder: string
  isRequired: boolean
}

export default function ParagraphFieldPreview({
  label,
  placeholder,
  isRequired,
}: ParagraphFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-text-primary mb-1">
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <textarea
        placeholder={placeholder}
        rows={3}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-brand-default focus:border-brand-default"
      />
    </div>
  )
}
