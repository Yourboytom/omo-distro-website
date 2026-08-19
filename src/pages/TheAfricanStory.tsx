import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './TheAfricanStory.css'

const TheAfricanStory = () => {
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.1 })
  const [featuredRef, featuredVisible] = useScrollAnimation({ threshold: 0.2 })
  const [storiesRef, storiesVisible] = useScrollAnimation({ threshold: 0.1 })
  const [categoriesRef, categoriesVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <div className="the-african-story">
      {/* Hero Section */}
      <section className="the-african-story-hero" ref={heroRef}>
        <div className="container">
          <h1 className={`the-african-story-title ${heroVisible ? 'animate-slide-up' : ''}`}>
            Beyond what we move are the people who make it possible.
          </h1>
          <p className={`the-african-story-subtitle ${heroVisible ? 'animate-slide-up stagger-1' : ''}`}>
            The farmers. The traders. The builders. The families. The brands. We go looking for their stories. And when we find them, we tell them.
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="the-african-story-featured" ref={featuredRef}>
        <div className="container">
          <div className={`the-african-story-featured-placeholder ${featuredVisible ? 'animate-slide-up' : ''}`}>
            <div className="the-african-story-video-placeholder">
              <span>[STORY / VIDEO 01]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="the-african-stories-grid" ref={storiesRef}>
        <div className="container">
          <SectionHeading
            eyebrow="THE PEOPLE BEHIND THE PRODUCT"
            title="Every resource has a human story behind it."
            centered
          />
          
          <div className="the-african-stories">
            {[1, 2, 3, 4].map((story, index) => (
              <div 
                key={story} 
                className={`the-african-story-placeholder ${storiesVisible ? 'animate-slide-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="the-african-story-video-placeholder">
                  <span>[STORY / VIDEO 0{story}]</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="the-african-story-statement" ref={categoriesRef}>
        <div className="container">
          <div className={`the-african-story-statement-content ${categoriesVisible ? 'animate-slide-up' : ''}`}>
            <h2 className="the-african-story-statement-title">
              THIS IS
              <br />
              THE AFRICAN STORY.
            </h2>
            <p className="the-african-story-statement-text">
              Still being written. Still being built. Still moving.
            </p>
            <div className={`the-african-story-statement-ctas ${categoriesVisible ? 'animate-slide-up stagger-1' : ''}`}>
              <Button href="/work-with-us" variant="primary" size="lg">
                SHARE YOUR STORY →
              </Button>
              <Button href="/work-with-us" variant="secondary" size="lg">
                ONE-ON-ONE →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Tagline */}
      <section className="the-african-story-footer">
        <div className="container">
          <p className="the-african-story-footer-text">
            PEOPLE. PLACES. POSSIBILITIES.
          </p>
        </div>
      </section>
    </div>
  )
}

export default TheAfricanStory