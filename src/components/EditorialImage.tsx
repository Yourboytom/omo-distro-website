import './EditorialImage.css'

interface EditorialImageProps {
  src: string
  alt: string
  caption?: string
  className?: string
}

const EditorialImage = ({ src, alt, caption, className = '' }: EditorialImageProps) => {
  return (
    <div className={`editorial-image ${className}`}>
      <img src={src} alt={alt} className="editorial-image-img" />
      {caption && <p className="editorial-image-caption">{caption}</p>}
    </div>
  )
}

export default EditorialImage