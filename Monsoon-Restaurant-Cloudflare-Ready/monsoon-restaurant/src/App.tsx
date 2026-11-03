import { useEffect, useState } from 'react';
import {
  Accessibility,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Baby,
  Beer,
  CarFront,
  Coffee,
  CreditCard,
  MapPin,
  Menu as MenuIcon,
  ParkingCircle,
  Phone,
  Sparkles,
  Trees,
  UtensilsCrossed,
  Users,
  Wine,
  X,
} from 'lucide-react';

const phone = '+9779801424331';
const address = 'JVVX+Q4H, Mahendra Hwy, Kankai, Koshi Province 57200';
const phoneHref = 'tel:+9779801424331';
const mapHref =
  'https://www.google.com/maps/search/?api=1&query=JVVX%2BQ4H%2C%20Mahendra%20Hwy%2C%20Kankai%2C%20Koshi%20Province%2057200';

const menuPhotos = [
  'image_1793282266229.png',
  'image_1793282271151.png',
  'image_1793282275310.png',
  'image_1793282281138.png',
  'image_1793282294300.png',
  'image_1793282297934.png',
  'image_1793282302836.png',
  'image_1793282308702.png',
  'image_1793282312427.png',
];

const menuOfferings = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Coffee',
  'Alcohol',
  'Small plates',
  'Quick bite',
  'All-you-can-eat',
  'Late-night food',
  'Beer',
  'Cocktails',
  'Spirits',
  'Wine',
];

const information = [
  {
    icon: Accessibility,
    title: 'Easy to settle in',
    details: [
      'Wheelchair-accessible car park',
      'Wheelchair-accessible toilet',
      'Outdoor seating',
      'Seating and table service',
      'Toilet on site',
    ],
  },
  {
    icon: UtensilsCrossed,
    title: 'Come as you are',
    details: [
      'Dine-in, takeaway and delivery',
      'Casual, quiet atmosphere',
      'Good for kids',
      'Welcomes groups and tourists',
      'Popular for lunch and solo dining',
    ],
  },
  {
    icon: Beer,
    title: 'A good pour, too',
    details: [
      'Great beer selection',
      'Bar on site',
      'Alcohol, beer, cocktails and spirits',
      'Wine, coffee and small plates',
    ],
  },
  {
    icon: CreditCard,
    title: 'The useful details',
    details: [
      'Accepts reservations',
      'NFC mobile payments',
      'Free street parking',
      'Free parking lot',
      'Parking can be somewhat difficult to find',
    ],
  },
];

