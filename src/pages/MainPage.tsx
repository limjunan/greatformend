import { useState } from 'react'
import Header from '../components/ui/Header'
import AddFormElements from '../components/builder/AddFormElements'
import FormBuilder from '../components/builder/FormBuilder'
import { type FormElement } from '../types'

export default function MainPage() {
  const [formElements, setFormElements] = useState<FormElement[]>([])

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
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <AddFormElements onAddElement={addElement} />
          </div>
          <div className="lg:w-2/3">
            <FormBuilder
              formElements={formElements}
              onRemoveElement={removeElement}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
