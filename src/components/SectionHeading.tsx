import './SectionHeading.css'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
  orange?: boolean
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  centered = false,
  orange = false,
}: SectionHeadingProps) => {
  return (
    <div className={`section-heading ${centered ? 'centered' : ''} ${orange ? 'orange' : ''}`}>
      {eyebrow && <span className="section-heading-eyebrow">{eyebrow}</span>}
      <h2 className="section-heading-title">{title}</h2>
      {description && <p className="section-heading-description">{description}</p>}
    </div>
  )
}

export default SectionHeading