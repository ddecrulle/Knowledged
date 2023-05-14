import React, { memo } from 'react';
import { makeStyles } from 'tss-react/mui';
import { keyframes } from 'tss-react';

const WaveBorder = ({
	className,
	lowerColor,
	upperColor,
	animationNegativeDelay,
}) => {
	const { classes, cx } = useStyles({ animationNegativeDelay, upperColor });
	const id = String(Math.random());

	return (
		<div className={cx(className, classes.root)}>
			<svg
				className={classes.waves}
				xmlns='http://www.w3.org/2000/svg'
				xlink='http://www.w3.org/1999/xlink'
				viewBox='0 24 150 28'
				preserveAspectRatio='none'
				shapeRendering='auto'
			>
				<defs>
					<path
						id={id}
						d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
					/>
				</defs>
				<g className={classes.parallax}>
					<use href={`#${id}`} x='48' y='0' fill={lowerColor} />
				</g>
			</svg>
		</div>
	);
};

const useStyles = makeStyles()(
	(theme, { animationNegativeDelay, upperColor }) => ({
		root: {
			background: upperColor ? upperColor : theme.palette.secondary.main,
		},
		waves: {
			position: 'relative',
			width: '100%',
			marginBottom: -8,
			height: '7vw',
			minHeight: '7vw',
		},
		parallax: {
			'& > use': {
				animation: `${keyframes`
        0% { 
          transform : translate3d(-90px, 0, 0)
        },
        100% {
          transform : translate3d(85px, 0, 0)
        },
        `} 4s cubic-bezier(0.62, 0.5, 0.38, 0.5) infinite`,
				animationDelay: `-${animationNegativeDelay}s`,
			},
		},
	})
);

export default memo(WaveBorder);
