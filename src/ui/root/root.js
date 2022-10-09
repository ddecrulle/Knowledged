import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos/dist/aos';
import 'aos/dist/aos.css';
import Home from 'ui/components/pages/home';
import Service from 'ui/components/pages/service';
import Header from 'ui/components/shared/header';
import Footer from 'ui/components/shared/footer/footer';

AOS.init({ once: true });

const Root = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='services' element={<Service />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default Root;
