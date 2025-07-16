import Header from '../components/Header'
import AddFormElements from '../components/AddFormElements'
import FormBuilder from '../components/FormBuilder'

export default function MainPage() {
  return (
    <div className="min-h-screen bg-surface-2">
      <Header />
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <AddFormElements />
          </div>
          <div className="lg:w-2/3">
            <FormBuilder />
          </div>
        </div>
      </div>
    </div>
  )
}
