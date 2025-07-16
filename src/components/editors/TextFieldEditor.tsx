import { useState, useEffect } from 'react'
import FieldEditor from './FieldEditor'
import { type FormElement } from '../../types'

interface TextFieldEditorProps {
  id: string
  onRemove: (id: string) => void
  onMoveUp: () => void
  onMoveDown: () => void
  index: number
  totalElements: number
  elementData: FormElement
  onUpdateElement: (id: string, updates: Partial<FormElement>) => void
}

export default function TextFieldEditor({
  id,
  onRemove,
  onMoveUp,
  onMoveDown,
  index,
  totalElements,
  elementData,
  onUpdateElement,
}: TextFieldEditorProps) {
  const [label, setLabel] = useState(elementData.label || '')
  const [placeholder, setPlaceholder] = useState(elementData.placeholder || '')
  const [isRequired, setIsRequired] = useState(elementData.isRequired || false)

  useEffect(() => {
    onUpdateElement(id, { label, placeholder, isRequired })
  }, [id, label, placeholder, isRequired, onUpdateElement])

  return (
    <FieldEditor
      id={id}
      title="Text Field"
      onRemove={onRemove}
      onMoveUp={onMoveUp}
      onMoveDown={onMoveDown}
      index={index}
      totalElements={totalElements}
      isRequired={isRequired}
      setIsRequired={setIsRequired}
    >
      <div>
        <label className="block text-xs font-medium text-text-secondary mb-1">
          Label
        </label>
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Text Input"
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-brand-default focus:border-brand-default"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-text-secondary mb-1">
          Placeholder
        </label>
        <input
          type="text"
          value={placeholder}
          onChange={(e) => setPlaceholder(e.target.value)}
          placeholder="Enter text here"
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-brand-default focus:border-brand-default"
        />
      </div>
    </FieldEditor>
  )
}
