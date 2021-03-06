import './landing-page.scss';
import profileImage from '../../assets/images/profile-image.jpeg';

function LandingPage() {
  return (
    <section className="wrapper wrapper--col-2 wrapper--fh wrapper--slim" id = "landingPage">
      <span>
        <h1 className="mb-3 p-title">Lalinda Sampath Dias</h1>
        <p className="p-txt-body">Front-End developer, UI/UX Engineer, and team player. I design for impact, give design talks, share learnings on <a className="p-link p-link--medium" href="https://medium.com/@diaslalinda" target="_blank">Medium</a>, and play on <a className="p-link p-link--dribble" href="https://dribbble.com/lalinda" target="_blank">Dribbble</a>. Currently in Sri Lanka.</p>
        <a className="scroll-btn" href="#case-study">
          <div className="scroll-down">
            <div className="mouse">
              <div className="scroller"></div>
            </div>
          </div>
        </a>
      </span>
      <span className="profile-image">
        <picture>
          <source media="(min-width: 800px)" data-srcset={profileImage} type="image/webp" srcSet={profileImage} />
          <img src={profileImage} alt="profile" className="profile-image" />
        </picture>
      </span>
    </section>
  );
}

export default LandingPage;
