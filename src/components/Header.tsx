import logo from '../assets/logo.svg'
import { FiSave } from 'react-icons/fi'

export default function Header() {
  return (
    <header className="bg-surface-1 border-b border-gray-200 px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <div className="h-8 w-8 overflow-hidden flex items-center justify-center">
            <img
              src={logo}
              alt="greatformend logo"
              className="h-28 w-28 object-cover rotate-45"
            />
          </div>
          <div className="text-2xl font-bold text-text-primary tracking-tighter">
            greatformend
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-text-primary hover:bg-surface-2 h-10 px-3 rounded-3xl transition-all duration-200 flex items-center justify-center">
            <FiSave size={20} />
          </button>
          <button className="bg-brand-default hover:bg-brand-light text-black font-normal h-10 px-6 rounded-3xl transition-colors duration-200 tracking-tight">
            Preview Form
          </button>
        </div>
      </div>
    </header>
  )
}
