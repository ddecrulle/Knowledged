import { useEffect, useState } from 'react';

export const useFilteredAndOrderedFunctions = (
	selected,
	filtered,
	functions
) => {
	const [arrayOfIdToFilter, setArrayOfIdToFilter] = useState([]);
	const [objOfIdWithChild, setObjOfIdWithChild] = useState({});
	const [filteredFunctions, setFilteredFunctions] = useState(functions);

	const intersectionArrays = (first, second) =>
		first.filter((x) => second.includes(x));

	const concatArrayWithoutDuplicate = (a, b) => [...new Set(a.concat(b))];

	useEffect(() => {
		setArrayOfIdToFilter(concatArrayWithoutDuplicate(selected, filtered));
	}, [selected, filtered]);

	useEffect(() => {
		setObjOfIdWithChild(
			arrayOfIdToFilter.reduce((acc, curr) => {
				const keyword = curr.split('-')[0];
				return keyword in acc
					? { ...acc, [keyword]: [...acc[keyword], curr] }
					: { ...acc, [keyword]: [curr] };
			}, {})
		);
	}, [arrayOfIdToFilter]);

	useEffect(() => {
		const searchArray = (fn) => (array, nodeKey) =>
			Array.isArray(array)
				? array.length === 0
					? false
					: searchArray(fn)(array[0], nodeKey) ||
					  searchArray(fn)(array.slice(1), nodeKey)
				: searchTree(fn)(array, nodeKey);

		const searchTree = (fn) => (obj, nodeKey) =>
			fn(obj, () =>
				obj[nodeKey] == null ? false : searchArray(fn)(obj[nodeKey], nodeKey)
			);

		const findId = (arrayTarget, obj, nodeKey) =>
			searchArray((node, next) =>
				arrayTarget.some((e) => node.id.includes(e)) ? true : next()
			)(obj, nodeKey);

		const objOfFctFiltered = Object.entries(objOfIdWithChild).reduce(
			(prev, [key, value], index) => {
				const functionFilteredByOneNode = functions.filter((fct) =>
					findId(value, fct, key)
				);
				return index === 0
					? functionFilteredByOneNode
					: intersectionArrays(prev, functionFilteredByOneNode);
			},
			[]
		);

		setFilteredFunctions(objOfFctFiltered);
	}, [functions, objOfIdWithChild]);

	return [filteredFunctions, setFilteredFunctions];
};
