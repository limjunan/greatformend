import { type FormElement } from '../../types'
import AddFormElements from './AddFormElements'
import FormBuilder from './FormBuilder'

interface FormEditorProps {
  formElements: FormElement[]
  addElement: (type: 'text' | 'paragraph' | 'checkbox' | 'select') => void
  removeElement: (id: string) => void
  setFormElements: (elements: FormElement[]) => void
}

export default function EditForm({
  formElements,
  addElement,
  removeElement,
  setFormElements,
}: FormEditorProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/3 fixed bottom-0 left-0 right-0 bg-surface-1 lg:static lg:p-0 lg:bg-transparent z-50">
        <AddFormElements onAddElement={addElement} />
      </div>
      <div className="lg:w-2/3 pb-32 lg:pb-0">
        <FormBuilder
          formElements={formElements}
          onRemoveElement={removeElement}
          onUpdateElements={setFormElements}
        />
      </div>
    </div>
  )
}
