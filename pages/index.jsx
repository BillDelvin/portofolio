import Layout from '@/components/Layout';
import { useGetUser } from '../actions/user';
import { Container, Row, Col } from 'reactstrap';
import Typed from 'react-typed';

const ROLES = ['Developer', 'Tech Lover', 'Cursor Creator', 'React.JS', 'Next.JS'];

const Home = () => {
 const { data, loading } = useGetUser();

 return (
  <Layout user={data} loading={loading} navClass="transparent" className="cover">
   <div className="main-section">
    <div className="background-image">
     <img src="/images/background-index.png" />
    </div>

    <Container>
     <Row>
      <Col md="6">
       <div className="hero-section">
        <div className={`flipper`}>
         <div className="back">
          <div className="hero-section-content">
           <h2> Full Stack Web Developer </h2>
           <div className="hero-section-content-intro">
            Have a look at my portfolio and job history.
           </div>
          </div>
          <img className="image" src="/images/section-1.jpg" />
          <div className="shadow-custom">
           <div className="shadow-inner"> </div>
          </div>
         </div>
        </div>
       </div>
      </Col>
      <Col md="6" className="hero-welcome-wrapper">
       <div className="hero-welcome-text">
        <h1>
         Welcome to the portfolio website of Filip Jerga. Get informed, collaborate and discover
         projects I was working on through the years!
        </h1>
       </div>
       <Typed
        loop
        strings={ROLES}
        typeSpeed={60}
        backSpeed={60}
        backDelay={500}
        loopCount={0}
        showCursor
        className="self-typed"
        cursorChar="|"
       ></Typed>
       <div className="hero-welcome-bio">
        <h1>Let's take a look on my work.</h1>
       </div>
      </Col>
     </Row>
    </Container>
   </div>
  </Layout>
 );
};

export default Home;
