import { useState } from 'react'
import FieldEditor from './FieldEditor'

interface ParagraphFieldEditorProps {
  id: string
  onRemove: (id: string) => void
}

export default function ParagraphFieldEditor({
  id,
  onRemove,
}: ParagraphFieldEditorProps) {
  const [label, setLabel] = useState('')
  const [placeholder, setPlaceholder] = useState('')

  return (
    <FieldEditor id={id} title="Paragraph Field" onRemove={onRemove}>
      <div>
        <label className="block text-xs font-medium text-text-secondary mb-1">
          Label
        </label>
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Paragraph"
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-brand-default focus:border-brand-default"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-text-secondary mb-1">
          Placeholder
        </label>
        <textarea
          value={placeholder}
          onChange={(e) => setPlaceholder(e.target.value)}
          placeholder="Enter your message here"
          rows={3}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-brand-default focus:border-brand-default resize-none"
        />
      </div>
    </FieldEditor>
  )
}
