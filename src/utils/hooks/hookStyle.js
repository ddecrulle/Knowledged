import { useMediaQuery, useTheme } from '@mui/material';

export const useIsWidthUp = (breakpoint) => {
	const theme = useTheme();
	return useMediaQuery(theme.breakpoints.up(breakpoint));
};

export const useIsWidthDown = (breakpoint) => {
	const theme = useTheme();
	return useMediaQuery(theme.breakpoints.down(breakpoint));
};
