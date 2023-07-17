import { Outlet } from 'react-router-dom';
import { Header } from 'ui/components/shared/header';
import { Footer } from 'ui/components/shared/footer/footer';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
