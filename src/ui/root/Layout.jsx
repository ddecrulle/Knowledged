import { Outlet } from 'react-router-dom';
import { Header } from 'ui/components/shared/header';
import { Footer } from 'ui/components/shared/footer/footer';
import { makeStyles } from 'tss-react/mui';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import AOS from 'aos/dist/aos';
import 'aos/dist/aos.css';

AOS.init({ once: true });

export const Layout = () => {
  const { classes } = useStyles();

  const showScrollButton = useScrollTrigger({ disableHysteresis: true });

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {showScrollButton && (
        <Fab onClick={handleScrollToTop} className={classes.fabButton}>
          <KeyboardArrowUp />
        </Fab>
      )}
    </>
  );
};

const useStyles = makeStyles()((theme) => {
  return {
    fabButton: {
      position: 'fixed',
      bottom: theme.spacing(6),
      right: theme.spacing(6),
    },
  };
});
