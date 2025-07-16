import { useCallback, useState } from 'react'
import Header from '../components/ui/Header'
import PreviewForm from '../components/preview/PreviewForm'
import { type FormElement, type FormConfig, type SubmittedFormData } from '../types'
import EditForm from '../components/builder/EditForm'

export default function MainPage() {
  const [formConfig, setFormConfig] = useState<FormConfig>({
    formElements: [],
    formTitle: '',
    formDescription: '',
  })
  const [showPreview, setShowPreview] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [submittedFormData, setSubmittedFormData] = useState<SubmittedFormData>({})

  const addElement = (type: 'text' | 'paragraph' | 'checkbox' | 'select') => {
    setFormConfig((prevConfig) => ({
      ...prevConfig,
      formElements: [
        ...prevConfig.formElements,
        {
          id: new Date().getTime().toString(),
          type,
          isRequired: false,
        },
      ],
    }))
  }

  const removeElement = (id: string) => {
    setFormConfig((prevConfig) => ({
      ...prevConfig,
      formElements: prevConfig.formElements.filter(
        (element) => element.id !== id
      ),
    }))
  }

  const updateFormElements = useCallback((updatedElements: FormElement[]) => {
    setFormConfig((prevConfig) => ({
      ...prevConfig,
      formElements: updatedElements,
    }))
  }, [])

  const updateFormTitle = (title: string) => {
    setFormConfig((prevConfig) => ({
      ...prevConfig,
      formTitle: title,
    }))
  }

  const updateFormDescription = (description: string) => {
    setFormConfig((prevConfig) => ({
      ...prevConfig,
      formDescription: description,
    }))
  }

  const handleSubmit = (formData: SubmittedFormData) => {
    setSubmittedFormData(formData)
    setShowSuccess(true)
  }

  const handleBackToEditor = () => {
    setShowSuccess(false)
    setShowPreview(false)
    setSubmittedFormData({}) // Clear submitted data when going back to editor
  }

  const handleBackToForm = () => {
    setShowSuccess(false)
    setSubmittedFormData({}) // Clear submitted data when going back to form
    // Optionally reset form fields here if needed
  }

  return (
    <div className="min-h-screen bg-surface-2">
      <Header showPreview={showPreview} setShowPreview={setShowPreview} />
      <div className="max-w-6xl mx-auto p-8">
        {showSuccess ? (
          <SubmitSuccess
            onBackToEditor={handleBackToEditor}
            onBackToForm={handleBackToForm}
            submittedFormData={submittedFormData}
          />
        ) : showPreview ? (
          <PreviewForm formConfig={formConfig} onSubmit={handleSubmit} />
        ) : (
          <EditForm
            formConfig={formConfig}
            addElement={addElement}
            removeElement={removeElement}
            updateFormElements={updateFormElements}
            updateFormTitle={updateFormTitle}
            updateFormDescription={updateFormDescription}
          />
        )}
      </div>
    </div>
  )
}

import SubmitSuccess from '../components/SubmitSuccess'
