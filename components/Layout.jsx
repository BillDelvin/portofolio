import Header from '@/components/shared/Header';

const Layout = ({ children, className, user, loading, navClass = 'with-bg' }) => {
 return (
  <div className="layout-container">
   <Header className={navClass} user={user} loading={loading} />
   <main className={`cover ${className}`}>
    <div className="wrapper">{children}</div>
   </main>
  </div>
 );
};

export default Layout;
