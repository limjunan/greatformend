import FormElement from './FormElement'
import { FiType, FiAlignLeft, FiCheckSquare } from 'react-icons/fi'
import { MdFormatListBulleted } from 'react-icons/md'

export default function AddFormElements() {
  return (
    <div className="mb-8 bg-surface-1 p-6 rounded-lg border border-gray-200">
      <h2 className="text-xl font-medium text-text-primary mb-4">
        Add Form Elements
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <FormElement
          name="Text"
          icon={<FiType />}
          onClick={() => console.log('Text clicked')}
        />
        <FormElement
          name="Paragraph"
          icon={<FiAlignLeft />}
          onClick={() => console.log('Paragraph clicked')}
        />
        <FormElement
          name="Checkbox"
          icon={<FiCheckSquare />}
          onClick={() => console.log('Checkbox clicked')}
        />
        <FormElement
          name="Select"
          icon={<MdFormatListBulleted />}
          onClick={() => console.log('Select clicked')}
        />
      </div>
    </div>
  )
}
