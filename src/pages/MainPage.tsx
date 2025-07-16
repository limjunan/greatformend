import { useState } from 'react'
import Header from '../components/ui/Header'
import PreviewForm from '../components/preview/PreviewForm'
import { type FormElement } from '../types'
import EditForm from '../components/builder/EditForm'

export default function MainPage() {
  const [formElements, setFormElements] = useState<FormElement[]>([])
  const [formTitle, setFormTitle] = useState('')
  const [formDescription, setFormDescription] = useState('')
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
      <Header showPreview={showPreview} setShowPreview={setShowPreview} />
      <div className="max-w-6xl mx-auto p-8">
        {showPreview ? (
          <PreviewForm
            formElements={formElements}
            formTitle={formTitle}
            formDescription={formDescription}
          />
        ) : (
          <EditForm
            formElements={formElements}
            addElement={addElement}
            removeElement={removeElement}
            setFormElements={setFormElements}
            formTitle={formTitle}
            setFormTitle={setFormTitle}
            formDescription={formDescription}
            setFormDescription={setFormDescription}
          />
        )}
      </div>
    </div>
  )
}
