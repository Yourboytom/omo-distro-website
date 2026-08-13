import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import './TheAfricanStory.css'

const TheAfricanStory = () => {
  const stories = [
    {
      id: 1,
      category: 'CULTURE',
      title: 'THE PEOPLE REDEFINING WHAT AFRICAN CREATIVITY LOOKS LIKE',
      description: 'A deep dive into the artists, designers and creators shaping the future of African creative expression.',
      image: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=600&h=400&fit=crop',
      featured: true,
    },
    {
      id: 2,
      category: 'PEOPLE',
      title: 'MEET THE INNOVATORS BUILDING AFRICA\'S TECH FUTURE',
      description: 'From Lagos to Nairobi, entrepreneurs are reimagining what\'s possible across the continent.',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop',
      featured: false,
    },
    {
      id: 3,
      category: 'CREATIVITY',
      title: 'HOW AFRICAN FASHION IS CONQUERING THE GLOBAL STAGE',
      description: 'The designers and brands bringing African aesthetics to international runways and beyond.',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop',
      featured: false,
    },
    {
      id: 4,
      category: 'BUSINESS',
      title: 'THE RISE OF AFRICAN STARTUPS IN THE GLOBAL ECONOMY',
      description: 'Understanding the factors behind Africa\'s growing startup ecosystem and investment landscape.',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop',
      featured: false,
    },
    {
      id: 5,
      category: 'IDEAS',
      title: 'SUSTAINABLE INNOVATION: AFRICAN SOLUTIONS TO GLOBAL CHALLENGES',
      description: 'How African entrepreneurs are addressing climate change and sustainability through creative solutions.',
      image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&h=400&fit=crop',
      featured: false,
    },
    {
      id: 6,
      category: 'LIFESTYLE',
      title: 'THE NEW WAVE OF AFRICAN LIFESTYLE BRANDS',
      description: 'From wellness to travel, African lifestyle brands are creating new narratives and experiences.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      featured: false,
    },
  ]

  const categories = ['CULTURE', 'PEOPLE', 'CREATIVITY', 'BUSINESS', 'IDEAS', 'LIFESTYLE']

  return (
    <div className="the-african-story">
      {/* Hero Section */}
      <section className="the-african-story-hero">
        <div className="container">
          <h1 className="the-african-story-title">
            THE AFRICAN
            <br />
            STORY.
          </h1>
          <p className="the-african-story-subtitle">
            People. Culture. Creativity. Ideas. The conversations shaping Africa and the world around it.
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="the-african-story-featured">
        <div className="container">
          <div className="the-african-story-featured-card">
            <div className="the-african-story-featured-image">
              <img
                src={stories[0].image}
                alt={stories[0].title}
                className="the-african-story-featured-img"
              />
            </div>
            <div className="the-african-story-featured-content">
              <span className="the-african-story-featured-category">
                {stories[0].category}
              </span>
              <h2 className="the-african-story-featured-title">
                {stories[0].title}
              </h2>
              <p className="the-african-story-featured-description">
                {stories[0].description}
              </p>
              <Button variant="primary" size="md">
                READ STORY →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="the-african-stories-grid">
        <div className="container">
          <SectionHeading
            eyebrow="LATEST STORIES"
            title="Explore the conversation"
            centered
          />
          
          <div className="the-african-stories">
            {stories.slice(1).map((story) => (
              <article key={story.id} className="the-african-story-card">
                <div className="the-african-story-card-image">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="the-african-story-card-img"
                  />
                </div>
                <div className="the-african-story-card-content">
                  <span className="the-african-story-card-category">
                    {story.category}
                  </span>
                  <h3 className="the-african-story-card-title">
                    {story.title}
                  </h3>
                  <p className="the-african-story-card-description">
                    {story.description}
                  </p>
                  <Link to="#" className="the-african-story-card-link">
                    READ STORY →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="the-african-story-categories">
        <div className="container">
          <div className="the-african-story-categories-grid">
            {categories.map((category) => (
              <Link
                key={category}
                to="#"
                className="the-african-story-category-card"
              >
                <span className="the-african-story-category-name">
                  {category}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TheAfricanStory