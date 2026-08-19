import { useState } from 'react'
import './ContactForm.css'

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void
}

interface ContactFormData {
  name: string
  email: string
  company: string
  project: string
  message: string
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    project: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.project.trim()) newErrors.project = 'Project description is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setIsSubmitted(true)
      onSubmit?.(formData)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="contact-form-success">
        <h3>THANK YOU FOR REACHING OUT</h3>
        <p>We've received your message and will get back to you soon.</p>
        <button onClick={() => setIsSubmitted(false)} className="contact-form-reset">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-group">
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <span className="contact-form-error">{errors.name}</span>}
      </div>

      <div className="contact-form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <span className="contact-form-error">{errors.email}</span>}
      </div>

      <div className="contact-form-group">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div className="contact-form-group">
        <label htmlFor="project">What are you looking to get? *</label>
        <input
          type="text"
          id="project"
          name="project"
          value={formData.project}
          onChange={handleChange}
          className={errors.project ? 'error' : ''}
        />
        {errors.project && <span className="contact-form-error">{errors.project}</span>}
      </div>

      <div className="contact-form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={errors.message ? 'error' : ''}
        />
        {errors.message && <span className="contact-form-error">{errors.message}</span>}
      </div>

      <button type="submit" className="contact-form-submit">
        SEND THE IDEA →
      </button>
    </form>
  )
}

export default ContactForm