import { FiTrash, FiChevronUp, FiChevronDown } from 'react-icons/fi'

interface FieldEditorProps {
  id: string
  title: string
  onRemove: (id: string) => void
  onMoveUp: () => void
  onMoveDown: () => void
  index: number
  totalElements: number
  isRequired: boolean
  setIsRequired: (isRequired: boolean) => void
  children: React.ReactNode
}

export default function FieldEditor({
  id,
  title,
  onRemove,
  onMoveUp,
  onMoveDown,
  index,
  totalElements,
  isRequired,
  setIsRequired,
  children,
}: FieldEditorProps) {
  return (
    <div className="p-4 rounded-lg bg-surface-1 mb-4 shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-3">
        <div className="flex flex-col gap-1">
          <button
            onClick={onMoveUp}
            disabled={index === 0}
            className={`text-text-secondary hover:text-text-primary ${index === 0 ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            <FiChevronUp className="text-base" />
          </button>
          <button
            onClick={onMoveDown}
            disabled={index === totalElements - 1}
            className={`text-text-secondary hover:text-text-primary ${index === totalElements - 1 ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            <FiChevronDown className="text-base" />
          </button>
        </div>
        <h3 className="text-sm font-medium text-text-primary">{title}</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 lg:gap-2">
            <input
              type="checkbox"
              id={`required-${id}`}
              checked={isRequired}
              onChange={(e) => setIsRequired(e.target.checked)}
              className="w-4 h-4 text-text-primary border-text-primary rounded"
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
            <FiTrash className="text-base" />
          </button>
        </div>
      </div>

      <div className="space-y-3 pt-3 border-t border-gray-200">{children}</div>
    </div>
  )
}
