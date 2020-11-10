import './App.css';

function App() {
  return (
    <div className="App">
      {/* <nav className="nav">
        <ul className="nav__ul">
          <li className="nav__ul__li"><div className="nav__ul__li div">Shop Products</div></li>
          <li className="nav__ul__li"><div className="nav__ul__li div">About Us</div></li>
          <li className="nav__ul__li"><div className="nav__ul__li div">Blog</div></li>
          <li className="nav__ul__li"><h1 className="nav__ul__li title">Public Goods</h1></li>
          <li className="nav__ul__li">
            <div className="nav__ul__li search">
              <input placeholder="Search"></input>
            </div>
          </li>
          <li className="nav__ul__li"><div className="nav__ul__li div">Free Trial</div></li>
          <li className="nav__ul__li"><div className="nav__ul__li div">Log In</div></li>
          <li className="nav__ul__li"><div className="nav__ul__li div">Cart</div></li>
        </ul>
      </nav> */}
      
      <main className="main">
        <section className="hero">
          <div className="hero__div">
            <h3 className="hero__div__h3">Introducing</h3>
            <h2 className="hero__div__h2">The first 100% biodegradable bamboo maxi pad</h2>
            <p className="hero__div__p">The most eco-friendly menstrual care in the world is here.</p>
            <div className="orange_button">30 day trial</div>
          </div>
        </section>

        <section className="promo">
          <div className="promo__div__first">
            <h2 className="promo__div__first__elem">We found that the best care could also be the most sustainable.</h2>
            <p className="promo__div__first__elem">We started by using organic bamboo because it grows faster and requires less water to produce than cotton or rayon fibers. It's also softer and 15% more absorbent.</p>
          </div>

          <div className="promo__div__second">
            <div className="promo__div__second__div pad_detail">
              <h2 className="promo__div__second__elem">No plastics or synthetics</h2>
              <p className="promo__div__second__elem">We got rid of plastic and synthetic components that can sit in landfills for up to 800 years. Even our wrapper is 100% biodegradable.</p>
            </div>
            <div className="promo__div__second__div pad_in_hand">
              <h2 className="promo__div__second__elem">Designed for your body.</h2>
              <p className="promo__div__second__elem">Feather-light and ultra thin.</p>
              <p className="promo__div__second__elem">Super soft for sensitive skin.</p>
              <p className="promo__div__second__elem">Antimicrobial and hypoallergenic.</p>
              <p className="promo__div__second__elem">No synthetic fibers or elemental chlorine.</p>
            </div>
          </div>
        </section>

        <section className="collection">
          <article className="collection__article">
            <img className="collection__article__img" src="/images/bamboo-regular-maxi-pad.jpg" alt="bamboo regular pad"/>
            <div className="collection__article__div">
              <p className="collection__article__div__p">Bamboo Regular Pad</p>
              <h3 className="collection__article__div__h3">$3.00</h3>
            </div>
          </article>

          <article className="collection__article">
            <img className="collection__article__img" src="/images/bamboo-super-maxi-pad.jpg" alt="bamboo super pad"/>
            <div className="collection__article__div">
              <p className="collection__article__div__p">Bamboo Super Pad</p>
              <h3 className="collection__article__div__h3">$3.00</h3>
            </div>
          </article>

          <article className="collection__article">
            <img className="collection__article__img" src="/images/bamboo-overnight-pads.jpg" alt="bamboo overnight pad"/>
            <div className="collection__article__div">
              <p className="collection__article__div__p">Bamboo Panty Liner</p>
              <h3 className="collection__article__div__h3">$3.00</h3>
            </div>
          </article>

          <article className="collection__article">
            <img className="collection__article__img" src="/images/bamboo-panty-liners.jpg" alt="bamboo panty liner"/>            <div className="collection__article__div">
              <p className="collection__article__div__p">Bamboo Panty Liner</p>
              <h3 className="collection__article__div__h3">$3.00</h3>
            </div>
          </article>
        </section>

        <section className="sell">
          <div className="orange_button">Shop Now</div>
        </section>

        <section className="conclusion">
          <h2 className="conclusion__elem">New to Public Goods?</h2>
          <p className="conclusion__elem">We're committed to making healthier, better choices easy and affordable to all. Good-for-you, eco-friendly and beautifully designed home essentials, all in one place and at ultra-low prices.</p>
          <aside className="conclusion__aside">
            <p className="conclusion__aside__p">As seen in:</p>
            <div className="conclusion__aside__div" src="/images/press-quotes.png" alt="press quotes"/>
          </aside>
          <div className="orange_button">Shop Now</div>
        </section>


      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
