import SectionHeading from '../components/SectionHeading'
import EditorialImage from '../components/EditorialImage'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './WhoWeAre.css'

const WhoWeAre = () => {
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.1 })
  const [storyRef, storyVisible] = useScrollAnimation({ threshold: 0.2 })
  const [pillarsRef, pillarsVisible] = useScrollAnimation({ threshold: 0.1 })
  const [statementRef, statementVisible] = useScrollAnimation({ threshold: 0.2 })
  const [valuesRef, valuesVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <div className="who-we-are">
      {/* Hero Section */}
      <section className="who-we-are-hero" ref={heroRef}>
        <div className="container">
          <span className={`who-we-are-eyebrow ${heroVisible ? 'animate-slide-up' : ''}`}>WHO WE ARE</span>
          <h1 className={`who-we-are-title ${heroVisible ? 'animate-slide-up stagger-1' : ''}`}>
            THIS IS
            <br />
            THE OMO STORY.
          </h1>
        </div>
      </section>

      {/* Image Section */}
      <section className="who-we-are-image-section">
        <div className="container">
          <EditorialImage
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=800&fit=crop"
            alt="Omo Distro team and creative work"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="who-we-are-story" ref={storyRef}>
        <div className="container">
          <h2 className={`who-we-are-story-title ${storyVisible ? 'animate-slide-up' : ''}`}>
            EVERY MOVEMENT STARTS WITH AN IDEA.
          </h2>
          <p className={`who-we-are-story-text ${storyVisible ? 'animate-slide-up stagger-1' : ''}`}>
            Omo Distro began with a simple belief: African creativity deserves spaces where it can grow, connect and travel beyond borders. We're building those spaces.
          </p>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="who-we-are-pillars" ref={pillarsRef}>
        <div className="container">
          <div className="who-we-are-pillars-grid">
            <div className={`who-we-are-pillar ${pillarsVisible ? 'animate-slide-up' : ''}`}>
              <h3 className="who-we-are-pillar-title">WHERE WE COME FROM</h3>
              <p className="who-we-are-pillar-text">
                Rooted in African creativity and culture, we draw inspiration from the continent's rich heritage and dynamic present.
              </p>
            </div>

            <div className={`who-we-are-pillar ${pillarsVisible ? 'animate-slide-up stagger-1' : ''}`}>
              <h3 className="who-we-are-pillar-title">WHAT WE BELIEVE</h3>
              <p className="who-we-are-pillar-text">
                We believe in the power of ideas, the importance of authentic storytelling, and the potential of African creativity on the global stage.
              </p>
            </div>

            <div className={`who-we-are-pillar ${pillarsVisible ? 'animate-slide-up stagger-2' : ''}`}>
              <h3 className="who-we-are-pillar-title">WHERE WE'RE GOING</h3>
              <p className="who-we-are-pillar-text">
                We're building for what's next — creating platforms, connections and opportunities that will shape the future of African creative expression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Orange Statement */}
      <section className="who-we-are-statement" ref={statementRef}>
        <div className="container">
          <h2 className={`who-we-are-statement-text ${statementVisible ? 'animate-slide-up' : ''}`}>
            WE ARE BUILDING
            <br />
            FOR WHAT'S NEXT.
          </h2>
        </div>
      </section>

      {/* Values Section */}
      <section className="who-we-are-values" ref={valuesRef}>
        <div className="container">
          <SectionHeading
            eyebrow="OUR VALUES"
            title="What guides us"
            centered
          />
          
          <div className="who-we-are-values-grid">
            <div className={`who-we-are-value ${valuesVisible ? 'animate-slide-up' : ''}`}>
              <span className="who-we-are-value-number">01</span>
              <h3 className="who-we-are-value-title">CULTURE</h3>
              <p className="who-we-are-value-text">
                We honor and celebrate African culture in all its forms.
              </p>
            </div>

            <div className={`who-we-are-value ${valuesVisible ? 'animate-slide-up stagger-1' : ''}`}>
              <span className="who-we-are-value-number">02</span>
              <h3 className="who-we-are-value-title">CREATIVITY</h3>
              <p className="who-we-are-value-text">
                We believe in the transformative power of creative expression.
              </p>
            </div>

            <div className={`who-we-are-value ${valuesVisible ? 'animate-slide-up stagger-2' : ''}`}>
              <span className="who-we-are-value-number">03</span>
              <h3 className="who-we-are-value-title">COMMUNITY</h3>
              <p className="who-we-are-value-text">
                We're stronger together, building connections that last.
              </p>
            </div>

            <div className={`who-we-are-value ${valuesVisible ? 'animate-slide-up stagger-3' : ''}`}>
              <span className="who-we-are-value-number">04</span>
              <h3 className="who-we-are-value-title">IMPACT</h3>
              <p className="who-we-are-value-text">
                We measure success by the positive change we create.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhoWeAre