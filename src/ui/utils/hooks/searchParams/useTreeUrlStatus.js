import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const useTreeUrlStatus = () => {
	//TODO use useReducer instead of useState

	const [searchParams, setSearchParams] = useSearchParams();
	const [state, setState] = useState(() => {
		return {
			selected: searchParams.get('selected')
				? searchParams.get('selected').split(',')
				: [],
			expanded: searchParams.get('expanded')
				? searchParams.get('expanded').split(',')
				: [],
			filtered: searchParams.get('filtered')
				? searchParams.get('filtered').split(',')
				: [],
		};
	});

	useEffect(() => {
		if (
			searchParams.get('selected') !== state.selected ||
			searchParams.get('expanded') !== state.expanded ||
			searchParams.get('filtered') !== state.filtered
		) {
			setSearchParams({
				selected: state.selected.join(','),
				expanded: state.expanded.join(','),
				filtered: state.filtered.join(','),
			});
		}
	}, [state, searchParams, setSearchParams]);

	const updateState = (key, value) => {
		setState((prevState) => {
			return { ...prevState, [key]: value };
		});
	};

	return [state, updateState];
};
