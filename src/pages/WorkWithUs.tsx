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
            LET'S BUILD
            <br />
            SOMETHING.
          </h1>
          <p className={`work-with-us-subtitle ${heroVisible ? 'animate-slide-up stagger-1' : ''}`}>
            Have an idea, brand, project or story that needs to move? Let's talk.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="work-with-us-services" ref={servicesRef}>
        <div className="container">
          <SectionHeading
            eyebrow="SERVICES"
            title="How we can help"
            centered
          />
          
          <div className="work-with-us-services-grid">
            <div className={`work-with-us-service ${servicesVisible ? 'animate-slide-up' : ''}`}>
              <span className="work-with-us-service-number">01</span>
              <h3 className="work-with-us-service-title">CREATIVE DIRECTION</h3>
              <p className="work-with-us-service-description">
                We help shape ideas from concept to execution.
              </p>
            </div>

            <div className={`work-with-us-service ${servicesVisible ? 'animate-slide-up stagger-1' : ''}`}>
              <span className="work-with-us-service-number">02</span>
              <h3 className="work-with-us-service-title">BRAND & DIGITAL</h3>
              <p className="work-with-us-service-description">
                We create identities and digital experiences that people remember.
              </p>
            </div>

            <div className={`work-with-us-service ${servicesVisible ? 'animate-slide-up stagger-2' : ''}`}>
              <span className="work-with-us-service-number">03</span>
              <h3 className="work-with-us-service-title">CONTENT & STORYTELLING</h3>
              <p className="work-with-us-service-description">
                We turn ideas, people and culture into stories worth sharing.
              </p>
            </div>

            <div className={`work-with-us-service ${servicesVisible ? 'animate-slide-up stagger-3' : ''}`}>
              <span className="work-with-us-service-number">04</span>
              <h3 className="work-with-us-service-title">STRATEGY & CONSULTING</h3>
              <p className="work-with-us-service-description">
                We help brands find their voice, position and next move.
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
                Share your idea with us and let's explore what we can create together.
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
              SOMETIMES
              <br />
              ALL YOU NEED
              <br />
              IS ONE CONVERSATION.
            </h2>
            <p className={`work-with-us-ceo-cta-subtitle ${ceoVisible ? 'animate-slide-up stagger-1' : ''}`}>
              Book a one-on-one conversation with the CEO and let's explore what your idea could become.
            </p>
            <div className={ceoVisible ? 'animate-slide-up stagger-2' : ''}>
              <Button 
                href="#" 
                variant="primary" 
                size="lg"
                className="work-with-us-ceo-cta-button"
              >
                BOOK A ONE-ON-ONE WITH THE CEO →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WorkWithUs