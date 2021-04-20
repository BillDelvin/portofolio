import { Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';

const PortofolioCard = ({ portofolio }) => {
 return (
  <Card className="portfolio-card">
   <CardHeader className="portfolio-card-header">{portofolio.title}</CardHeader>
   <CardBody>
    <p className="portfolio-card-city">{portofolio.location} </p>
    <CardTitle className="portfolio-card-title">{portofolio.title}</CardTitle>
    <CardText className="portfolio-card-text">{portofolio.description}</CardText>
   </CardBody>
  </Card>
 );
};

export default PortofolioCard;
