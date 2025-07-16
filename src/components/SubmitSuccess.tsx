import { FiEdit, FiEye, FiCheckCircle } from 'react-icons/fi'
import { type SubmittedFormData } from '../types'

interface SubmitSuccessProps {
  onBackToEditor: () => void
  onBackToForm: () => void
  submittedFormData: SubmittedFormData
}

export default function SubmitSuccess({
  onBackToEditor,
  onBackToForm,
  submittedFormData,
}: SubmitSuccessProps) {
  return (
    <div className="bg-surface-1 p-12 rounded-lg shadow-lg text-center max-w-md w-full border border-gray-200 mx-auto">
      <FiCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-text-primary mb-6">
        Form submitted successfully!
      </h2>
      <p className="text-text-secondary mb-6">Your form has been received.</p>
      <div className="bg-gray-100 p-4 rounded-md text-left text-sm text-gray-800 mb-6 overflow-auto max-h-60">
        <pre>{JSON.stringify(submittedFormData, null, 2)}</pre>
      </div>
      <div className="flex flex-col space-y-3">
        <button
          onClick={onBackToEditor}
          className="bg-brand-default hover:bg-brand-dark text-black font-normal h-10 px-6 rounded-3xl transition-colors duration-200 tracking-tight flex items-center justify-center gap-2"
        >
          <FiEdit size={20} /> Edit Form
        </button>
        <button
          onClick={onBackToForm}
          className="text-text-primary hover:bg-surface-2 h-10 px-3 rounded-3xl transition-all duration-200 flex items-center justify-center gap-2"
        >
          <FiEye size={20} /> Resubmit Form
        </button>
      </div>
    </div>
  )
}
