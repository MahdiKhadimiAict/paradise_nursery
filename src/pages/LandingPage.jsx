import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import AboutUs from '../components/AboutUs.jsx';

export default function LandingPage() {
  return (
    <main className="landing-page">
      <Navbar />
      <section className="landing-content">
        <AboutUs />
        <Link to="/products" className="btn btn-primary btn-get-started">
          Get Started
        </Link>
      </section>
    </main>
  );
}