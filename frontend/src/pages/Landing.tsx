import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import landing from "../assets/landing-hero.png";
import features from "../assets/features.png";
import { ReactComponent as Camp } from "../assets/stat-camp.svg";
import { GiCampingTent } from "react-icons/gi";
import { MdReviews } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";

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
              {/* <GiCampingTent size={35} /> */}
              <Camp width={70} height={70} />
            </figure>
            <div>
              <h2>Camping Destination</h2>
              <p>6969</p>
            </div>
          </div>

          <div className="stats-item">
            <figure>
              <MdReviews size={35} />
            </figure>
            <div>
              <h2>Positive Reviews</h2>
              <p>6969</p>
            </div>
          </div>

          <div className="stats-item">
            <figure>
              <HiUserGroup size={35} />
            </figure>
            <div>
              <h2>Active User</h2>
              <p>6969</p>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="features-item">
            <img src={features} alt="" />
            <h2>Why choose us</h2>
          </div>
        </section>
      </main>

      <footer></footer>
    </>
  );
}
export default Landing;
