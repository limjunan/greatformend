import { useState } from 'react'
import FieldEditor from './FieldEditor'

interface TextFieldEditorProps {
  id: string
  onRemove: (id: string) => void
  onMoveUp: () => void
  onMoveDown: () => void
  index: number
  totalElements: number
}

export default function TextFieldEditor({
  id,
  onRemove,
  onMoveUp,
  onMoveDown,
  index,
  totalElements,
}: TextFieldEditorProps) {
  const [label, setLabel] = useState('')
  const [placeholder, setPlaceholder] = useState('')

  return (
    <FieldEditor id={id} title="Text Field" onRemove={onRemove} onMoveUp={onMoveUp} onMoveDown={onMoveDown} index={index} totalElements={totalElements}>
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