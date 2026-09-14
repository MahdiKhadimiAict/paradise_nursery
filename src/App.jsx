
export default function App() {
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
