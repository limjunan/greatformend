import { type FormConfig } from '../../types'
import TextFieldPreview from './TextFieldPreview'
import ParagraphFieldPreview from './ParagraphFieldPreview'
import CheckboxFieldPreview from './CheckboxFieldPreview'
import SelectFieldPreview from './SelectFieldPreview'
import { FiSend } from 'react-icons/fi'

interface PreviewFormProps {
  formConfig: FormConfig
}

export default function PreviewForm({ formConfig }: PreviewFormProps) {
  const { formElements, formTitle, formDescription } = formConfig

  return (
    <div className="bg-surface-1 p-6 rounded-lg border border-gray-200">
      <h2 className="text-4xl font-medium text-text-primary mb-6">
        {formTitle || 'Form Preview'}
      </h2>
      {formDescription && (
        <p className="text-lg text-gray-700 mb-4">{formDescription}</p>
      )}
      <div className="border-b border-gray-200 mb-6"></div>
      {formElements.length === 0 ? (
        <p className="text-text-secondary text-center">
          No form fields to preview.
        </p>
      ) : (
        <>
          <div className="space-y-4">
            {formElements.map((element) => {
              switch (element.type) {
                case 'text':
                  return (
                    <TextFieldPreview
                      key={element.id}
                      label={element.label || ''}
                      isRequired={element.isRequired || false}
                      placeholder={element.placeholder || ''}
                    />
                  )
                case 'paragraph':
                  return (
                    <ParagraphFieldPreview
                      key={element.id}
                      label={element.label || ''}
                      isRequired={element.isRequired || false}
                      placeholder={element.placeholder || ''}
                    />
                  )
                case 'checkbox':
                  return (
                    <CheckboxFieldPreview
                      key={element.id}
                      label={element.label || ''}
                      options={element.options || []}
                      isRequired={element.isRequired || false}
                    />
                  )
                case 'select':
                  return (
                    <SelectFieldPreview
                      key={element.id}
                      label={element.label || ''}
                      options={element.options || []}
                      isRequired={element.isRequired || false}
                    />
                  )
                default:
                  return null
              }
            })}
          </div>
          <button
            onClick={() => console.log('Form submitted!')}
            className="mt-6 w-full px-6 py-2 bg-brand-default text-black rounded-lg hover:bg-brand-dark transition-colors flex items-center justify-center gap-2"
          >
            <FiSend /> Submit
          </button>
        </>
      )}
    </div>
  )
}
