import { useState } from 'react'
import { type FormElement } from '../../types'
import TextFieldEditor from '../editors/TextFieldEditor'
import ParagraphFieldEditor from '../editors/ParagraphFieldEditor'
import CheckboxFieldEditor from '../editors/CheckboxFieldEditor'
import SelectFieldEditor from '../editors/SelectFieldEditor'

interface FormBuilderProps {
  formElements: FormElement[]
  onRemoveElement: (id: string) => void
}

export default function FormBuilder({
  formElements,
  onRemoveElement,
}: FormBuilderProps) {
  const [formTitle, setFormTitle] = useState('')
  const [formDescription, setFormDescription] = useState('')

  return (
    <div className="mb-8 bg-surface-1 p-6 rounded-lg border border-gray-200">
      <h2 className="text-xl font-medium text-text-primary mb-6">
        Form Builder
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-text-primary mb-2">
          Form Title
        </label>
        <input
          type="text"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
          placeholder="Enter form title"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-default focus:border-transparent"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-text-primary mb-2">
          Form Description
        </label>
        <textarea
          value={formDescription}
          onChange={(e) => setFormDescription(e.target.value)}
          placeholder="Enter form description"
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-default focus:border-transparent resize-none"
        />
      </div>

      <div>
        {formElements.length === 0 ? (
          <div className="min-h-32 border-2 border-dashed border-gray-300 rounded-lg p-6 flex items-center justify-center">
            <p className="text-text-secondary text-center">
              No form fields added yet. <br />
              Click on elements to add them to your form.
            </p>
          </div>
        ) : (
          <div>
            {formElements.map((element) => {
              switch (element.type) {
                case 'text':
                  return (
                    <TextFieldEditor
                      key={element.id}
                      id={element.id}
                      onRemove={onRemoveElement}
                    />
                  )
                case 'paragraph':
                  return (
                    <ParagraphFieldEditor
                      key={element.id}
                      id={element.id}
                      onRemove={onRemoveElement}
                    />
                  )
                case 'checkbox':
                  return (
                    <CheckboxFieldEditor
                      key={element.id}
                      id={element.id}
                      onRemove={onRemoveElement}
                    />
                  )
                case 'select':
                  return (
                    <SelectFieldEditor
                      key={element.id}
                      id={element.id}
                      onRemove={onRemoveElement}
                    />
                  )
                default:
                  return null
              }
            })}
          </div>
        )}
      </div>
    </div>
  )
}
