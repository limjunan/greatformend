import { useState } from 'react'

export default function FormBuilder() {
  const [formTitle, setFormTitle] = useState('')
  const [formDescription, setFormDescription] = useState('')
  const [formFields, setFormFields] = useState<string[]>([])

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
        {formFields.length === 0 ? (
          <div className="min-h-32 border-2 border-dashed border-gray-300 rounded-lg p-6 flex items-center justify-center">
            <p className="text-text-secondary text-center">
              No form fields added yet. <br />
              Click on elements to add them to your form.
            </p>
          </div>
        ) : (
          <div>
            {/* TODO: Render form fields here */}
            <p className="text-text-secondary">Form fields will appear here</p>
          </div>
        )}
      </div>
    </div>
  )
}
