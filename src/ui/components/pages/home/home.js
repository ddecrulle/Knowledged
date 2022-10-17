import React, { memo } from 'react';
import HeadSection from './section/headSection';
import InformationSysteme from './section/informationSystem';
import Products from './section/products';

const Home = () => {
	return (
		<section>
			<HeadSection />
			<Products />
			<InformationSysteme />
		</section>
	);
};

export default memo(Home);
