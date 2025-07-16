import { useState } from 'react'
import { FiTrash } from 'react-icons/fi'

interface FieldEditorProps {
  id: string
  title: string
  onRemove: (id: string) => void
  children: React.ReactNode
}

export default function FieldEditor({
  id,
  title,
  onRemove,
  children,
}: FieldEditorProps) {
  const [isRequired, setIsRequired] = useState(false)

  return (
    <div className="p-4 rounded-lg bg-surface-1 mb-4 shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-medium text-text-primary">{title}</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id={`required-${id}`}
              checked={isRequired}
              onChange={(e) => setIsRequired(e.target.checked)}
              className="w-4 h-4 text-brand-default border-gray-300 rounded focus:ring-brand-default cursor-pointer"
            />
            <label
              htmlFor={`required-${id}`}
              className="text-xs font-medium text-text-secondary cursor-pointer"
            >
              Required
            </label>
          </div>
          <button
            onClick={() => onRemove(id)}
            className="text-red-500 hover:text-red-700"
          >
            <FiTrash />
          </button>
        </div>
      </div>

      <div className="space-y-3 pt-3 border-t border-gray-200">{children}</div>
    </div>
  )
}
