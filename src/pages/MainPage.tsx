import { useCallback, useState } from 'react'
import Header from '../components/ui/Header'
import PreviewForm from '../components/preview/PreviewForm'
import { type FormElement, type FormConfig } from '../types'
import EditForm from '../components/builder/EditForm'

export default function MainPage() {
  const [formConfig, setFormConfig] = useState<FormConfig>({
    formElements: [],
    formTitle: '',
    formDescription: '',
  })
  const [showPreview, setShowPreview] = useState(false)

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

  return (
    <div className="min-h-screen bg-surface-2">
      <Header showPreview={showPreview} setShowPreview={setShowPreview} />
      <div className="max-w-6xl mx-auto p-8">
        {showPreview ? (
          <PreviewForm formConfig={formConfig} />
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
