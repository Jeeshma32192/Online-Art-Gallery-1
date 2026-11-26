import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Categories from './Categories.jsx';
import Banner from './Banner.jsx';
import Services from './Services.jsx';
import Footer from './Footer.jsx';

export default function Home() {
  const loggedIn = localStorage.getItem('loggedIn') === 'true';
  const role = localStorage.getItem('loginType');
  const userLoggedIn = loggedIn && role === 'user';

  return (
    <div className="container home-page">
      <Header />
      <Categories />
      <Banner />

      {userLoggedIn && (
        <section className="welcome-artwork">
          <div className="welcome-art-copy">
            <p className="eyebrow">A LITTLE INSPIRATION FOR YOU</p>
            <h2>Welcome back to<br /><em>your world of art.</em></h2>
            <p>Take a moment to discover this featured painting, selected to bring colour and creativity to your day.</p>
            <Link className="primary-button" to="/artworks">Explore the gallery ↗</Link>
          </div>
          <div className="welcome-art-image">
            <img
              src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1200&q=90"
              alt="Colourful expressive painting featured for the signed-in user"
            />
            <span>Featured painting · Artora collection</span>
          </div>
        </section>
      )}

      <Services />
      <Footer />
    </div>
  );
}
