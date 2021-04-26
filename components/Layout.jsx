import Header from '@/components/shared/Header';
import { ToastContainer } from 'react-toastify';

const Layout = ({ children, className, user, loading, navClass = 'with-bg' }) => {
 return (
  <div className="layout-container">
   <Header className={navClass} user={user} loading={loading} />
   <main className={`cover ${className}`}>
    <div className="wrapper">{children}</div>
   </main>
   <ToastContainer />
  </div>
 );
};

export default Layout;
