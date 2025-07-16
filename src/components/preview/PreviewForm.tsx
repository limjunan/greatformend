import { type FormElement } from '../../types'

interface PreviewFormProps {
  formElements: FormElement[]
}

export default function PreviewForm({ formElements }: PreviewFormProps) {
  return (
    <div className="bg-surface-1 p-6 rounded-lg border border-gray-200">
      <h2 className="text-xl font-medium text-text-primary mb-6">
        Form Preview
      </h2>
      {formElements.length === 0 ? (
        <p className="text-text-secondary text-center">
          No form fields to preview.
        </p>
      ) : (
        <div className="space-y-4">
          {formElements.map((element) => (
            <div key={element.id} className="border p-3 rounded-md">
              <p className="font-medium">{element.type} Field</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
