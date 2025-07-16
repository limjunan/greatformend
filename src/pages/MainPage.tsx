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
          <div className="lg:w-1/3 fixed bottom-0 left-0 right-0 bg-surface-1 lg:static bg-transparent z-50">
            <AddFormElements onAddElement={addElement} />
          </div>
          <div className="lg:w-2/3 pb-24 lg:pb-0">
            <FormBuilder
              formElements={formElements}
              onRemoveElement={removeElement}
              onUpdateElements={setFormElements}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
