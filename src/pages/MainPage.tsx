import Header from '../components/Header'

export default function MainPage() {
  return (
    <div className="min-h-screen bg-surface-1">
      <Header />
      <div className="max-w-2xl mx-auto p-8">
        <p className="text-text-secondary mb-6">
          Your React + TypeScript + Tailwind CSS app is ready!
        </p>
      </div>
    </div>
  )
}
