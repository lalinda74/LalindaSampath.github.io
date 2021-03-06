import './projects.scss';
import Poster1 from  '../../assets/images/poster1.png';
import Poster2 from  '../../assets/images/poster2.jpeg';
import Poster3 from  '../../assets/images/poster3.jpeg';

function Projects() {

  const commonProps = {company: 'Shopify',position: 'UI/UX Engineer', duration: 'July, 2019'};

  return (
    <section id = "projects">
      <div>
        <div className="text-wrapper">
          <h6 className="p-label-emp">some work I have done</h6>
          <h2 className="mb-3 p-title">Case Studies</h2>
        </div>
        <div className="slider">
          <div className="p-banner">
            <img src= {Poster1} alt = "banner 1" />
          </div>
          <div className="p-banner">
            <img src= {Poster2} alt = "banner 2" />
          </div>
          <div className="p-banner">
            <img src= {Poster3} alt = "banner 3" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
