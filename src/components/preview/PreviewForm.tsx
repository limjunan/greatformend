import { useRef, useEffect } from 'react'
import {
  type FormConfig,
  type SubmittedFormData,
  type FormElementControl,
} from '../../types'
import TextFieldPreview from './TextFieldPreview'
import ParagraphFieldPreview from './ParagraphFieldPreview'
import CheckboxFieldPreview from './CheckboxFieldPreview'
import SelectFieldPreview from './SelectFieldPreview'
import { FiSend } from 'react-icons/fi'

interface PreviewFormProps {
  formConfig: FormConfig
  onSubmit: (formData: SubmittedFormData) => void
}

export default function PreviewForm({
  formConfig,
  onSubmit,
}: PreviewFormProps) {
  const { formElements, formTitle, formDescription } = formConfig
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {}, [])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault() // Prevent default form submission
    const submittedData: SubmittedFormData = {}

    formElements.forEach((element) => {
      const formControls = formRef.current?.elements as unknown as Record<
        string,
        FormElementControl | undefined
      >
      const formControl = formControls[element.id]

      if (formControl) {
        if (element.type === 'checkbox') {
          // For checkboxes, formControl will be an HTMLCollection or RadioNodeList
          const checkedValues: string[] = []
          // Ensure it's iterable and contains HTMLInputElements
          if (
            formControl instanceof HTMLCollection ||
            formControl instanceof RadioNodeList
          ) {
            Array.from(formControl).forEach((input) => {
              if (input instanceof HTMLInputElement && input.checked) {
                checkedValues.push(input.value)
              }
            })
          } else if (
            formControl instanceof HTMLInputElement &&
            formControl.checked
          ) {
            checkedValues.push(formControl.value)
          }
          submittedData[
            element.label ? `${element.label}-${element.id}` : element.id
          ] = checkedValues
        } else if (
          // For text, paragraph, select, formControl will be a single element
          formControl instanceof HTMLInputElement ||
          formControl instanceof HTMLTextAreaElement ||
          formControl instanceof HTMLSelectElement
        ) {
          submittedData[
            element.label ? `${element.label}-${element.id}` : element.id
          ] = formControl.value
        }
      }
    })

    onSubmit(submittedData)
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-surface-1 p-6 rounded-lg border border-gray-200"
    >
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
                      id={element.id}
                      label={element.label || ''}
                      isRequired={element.isRequired || false}
                      placeholder={element.placeholder || ''}
                    />
                  )
                case 'paragraph':
                  return (
                    <ParagraphFieldPreview
                      key={element.id}
                      id={element.id}
                      label={element.label || ''}
                      isRequired={element.isRequired || false}
                      placeholder={element.placeholder || ''}
                    />
                  )
                case 'checkbox':
                  return (
                    <CheckboxFieldPreview
                      key={element.id}
                      id={element.id}
                      label={element.label || ''}
                      options={element.options || []}
                      isRequired={element.isRequired || false}
                    />
                  )
                case 'select':
                  return (
                    <SelectFieldPreview
                      key={element.id}
                      id={element.id}
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
            type="submit"
            className="mt-6 w-full px-6 py-2 bg-brand-default text-black rounded-lg hover:bg-brand-dark transition-colors flex items-center justify-center gap-2"
          >
            <FiSend /> Submit
          </button>
        </>
      )}
    </form>
  )
}
