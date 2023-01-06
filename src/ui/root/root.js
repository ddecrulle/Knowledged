import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos/dist/aos';
import 'aos/dist/aos.css';
import Home from 'ui/components/pages/home';
import Service from 'ui/components/pages/service';
import Header from 'ui/components/shared/header';
import Footer from 'ui/components/shared/footer/footer';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

AOS.init({ once: true });

const Root = () => {
	return (
		<Router>
			<Header />
			<QueryParamProvider adapter={ReactRouter6Adapter}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='services' element={<Service />} />
				</Routes>
			</QueryParamProvider>
			<Footer />
		</Router>
	);
};

export default Root;
