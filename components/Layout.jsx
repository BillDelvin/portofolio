import Header from '../components/shared/Header';
import { Container } from 'reactstrap';

const Layout = ({ children }) => {
 return (
  <div>
   <Header />
   <Container>{children}</Container>
  </div>
 );
};

export default Layout;
