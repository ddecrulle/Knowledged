import React from 'react';
import HeadSection from './headSection';
import Application from './products';
import InformationSysteme from './informationSystem';
import Footer from 'ui/components/shared/footer/component';

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
