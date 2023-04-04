import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import landing from "../assets/landing-hero.png";
import tent from "../assets/animat-tent-color.gif";
import ui from "../assets/animat-day-night-color.gif";
import search from "../assets/animat-flashlight-color.gif";
import { ReactComponent as Camp } from "../assets/stat-camp.svg";
import { ReactComponent as Review } from "../assets/stat-review.svg";
import { ReactComponent as User } from "../assets/stat-user.svg";
import { ReactComponent as Feature } from "../assets/features.svg";
import { ReactComponent as Map } from "../assets/features-map.svg";
function Landing() {
  return (
    <>
      <div className="container landing">
        <header>
          <section className="landing-logo">
            <img src={logo} alt="YelpCamp Logo" />
            <h1>YelpCamp</h1>
          </section>

          <section className="landing-options">
            <a href="#asda">Home</a>
            <a href="#asda">About</a>
            <a href="#asdasd">Contact</a>
          </section>

          <section className="landing-buttons">
            <Link to="/register" className="btn btn-primary mr-1">
              Login
            </Link>
            <Link to="/register" className="btn btn-smoke">
              Register
            </Link>
          </section>
        </header>

        <section className="landing-grid-container">
          <div className="landing-grid">
            <div className="hero hero-p">
              <p>Discover the natural wonders of the Philippines with YelpCamp.</p>
              <p>Your ultimate guide to camping, hiking, and outdoor fun.</p>

              <Link to="/campgrounds" className="btn btn-primary">
                View Campgrounds
              </Link>
            </div>

            <div className="hero hero-img">
              <img src={landing} alt="" />
            </div>
          </div>
        </section>
      </div>

      <main>
        <section className="stats-grid">
          <div className="stats-item">
            <figure>
              <Camp width={80} height={80} />
            </figure>
            <div>
              <h2>Camping Destination</h2>
              <p>6969</p>
            </div>
          </div>

          <div className="stats-item">
            <figure>
              <Review width={80} height={80} />
            </figure>
            <div>
              <h2>Positive Reviews</h2>
              <p>6969</p>
            </div>
          </div>

          <div className="stats-item">
            <figure>
              <User width={80} height={80} />
            </figure>
            <div>
              <h2>Active User</h2>
              <p>6969</p>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="features-container">
            <h2>WHY CHOOSE US?</h2>
            <Feature width={400} height={400} />
          </div>
          <div className="features-container">
            <div className="features-container-item">
              <section>
                <figure>
                  <img src={tent} alt="" />
                </figure>
                <h2>Comprehensive listings</h2>
                <p>
                  Detailed information on hundreds of campgrounds across the Philippines, making it
                  easy for you to find the perfect spot for your next adventure.
                </p>
              </section>

              <section>
                <figure>
                  <img src={ui} alt="" />
                </figure>
                <h2>User-friendly interface</h2>
                <p>
                  Designed to be intuitive and easy to use, so you can spend less time navigating
                  and more time planning your trip.
                </p>
              </section>

              <section>
                <figure>
                  <img src={search} alt="" />
                </figure>
                <h2>Customized search</h2>
                <p>
                  Narrow down your options by location, amenities, and more, so you can quickly find
                  the campgrounds that meet your specific needs.
                </p>
              </section>
            </div>
          </div>
        </section>
        <section className="features-map">
          <div className="features-map-container">
            <h1>
              YelpCamp connects passionate Filipino campers to unforgettable outdoor adventures
              across the Philippines.
            </h1>

            <p>
              Join our community of passionate campers and unlock the full potential of your outdoor
              adventure.
            </p>
            <Link to="/register" className="btn btn-primary">
              Join Community
            </Link>
          </div>
          <div className="features-map-container">
            <Map width={700} height={400} />
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <section>
          <section className="landing-logo">
            <img src={logo} alt="YelpCamp Logo" />
            <h1>YelpCamp</h1>
          </section>
          <p>Discover the Great Outdoors with YelpCamp!</p>
        </section>

        <section>
          <h3>Company</h3>
          <ul>
            <li>Features</li>
            <li>News</li>
            <li>FAQ</li>
          </ul>
        </section>

        <section>
          <h3>Resources</h3>
          <ul>
            <li>Events</li>
            <li>Promos</li>
            <li>Demo</li>
          </ul>
        </section>

        <section>
          <h3>Support</h3>
          <ul>
            <li>Account</li>
            <li>Support Center</li>
            <li>Feedback</li>
            <li>Contact Us</li>
          </ul>
        </section>

        <section>
          <h3>Social Media</h3>
          <p>Yelpcamp@support.ts</p>
        </section>
      </footer>
    </>
  );
}
export default Landing;
