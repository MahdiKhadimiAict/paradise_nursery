import Navbar from '../components/Navbar.jsx';
import '../styles/about.css';

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main className="about-page">
        <header className="about-hero">
          <span className="about-hero-leaf" aria-hidden="true">
            &#127807;
          </span>
          <h1>About Us</h1>
          <p>
            Paradise Nursery — growing greener homes, one plant at a time.
          </p>
        </header>

        <section className="about-story">
          <h2>Our Story</h2>
          <p>
            Paradise Nursery began in 2015 as a single greenhouse on the edge of town,
            overflowing with ferns, succulents, and a stubborn Monstera that refused to
            stay in its pot. What started as a weekend hobby for our founders quickly
            grew into a family-run nursery dedicated to one simple belief: every home
            deserves a little bit of paradise.
          </p>
          <p>
            Today we grow and hand-select thousands of houseplants each year, shipping
            them to plant lovers across the country. We stay intentionally small,
            because it lets us personally inspect every plant, wrap it with care, and
            include simple, honest care instructions that help it thrive in its new
            home.
          </p>
        </section>

        <section className="about-grid">
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              To make bringing nature indoors easy, joyful, and sustainable, so that
              anyone — from first-time plant parents to seasoned collectors — can grow
              something green.
            </p>
          </div>
          <div className="about-card">
            <h3>Our Promise</h3>
            <p>
              Every plant is greenhouse-grown, root-checked, and packed with care.
              If your plant arrives less than happy, we replace it — no questions asked.
            </p>
          </div>
          <div className="about-card">
            <h3>What We Offer</h3>
            <p>
              Three curated collections — Low-Light Plants, Succulents &amp; Cacti, and
              Tropicals — chosen for how they fit real-life rooms and lifestyles.
            </p>
          </div>
        </section>

        <section className="about-quote">
          <blockquote>
            &ldquo;We don&rsquo;t sell plants. We send plant friends home with people.&rdquo;
          </blockquote>
          <p>— The Paradise Nursery family</p>
        </section>

        <section className="about-contact">
          <h2>Visit or Say Hello</h2>
          <p>Open daily 9:00 a.m. &ndash; 6:00 p.m.</p>
          <p>123 Fern Avenue, Greenhollow</p>
          <p>
            <a href="mailto:hello@paradisenursery.example">hello@paradisenursery.example</a>
          </p>
        </section>
      </main>
    </>
  );
}