import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const useTreeUrlStatus = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [state, setState] = useState(() => {
		return {
			selected: searchParams.get('selected')
				? searchParams.get('selected').split(',')
				: [],
			expanded: searchParams.get('expanded')
				? searchParams.get('expanded').split(',')
				: [],
			filter: searchParams.get('filter')
				? searchParams.get('filter').split(',')
				: [],
		};
	});

	useEffect(() => {
		if (
			searchParams.get('selected') !== state.selected ||
			searchParams.get('expanded') !== state.expanded ||
			searchParams.get('filter') !== state.filter
		) {
			setSearchParams({
				selected: state.selected.join(','),
				expanded: state.expanded.join(','),
				filter: state.filter.join(','),
			});
		}
	}, [state, searchParams, setSearchParams]);

	const updateState = (key, value) => {
		setState((prevState) => {
			const newState = { ...prevState, [key]: value };
			return newState;
		});
	};

	return [state, updateState];
};