function BrandMark() {
  return (
    <a className="brand" href="#home" aria-label="Monsoon Restaurant home">
      <span className="brand-icon" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none">
          <path
            d="M10.5 13.2c0-4.2 3.3-7.7 7.4-7.7s7.4 3.5 7.4 7.7c0 5.3-7.4 12.9-7.4 12.9s-7.4-7.6-7.4-12.9Z"
            fill="currentColor"
          />
          <path
            d="M21.5 26.1c0-3.3 2.5-6.1 5.7-6.1s5.7 2.8 5.7 6.1c0 4.2-5.7 10.2-5.7 10.2s-5.7-6-5.7-10.2Z"
            fill="currentColor"
            opacity=".58"
          />
          <path
            d="M5.8 30.6c0-2.4 1.8-4.4 4-4.4s4 2 4 4.4c0 3-4 7.4-4 7.4s-4-4.4-4-7.4Z"
            fill="currentColor"
            opacity=".32"
          />
        </svg>
      </span>
      <span className="brand-copy">
        <span className="brand-name">Monsoon</span>
        <span className="brand-caption">Restaurant &amp; Bar · Kankai</span>
      </span>
    </a>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  useEffect(() => {
    if (activePhoto === null) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActivePhoto(null);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [activePhoto]);

  const closeNavigation = () => setMobileMenuOpen(false);

  return (
    <main id="home">
      <div className="topline">
        <span>Kankai, Koshi Province</span>
        <a href={phoneHref} data-testid="link-top-phone">
          <Phone size={13} strokeWidth={1.8} aria-hidden="true" />
          <span>{phone}</span>
        </a>
      </div>

      <header className="site-header">
        <BrandMark />
        <button
          className="mobile-nav-toggle"
          type="button"
          aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
          data-testid="button-mobile-nav"
        >
          {mobileMenuOpen ? <X size={22} /> : <MenuIcon size={22} />}
        </button>
        <nav
          className={`nav-links${mobileMenuOpen ? ' is-open' : ''}`}
          aria-label="Main navigation"
        >
          <a href="#story" onClick={closeNavigation} data-testid="link-story">
            Our place
          </a>
          <a href="#menu" onClick={closeNavigation} data-testid="link-menu">
            The menu
          </a>
          <a href="#good-to-know" onClick={closeNavigation} data-testid="link-details">
            Good to know
          </a>
          <a href="#visit" onClick={closeNavigation} data-testid="link-visit">
            Find us
          </a>
          <a
            className="nav-call"
            href={phoneHref}
            onClick={closeNavigation}
            data-testid="link-reserve"
          >
            <span>Call / reserve</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image" role="img" aria-label="A warmly lit restaurant on a rainy evening" />
        <div className="hero-shade" />
        <div className="hero-content page-width">
          <p className="eyebrow hero-eyebrow">
            <span className="eyebrow-line" />
            Your table, whatever the weather
          </p>
          <h1 id="hero-title">
            Come in
            <br />
            <em>out of</em> the rain.
          </h1>
          <p className="hero-description">
            Coffee, good plates and a proper pour. Find your kind of evening at
            Monsoon.
          </p>
          <div className="hero-actions">
            <a className="button button-saffron" href="#menu" data-testid="link-explore-menu">
              Explore the menu <ArrowDownRight size={17} aria-hidden="true" />
            </a>
            <a className="hero-phone" href={phoneHref} data-testid="link-hero-phone">
              <span className="phone-icon">
                <Phone size={16} aria-hidden="true" />
              </span>
              <span>
                <small>Call us or reserve</small>
                <strong>{phone}</strong>
              </span>
            </a>
          </div>
          <div className="hero-location">
            <MapPin size={15} aria-hidden="true" />
            <span>Mahendra Highway · Kankai</span>
          </div>
        </div>
        <a className="hero-scroll" href="#story" aria-label="Scroll to discover Monsoon">
          <span>Scroll to discover</span>
          <span className="scroll-rule" />
        </a>
        <div className="hero-stamp" aria-hidden="true">
          <span>Good company</span>
          <span className="stamp-star">✳</span>
          <span>Rain or shine</span>
        </div>
      </section>

      <div className="service-ribbon" aria-label="Ways to enjoy Monsoon">
        <div className="service-ribbon-inner">
          <span><Coffee size={16} aria-hidden="true" /> Coffee &amp; conversation</span>
          <i aria-hidden="true">✳</i>
          <span><UtensilsCrossed size={16} aria-hidden="true" /> Breakfast to dinner</span>
          <i aria-hidden="true">✳</i>
          <span><Beer size={16} aria-hidden="true" /> A great beer selection</span>
          <i aria-hidden="true">✳</i>
          <span><Trees size={16} aria-hidden="true" /> Outdoor seating</span>
        </div>
      </div>

      <section className="story-section section-pad" id="story">
        <div className="page-width story-grid">
          <div className="story-photo-wrap">
            <img
              className="story-photo"
              src="/monsoon-evening.jpg"
              alt="A warmly lit restaurant with a rain-washed garden path"
              loading="lazy"
            />
            <div className="photo-note">
              <span className="photo-note-mark">✳</span>
              <span>Slow down.<br />Stay awhile.</span>
            </div>
          </div>
          <div className="story-copy">
            <p className="eyebrow"><span className="eyebrow-line" />A little about us</p>
            <h2>
              There’s always
              <br />
              room <em>at our</em> table.
            </h2>
            <p className="story-lede">
              Some days call for a strong coffee. Some call for one more plate
              and one more round. Monsoon is here for both.
            </p>
            <p className="body-copy">
              Settle in for breakfast, lunch or dinner, meet friends at the bar,
              or take a quiet moment for yourself. We’re a casual stop along
              Mahendra Highway, with outdoor seating when you want a little
              fresh air.
            </p>
            <a className="text-link" href="#good-to-know" data-testid="link-discover-details">
              Get to know Monsoon <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="menu-section section-pad" id="menu">
        <div className="page-width">
          <div className="section-heading menu-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" />Something for the table</p>
              <h2>Good things, <em>coming up.</em></h2>
            </div>
            <p className="heading-note">
              From the first coffee of the day to late-night bites and a good
              pour, there’s plenty to enjoy.
            </p>
          </div>

          <div className="offering-list" aria-label="Food and drink offerings">
            {menuOfferings.map((item, index) => (
              <span className="offering-chip" key={item} data-testid={`offering-${index}`}>
                {item}
              </span>
            ))}
          </div>

          <div className="menu-photo-heading">
            <div>
              <span className="small-overline">FROM OUR TABLE</span>
              <h3>Menu snapshots</h3>
            </div>
            <p>Tap a photo to take a closer look. For details, give us a call.</p>
          </div>
          <div className="menu-gallery">
            {menuPhotos.map((photo, index) => (
              <button
                className={`menu-photo menu-photo-${index + 1}`}
                key={photo}
                type="button"
                onClick={() => setActivePhoto(index)}
                aria-label={`Enlarge menu snapshot ${index + 1}`}
                data-testid={`button-menu-photo-${index + 1}`}
              >
                <img
                  src={`/menu/${photo}`}
                  alt={`Menu snapshot ${index + 1}, supplied by Monsoon Restaurant`}
                  loading="lazy"
                />
                <span className="photo-index">0{index + 1}</span>
                <span className="photo-expand" aria-hidden="true">
                  <ArrowUpRight size={17} />
                </span>
              </button>
            ))}
          </div>
          <p className="menu-disclaimer">
            The supplied menu photos are small snapshots. Please call us for
            current dishes, prices and availability.
          </p>
        </div>
      </section>

      <section className="moments-section">
        <div className="moments-image" role="img" aria-label="Rain falling softly in a leafy garden" />
        <div className="moments-content">
          <p className="eyebrow"><span className="eyebrow-line" />A place for every kind of day</p>
          <h2>
            Stay for lunch.
            <br />
            <em>Stay a little longer.</em>
          </h2>
          <p>
            Drop by on your own, bring the whole group, or make us a stop on
            your way through Kankai. We’ll save you a seat.
          </p>
          <a className="button button-outline-light" href={phoneHref} data-testid="link-moments-call">
            Call to reserve <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="moments-caption">KANKAI · KOSHI PROVINCE</div>
      </section>

      <section className="details-section section-pad" id="good-to-know">
        <div className="page-width">
          <div className="section-heading details-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" />The little details</p>
              <h2>Good to <em>know.</em></h2>
            </div>
            <p className="heading-note">
              Come for a meal, a coffee or a drink. We’ve made room for all
              kinds of company.
            </p>
          </div>

          <div className="detail-cards">
            {information.map(({ icon: Icon, title, details }, cardIndex) => (
              <article className="detail-card" key={title} data-testid={`card-info-${cardIndex + 1}`}>
                <span className="detail-icon"><Icon size={19} strokeWidth={1.7} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <ul>
                  {details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </article>
            ))}
          </div>

          <div className="extra-details">
            <div className="extra-item">
              <span className="extra-icon"><Users size={17} aria-hidden="true" /></span>
              <span><strong>Good company</strong>Groups, tourists and solo diners are welcome.</span>
            </div>
            <div className="extra-item">
              <span className="extra-icon"><Baby size={17} aria-hidden="true" /></span>
              <span><strong>Bring the little ones</strong>Monsoon is good for kids.</span>
            </div>
            <div className="extra-item">
              <span className="extra-icon"><Wine size={17} aria-hidden="true" /></span>
              <span><strong>From coffee to cocktails</strong>Beer, cocktails, spirits, wine and coffee.</span>
            </div>
            <div className="extra-item">
              <span className="extra-icon"><ParkingCircle size={17} aria-hidden="true" /></span>
              <span><strong>Parking nearby</strong>Free street parking and a free parking lot; spaces can be hard to find.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-map-pattern" aria-hidden="true">
          <span className="map-road road-one" />
          <span className="map-road road-two" />
          <span className="map-road road-three" />
          <span className="map-dot"><MapPin size={22} fill="currentColor" /></span>
        </div>
        <div className="page-width visit-content">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" />Come find us</p>
            <h2>Your table is <em>waiting.</em></h2>
            <p className="visit-address">{address}</p>
            <div className="visit-actions">
              <a className="button button-saffron" href={mapHref} target="_blank" rel="noreferrer" data-testid="link-directions">
                Get directions <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a className="visit-phone" href={phoneHref} data-testid="link-visit-phone">
                <Phone size={15} aria-hidden="true" /> {phone}
              </a>
            </div>
          </div>
          <div className="visit-note">
            <Sparkles size={19} aria-hidden="true" />
            <p>Reservations are welcome. Call ahead to ask about the menu or arrange delivery.</p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-width footer-main">
          <BrandMark />
          <p>Good company. Good food. Whatever the weather.</p>
          <a className="footer-to-top" href="#home" aria-label="Back to top" data-testid="link-back-to-top">
            Back to top <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
        <div className="page-width footer-bottom">
          <span>© {new Date().getFullYear()} Monsoon Restaurant</span>
          <span className="footer-address"><CarFront size={14} aria-hidden="true" /> {address}</span>
          <a href={phoneHref}>{phone}</a>
        </div>
      </footer>

      {activePhoto !== null && (
        <div
          className="photo-modal"
          role="presentation"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="photo-modal-content"
            role="dialog"
            aria-modal="true"
            aria-label={`Menu snapshot ${activePhoto + 1}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              aria-label="Close menu photo"
              onClick={() => setActivePhoto(null)}
              data-testid="button-close-menu-photo"
            >
              <X size={20} />
            </button>
            <img
              src={`/menu/${menuPhotos[activePhoto]}`}
              alt={`Menu snapshot ${activePhoto + 1}`}
            />
            <p>Menu snapshot {activePhoto + 1} · Call for current details</p>
            <a className="text-link modal-call" href={phoneHref}>
              Call Monsoon <Phone size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
