import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Home.css'

const Home = () => {
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.1 })
  const [statementRef, statementVisible] = useScrollAnimation({ threshold: 0.2 })
  const [servicesRef, servicesVisible] = useScrollAnimation({ threshold: 0.1 })
  const [ctaRef, ctaVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home-hero" ref={heroRef}>
        <div className="container home-hero-container">
          <div className={`home-hero-content ${heroVisible ? 'animate-slide-up' : ''}`}>
            <h1 className="home-hero-title">
              THE BIG IDEA
              <br />
              <span className="text-orange">IS AFRICAN.</span>
            </h1>
            <p className="home-hero-subtitle">
              We're moving the African story, her oil palm, and more.
            </p>
            <div className="home-hero-ctas">
              <Button href="/work-with-us" variant="primary" size="lg">
                WORK WITH US →
              </Button>
              <Button href="/the-african-story" variant="outline" size="lg">
                EXPLORE THE STORY ↓
              </Button>
            </div>
          </div>
          <div className={`home-hero-image ${heroVisible ? 'animate-slide-up stagger-2' : ''}`}>
            <div className="home-hero-image-wrapper">
              <div className="home-hero-orange-accent"></div>
              <img
                src="https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=800&h=1000&fit=crop"
                alt="African oil palm resources"
                className="home-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="home-statement" ref={statementRef}>
        <div className="container">
          <h2 className={`home-statement-text ${statementVisible ? 'animate-slide-up' : ''}`}>
            AFRICA HAS NEVER LACKED STORIES.
            <br />
            WE'RE HERE TO MAKE SURE
            <br />
            <span className="text-orange">THEY ARE HEARD.</span>
          </h2>
          <p className={`home-statement-subtitle ${statementVisible ? 'animate-slide-up stagger-1' : ''}`}>
            We believe in championing the people who feed our continent and the world.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="home-what-we-do" ref={servicesRef}>
        <div className="container">
          <SectionHeading
            eyebrow="WHAT WE DO"
            title="ONE RESOURCE. MANY POSSIBILITIES."
            centered
          />
          
          <div className="home-services">
            <div className={`home-service ${servicesVisible ? 'animate-slide-up' : ''}`}>
              <span className="home-service-number">01</span>
              <h3 className="home-service-title">CRUDE PALM OIL</h3>
              <p className="home-service-description">
                Nigerian crude palm oil: Traced, Sourced, Vetted For Industrial Supply.
              </p>
            </div>

            <div className={`home-service ${servicesVisible ? 'animate-slide-up stagger-1' : ''}`}>
              <span className="home-service-number">02</span>
              <h3 className="home-service-title">PALM OIL FOR RETAIL NETWORKS</h3>
              <p className="home-service-description">
                Palm oil for the everyday African household. From source to shelf.
              </p>
            </div>

            <div className={`home-service ${servicesVisible ? 'animate-slide-up stagger-2' : ''}`}>
              <span className="home-service-number">03</span>
              <h3 className="home-service-title">THE AFRICAN STORY</h3>
              <p className="home-service-description">
                We find the stories behind what moves Africa. And tell them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta" ref={ctaRef}>
        <div className="container home-cta-container">
          <h2 className={`home-cta-title ${ctaVisible ? 'animate-slide-up' : ''}`}>ONE RESOURCE. ONE GROWING NETWORK.</h2>
          <div className={`home-cta-buttons ${ctaVisible ? 'animate-slide-up stagger-1' : ''}`}>
            <Button href="/work-with-us" variant="primary" size="lg">
              NEED CPO / PALM OIL →
            </Button>
            <Button href="/work-with-us" variant="secondary" size="lg">
              LET'S TALK →
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home