import FormElement from './FormElement'
import { FiType, FiAlignLeft, FiCheckSquare } from 'react-icons/fi'
import { MdFormatListBulleted } from 'react-icons/md'

interface AddFormElementsProps {
  onAddElement: (type: 'text' | 'paragraph' | 'checkbox' | 'select') => void
}

export default function AddFormElements({
  onAddElement,
}: AddFormElementsProps) {
  return (
    <div className="bg-surface-1 p-6 lg:rounded-lg border-t lg:border border-gray-200">
      <h2 className="text-base hidden lg:block lg:text-xl font-normal lg:font-medium text-text-primary mb-4">
        Add Form Elements
      </h2>
      <div className="grid grid-cols-4 lg:grid-cols-2 gap-4">
        <FormElement
          name="Text"
          icon={<FiType />}
          onClick={() => onAddElement('text')}
        />
        <FormElement
          name="Paragraph"
          icon={<FiAlignLeft />}
          onClick={() => onAddElement('paragraph')}
        />
        <FormElement
          name="Checkbox"
          icon={<FiCheckSquare />}
          onClick={() => onAddElement('checkbox')}
        />
        <FormElement
          name="Select"
          icon={<MdFormatListBulleted />}
          onClick={() => onAddElement('select')}
        />
      </div>
    </div>
  )
}
