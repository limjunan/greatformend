import { useState, useEffect, useCallback } from 'react'
import { type FormElement } from '../../types'
import TextFieldEditor from '../editors/TextFieldEditor'
import ParagraphFieldEditor from '../editors/ParagraphFieldEditor'
import CheckboxFieldEditor from '../editors/CheckboxFieldEditor'
import SelectFieldEditor from '../editors/SelectFieldEditor'

interface FormBuilderProps {
  formElements: FormElement[]
  onRemoveElement: (id: string) => void
  onUpdateElements: (elements: FormElement[]) => void
  formTitle: string
  setFormTitle: (title: string) => void
  formDescription: string
  setFormDescription: (description: string) => void
}

export default function FormBuilder({
  formElements,
  onRemoveElement,
  onUpdateElements,
  formTitle,
  setFormTitle,
  formDescription,
  setFormDescription,
}: FormBuilderProps) {
  const [elements, setElements] = useState<FormElement[]>(formElements)

  useEffect(() => {
    setElements(formElements)
  }, [formElements])

  const handleMoveElement = (id: string, direction: 'up' | 'down') => {
    const index = elements.findIndex((el) => el.id === id)
    if (index === -1) return

    const newElements = [...elements]
    const [movedElement] = newElements.splice(index, 1)

    if (direction === 'up' && index > 0) {
      newElements.splice(index - 1, 0, movedElement)
    } else if (direction === 'down' && index < newElements.length) {
      newElements.splice(index + 1, 0, movedElement)
    } else {
      return
    }
    setElements(newElements)
    onUpdateElements(newElements)
  }

  const handleUpdateElement = useCallback(
    (id: string, updates: Partial<FormElement>) => {
      setElements((prevElements) => {
        const updatedElements = prevElements.map((el) =>
          el.id === id ? { ...el, ...updates } : el
        )
        onUpdateElements(updatedElements)
        return updatedElements
      })
    },
    [onUpdateElements]
  )

  return (
    <div className="mb-8 bg-surface-1 p-6 rounded-lg border border-gray-200">
      <h2 className="text-xl font-medium text-text-primary mb-6">
        Form Builder
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-text-primary mb-2">
          Form Title
        </label>
        <input
          type="text"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
          placeholder="Enter form title"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-default focus:border-transparent"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-text-primary mb-2">
          Form Description
        </label>
        <textarea
          value={formDescription}
          onChange={(e) => setFormDescription(e.target.value)}
          placeholder="Enter form description"
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-default focus:border-transparent resize-none"
        />
      </div>

      <div>
        {elements.length === 0 ? (
          <div className="min-h-32 border-2 border-dashed border-gray-300 rounded-lg p-6 flex items-center justify-center">
            <p className="text-text-secondary text-center">
              No form fields added yet. <br />
              Click on elements to add them to your form.
            </p>
          </div>
        ) : (
          <div>
            {elements.map((element, index) => {
              switch (element.type) {
                case 'text':
                  return (
                    <TextFieldEditor
                      key={element.id}
                      id={element.id}
                      onRemove={onRemoveElement}
                      onMoveUp={() => handleMoveElement(element.id, 'up')}
                      onMoveDown={() => handleMoveElement(element.id, 'down')}
                      index={index}
                      totalElements={elements.length}
                      elementData={element}
                      onUpdateElement={handleUpdateElement}
                    />
                  )
                case 'paragraph':
                  return (
                    <ParagraphFieldEditor
                      key={element.id}
                      id={element.id}
                      onRemove={onRemoveElement}
                      onMoveUp={() => handleMoveElement(element.id, 'up')}
                      onMoveDown={() => handleMoveElement(element.id, 'down')}
                      index={index}
                      totalElements={elements.length}
                      elementData={element}
                      onUpdateElement={handleUpdateElement}
                    />
                  )
                case 'checkbox':
                  return (
                    <CheckboxFieldEditor
                      key={element.id}
                      id={element.id}
                      onRemove={onRemoveElement}
                      onMoveUp={() => handleMoveElement(element.id, 'up')}
                      onMoveDown={() => handleMoveElement(element.id, 'down')}
                      index={index}
                      totalElements={elements.length}
                      elementData={element}
                      onUpdateElement={handleUpdateElement}
                    />
                  )
                case 'select':
                  return (
                    <SelectFieldEditor
                      key={element.id}
                      id={element.id}
                      onRemove={onRemoveElement}
                      onMoveUp={() => handleMoveElement(element.id, 'up')}
                      onMoveDown={() => handleMoveElement(element.id, 'down')}
                      index={index}
                      totalElements={elements.length}
                      elementData={element}
                      onUpdateElement={handleUpdateElement}
                    />
                  )
                default:
                  return null
              }
            })}
          </div>
        )}
      </div>
    </div>
  )
}
