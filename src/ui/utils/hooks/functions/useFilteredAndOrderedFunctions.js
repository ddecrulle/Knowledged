import { useEffect, useState } from 'react';

export const useFilteredAndOrderedFunctions = (
	selected,
	filtered,
	functions
) => {
	//TODO Implement filter
	const [arrayOfIdToFilter, setArrayOfIdToFilter] = useState([]);
	const [objOfIdByHierarchy, setObjOfIdByHierarchy] = useState({});
	const [filteredFunctions, setFilteredFunctions] = useState(functions);

	// We don't filter by the parent node of the selected node

	const filterParentNode = (array) => array.filter((str) => str.includes('-'));

	const concatArrayWithoutDuplicate = (a, b) => [...new Set(a.concat(b))];

	useEffect(() => {
		setArrayOfIdToFilter(
			concatArrayWithoutDuplicate(filterParentNode(selected), filtered)
		);
	}, [selected, filtered]);

	useEffect(() => {
		setObjOfIdByHierarchy(
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
				arrayTarget.includes(node.id) ? true : next()
			)(obj, nodeKey);

		const objOfFctFiltered = Object.entries(objOfIdByHierarchy).reduce(
			(prev, [key, value]) =>
				concatArrayWithoutDuplicate(
					prev,
					functions.filter((fct) => findId(value, fct, key))
				),
			[]
		);

		setFilteredFunctions(objOfFctFiltered);
	}, [functions, objOfIdByHierarchy]);

	return [filteredFunctions, setFilteredFunctions];
};
