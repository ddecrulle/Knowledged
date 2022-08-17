import React from 'react';
import HeadSection from './section/headSection';
import Application from './section/products';
import InformationSysteme from './section/informationSystem';
import Footer from 'ui/components/shared/footer';

const Home = () => {
	return (
		<>
			<HeadSection />
			<Application />
			<InformationSysteme />
			<Footer />
		</>
	);
};

export default Home;
