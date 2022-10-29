import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import Profile from './components/Profile';

function App() {
  return (
    <div className="app">
      <main className="app-main">
        <section className="profile-section">
          <Profile />
        </section>
        <section className="links-section">
          <SocialLinks />
        </section>
        <section className="foot-section">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;