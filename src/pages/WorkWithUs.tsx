import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import Button from '../components/Button'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './WorkWithUs.css'

const WorkWithUs = () => {
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.1 })
  const [servicesRef, servicesVisible] = useScrollAnimation({ threshold: 0.1 })
  const [contactRef, contactVisible] = useScrollAnimation({ threshold: 0.1 })
  const [ceoRef, ceoVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div className="work-with-us">
      {/* Hero Section */}
      <section className="work-with-us-hero" ref={heroRef}>
        <div className="container">
          <h1 className={`work-with-us-title ${heroVisible ? 'animate-slide-up' : ''}`}>
            LET'S TALK.
          </h1>
          <p className={`work-with-us-subtitle ${heroVisible ? 'animate-slide-up stagger-1' : ''}`}>
            Need CPO? Building a palm oil network? Have a story worth telling? Talk With Us.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="work-with-us-services" ref={servicesRef}>
        <div className="container">
          <SectionHeading
            eyebrow="WHAT WE MOVE"
            title="What we move"
            centered
          />
          
          <div className="work-with-us-services-grid">
            <div className={`work-with-us-service ${servicesVisible ? 'animate-slide-up' : ''}`}>
              <span className="work-with-us-service-number">01</span>
              <h3 className="work-with-us-service-title">CPO</h3>
              <p className="work-with-us-service-description">
                Nigerian crude palm oil for industrial supply.
              </p>
            </div>

            <div className={`work-with-us-service ${servicesVisible ? 'animate-slide-up stagger-1' : ''}`}>
              <span className="work-with-us-service-number">02</span>
              <h3 className="work-with-us-service-title">PALM OIL</h3>
              <p className="work-with-us-service-description">
                Palm oil for retail networks. From source to shelf.
              </p>
            </div>

            <div className={`work-with-us-service ${servicesVisible ? 'animate-slide-up stagger-2' : ''}`}>
              <span className="work-with-us-service-number">03</span>
              <h3 className="work-with-us-service-title">STORIES</h3>
              <p className="work-with-us-service-description">
                People, brands and stories worth putting in front of the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="work-with-us-contact" ref={contactRef}>
        <div className="container">
          <div className="work-with-us-contact-container">
            <div className={`work-with-us-contact-content ${contactVisible ? 'animate-slide-up' : ''}`}>
              <h2 className="work-with-us-contact-title">
                TELL US WHAT
                <br />
                YOU'RE BUILDING.
              </h2>
              <p className="work-with-us-contact-subtitle">
                Tell us what you have in mind. We'll take it from there.
              </p>
            </div>
            <div className={`work-with-us-contact-form ${contactVisible ? 'animate-slide-up stagger-1' : ''}`}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CEO CTA Section */}
      <section className="work-with-us-ceo-cta" ref={ceoRef}>
        <div className="container">
          <div className="work-with-us-ceo-cta-content">
            <h2 className={`work-with-us-ceo-cta-title ${ceoVisible ? 'animate-slide-up' : ''}`}>
              SOMETIMES ALL YOU NEED
              <br />
              IS ONE CONVERSATION.
            </h2>
            <p className={`work-with-us-ceo-cta-subtitle ${ceoVisible ? 'animate-slide-up stagger-1' : ''}`}>
              Talk to us about oil palm, partnerships, stories or what comes next.
            </p>
            <div className={ceoVisible ? 'animate-slide-up stagger-2' : ''}>
              <Button 
                href="#" 
                variant="primary" 
                size="lg"
                className="work-with-us-ceo-cta-button"
              >
                BOOK A ONE-ON-ONE →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WorkWithUs