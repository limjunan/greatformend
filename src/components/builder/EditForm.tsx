import { type FormElement, type FormConfig } from '../../types'
import AddFormElements from './AddFormElements'
import FormBuilder from './FormBuilder'

interface EditFormProps {
  formConfig: FormConfig
  addElement: (type: 'text' | 'paragraph' | 'checkbox' | 'select') => void
  removeElement: (id: string) => void
  updateFormElements: (elements: FormElement[]) => void
  updateFormTitle: (title: string) => void
  updateFormDescription: (description: string) => void
}

export default function EditForm({
  formConfig,
  addElement,
  removeElement,
  updateFormElements,
  updateFormTitle,
  updateFormDescription,
}: EditFormProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/3 fixed bottom-0 left-0 right-0 bg-surface-1 lg:static lg:p-0 lg:bg-transparent z-50">
        <AddFormElements onAddElement={addElement} />
      </div>
      <div className="lg:w-2/3 pb-32 lg:pb-0">
        <FormBuilder
          formElements={formConfig.formElements}
          onRemoveElement={removeElement}
          onUpdateElements={updateFormElements}
          formTitle={formConfig.formTitle}
          setFormTitle={updateFormTitle}
          formDescription={formConfig.formDescription}
          setFormDescription={updateFormDescription}
        />
      </div>
    </div>
  )
}

  
