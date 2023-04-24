import React, { memo } from 'react';
import HeadSection from './section/headSection';
import InformationSystem from './section/informationSystem';

const Home = () => {
	return (
		<section>
			<HeadSection />
			<InformationSystem />
		</section>
	);
};

export default memo(Home);
