import { useState } from 'react'
import Header from '../components/ui/Header'
import PreviewForm from '../components/preview/PreviewForm'
import { type FormElement } from '../types'
import EditForm from '../components/builder/EditForm'

export default function MainPage() {
  const [formElements, setFormElements] = useState<FormElement[]>([])
  const [showPreview, setShowPreview] = useState(false)

  const addElement = (type: 'text' | 'paragraph' | 'checkbox' | 'select') => {
    const newElement: FormElement = {
      id: new Date().getTime().toString(),
      type,
    }
    setFormElements([...formElements, newElement])
  }

  const removeElement = (id: string) => {
    setFormElements(formElements.filter((element) => element.id !== id))
  }

  return (
    <div className="min-h-screen bg-surface-2">
      <Header />
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="px-4 py-2 bg-brand-default text-white rounded-lg hover:bg-brand-dark transition-colors"
          >
            {showPreview ? 'Back to Editor' : 'Preview Form'}
          </button>
        </div>
        {showPreview ? (
          <PreviewForm formElements={formElements} />
        ) : (
          <EditForm
            formElements={formElements}
            addElement={addElement}
            removeElement={removeElement}
            setFormElements={setFormElements}
          />
        )}
      </div>
    </div>
  )
}
