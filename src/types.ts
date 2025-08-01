export type FormElement = {
  id: string
  type: 'text' | 'paragraph' | 'checkbox' | 'select'
  label?: string
  placeholder?: string
  options?: string[]
  isRequired?: boolean
}

export type FormConfig = {
  formElements: FormElement[]
  formTitle: string
  formDescription: string
}

export type SubmittedFormData = Record<string, string | string[]>

export type FormElementControl = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLCollectionOf<HTMLInputElement> | RadioNodeList;