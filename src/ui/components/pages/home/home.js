import React, { memo } from 'react';
import HeadSection from './section/headSection';
import InformationSysteme from './section/informationSystem';
import Products from './section/products';
import { makeStyles } from 'tss-react/mui';

const Home = () => {
	const { classes } = useStyles();
	return (
		<section className={classes.section}>
			<HeadSection />
			<Products />
			<InformationSysteme />
		</section>
	);
};

const useStyles = makeStyles()(() => {
	return {
		section: { overflow: 'hidden' },
	};
});
export default memo(Home);
