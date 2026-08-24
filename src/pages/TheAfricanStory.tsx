import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './TheAfricanStory.css'

const TheAfricanStory = () => {
  const [statementRef, statementVisible] = useScrollAnimation({ threshold: 0.2 })
  const [storiesRef, storiesVisible] = useScrollAnimation({ threshold: 0.1 })

  const reels = [
    { 
      id: 1, 
      title: "The Farmers", 
      description: "Stories from the fields",
      instagramUrl: "https://www.instagram.com/reel/DcQ2JlNocyc/",
      thumbnail: "/images/reels/reel-1.jpeg"
    },
    { 
      id: 2, 
      title: "The Traders", 
      description: "Moving resources across borders",
      instagramUrl: "https://www.instagram.com/reel/DbN0cSQOQbc/",
      thumbnail: "/images/reels/reel-2.jpeg"
    },
    { 
      id: 3, 
      title: "The Builders", 
      description: "Creating infrastructure",
      instagramUrl: "https://www.instagram.com/reel/Da5spdKO88I/",
      thumbnail: "/images/reels/reel-3.jpeg"
    },
    { 
      id: 4, 
      title: "The Families", 
      description: "Generations of knowledge",
      instagramUrl: "https://www.instagram.com/reel/DYVTDyeOhwL/",
      thumbnail: "/images/reels/reel-4.jpeg"
    },
    { 
      id: 5, 
      title: "The Brands", 
      description: "African products going global",
      instagramUrl: "https://www.instagram.com/reel/DcBsasUo6wk/",
      thumbnail: "/images/reels/reel-5.jpeg"
    },
    { 
      id: 6, 
      title: "The Future", 
      description: "What's next for African resources",
      instagramUrl: "https://www.instagram.com/reel/Db3qDnwqIvm/",
      thumbnail: "/images/reels/reel-6.jpeg"
    },
    { 
      id: 7, 
      title: "The Community", 
      description: "Building stronger together",
      instagramUrl: "https://www.instagram.com/reel/DcHD35GI264/",
      thumbnail: "/images/reels/reel-7.jpeg"
    },
    { 
      id: 8, 
      title: "The Journey", 
      description: "From source to shelf",
      instagramUrl: "https://www.instagram.com/reel/DaLJuWyMJh6/",
      thumbnail: "/images/reels/reel-8.jpeg"
    },
  ]

  return (
    <div className="the-african-story">
      {/* Statement Section */}
      <section className="the-african-story-statement" ref={statementRef}>
        <div className="container">
          <div className={`the-african-story-statement-content ${statementVisible ? 'animate-slide-up' : ''}`}>
            <h2 className="the-african-story-statement-title">
              THIS IS
              <br />
              THE AFRICAN STORY.
            </h2>
            <p className="the-african-story-statement-text">
              Still being written. Still being built. Still moving.
            </p>
            <div className={`the-african-story-statement-ctas ${statementVisible ? 'animate-slide-up stagger-1' : ''}`}>
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

      {/* Instagram Reels Marquee */}
      <section className="the-african-stories-grid" ref={storiesRef}>
        <div className="container">
          <SectionHeading
            eyebrow="THE PEOPLE BEHIND THE PRODUCT"
            title="Every resource has a human story behind it."
            description="8 stories of farmers, traders, builders, families, brands, communities, and more."
            centered
          />
          
          <div className={`the-african-reels-marquee ${storiesVisible ? 'animate-slide-up' : ''}`}>
            <div className="the-african-reels-track-marquee">
              {[...reels, ...reels].map((reel, index) => (
                <div 
                  key={`${reel.id}-${index}`} 
                  className="the-african-reel-card-marquee"
                  onClick={() => window.open(reel.instagramUrl, '_blank')}
                  title={`Watch ${reel.title} on Instagram`}
                >
                  <div className="the-african-reel-placeholder-marquee">
                    <img 
                      src={reel.thumbnail} 
                      alt={reel.title}
                      className="the-african-reel-thumbnail"
                    />
                    <div className="the-african-reel-content-marquee">
                      <h3 className="the-african-reel-title-marquee">{reel.title}</h3>
                      <p className="the-african-reel-description-marquee">{reel.description}</p>
                      <div className="the-african-reel-play-marquee">
                        <div className="the-african-reel-play-icon-marquee">▶</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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