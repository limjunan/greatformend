import { useState, useEffect } from 'react'
import FieldEditor from './FieldEditor'
import { FiPlus, FiTrash } from 'react-icons/fi'
import { type FormElement } from '../../types'

interface SelectFieldEditorProps {
  id: string
  onRemove: (id: string) => void
  onMoveUp: () => void
  onMoveDown: () => void
  index: number
  totalElements: number
  elementData: FormElement
  onUpdateElement: (id: string, updates: Partial<FormElement>) => void
}

export default function SelectFieldEditor({
  id,
  onRemove,
  onMoveUp,
  onMoveDown,
  index,
  totalElements,
  elementData,
  onUpdateElement,
}: SelectFieldEditorProps) {
  const [label, setLabel] = useState(elementData.label || '')
  const [options, setOptions] = useState(elementData.options || ['', ''])

  useEffect(() => {
    onUpdateElement(id, { label, options })
  }, [id, label, options, onUpdateElement])

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options]
    newOptions[index] = value
    setOptions(newOptions)
  }

  const addOption = () => {
    setOptions([...options, ''])
  }

  const removeOption = (index: number) => {
    const newOptions = [...options]
    newOptions.splice(index, 1)
    setOptions(newOptions)
  }

  return (
    <FieldEditor
      id={id}
      title="Select Field"
      onRemove={onRemove}
      onMoveUp={onMoveUp}
      onMoveDown={onMoveDown}
      index={index}
      totalElements={totalElements}
    >
      <div>
        <label className="block text-xs font-medium text-text-secondary mb-1">
          Label
        </label>
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Select an option"
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-brand-default focus:border-brand-default"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-text-secondary mb-1">
          Options
        </label>
        <div className="space-y-2">
          {options.map((option, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={`Option ${index + 1}`}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-brand-default focus:border-brand-default"
              />
              <button
                onClick={() => removeOption(index)}
                className="text-red-500 hover:text-red-700"
              >
                <FiTrash className="text-sm" />
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={addOption}
          className="mt-2 text-sm text-text-secondary hover:text-text-primary flex items-center gap-1"
        >
          <FiPlus className="text-base" /> Add Option
        </button>
      </div>
    </FieldEditor>
  )
}
