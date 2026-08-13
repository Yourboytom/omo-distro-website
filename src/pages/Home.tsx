import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="container home-hero-container">
          <div className="home-hero-content">
            <h1 className="home-hero-title">
              THE BIG IDEA
              <br />
              <span className="text-orange">IS AFRICAN.</span>
            </h1>
            <p className="home-hero-subtitle">
              Omo Distro is a creative platform connecting ideas, people and stories from Africa with the world.
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
          <div className="home-hero-image">
            <div className="home-hero-image-wrapper">
              <div className="home-hero-orange-accent"></div>
              <img
                src="https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=800&h=1000&fit=crop"
                alt="African creative photography"
                className="home-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="home-statement">
        <div className="container">
          <h2 className="home-statement-text">
            AFRICA HAS NEVER LACKED STORIES.
            <br />
            WE'RE HERE TO MAKE SURE
            <br />
            <span className="text-orange">THEY ARE HEARD.</span>
          </h2>
          <p className="home-statement-subtitle">
            We believe in the power of African creativity and the stories that shape our continent and the world.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="home-what-we-do">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT WE DO"
            title="We transform ideas into experiences"
            centered
          />
          
          <div className="home-services">
            <div className="home-service animate-slide-up stagger-1">
              <span className="home-service-number">01</span>
              <h3 className="home-service-title">IDEAS</h3>
              <p className="home-service-description">
                We transform ambitious ideas into meaningful creative experiences.
              </p>
            </div>

            <div className="home-service animate-slide-up stagger-2">
              <span className="home-service-number">02</span>
              <h3 className="home-service-title">STORIES</h3>
              <p className="home-service-description">
                We create stories that connect African culture with global audiences.
              </p>
            </div>

            <div className="home-service animate-slide-up stagger-3">
              <span className="home-service-number">03</span>
              <h3 className="home-service-title">CONNECTIONS</h3>
              <p className="home-service-description">
                We bring people, brands and opportunities together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <div className="container home-cta-container">
          <h2 className="home-cta-title">HAVE AN IDEA?</h2>
          <Button href="/work-with-us" variant="primary" size="lg">
            LET'S TALK →
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home