import { type ReactNode } from 'react'

interface FormElementProps {
  name: string
  icon?: ReactNode
  onClick?: () => void
}

export default function FormElement({ name, icon, onClick }: FormElementProps) {
  return (
    <button
      onClick={onClick}
      className="bg-surface-1 hover:bg-gray-50 border border-gray-200 text-text-primary font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex flex-col items-center justify-center gap-2"
    >
      {icon && <span className="text-xl">{icon}</span>}
      <span className="text-sm">{name}</span>
    </button>
  )
}
