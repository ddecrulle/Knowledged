import { useEffect, useState } from 'react';

export const useFiltredAndOrderedFunctions = (
	selected,
	filtered,
	functions
) => {
	const [arrayOfIdToFilter, setArrayOfIdToFilter] = useState([]);
	const [objOfIdByHierarchy, setObjOfIdByHierarchy] = useState({});
	const [filtredFunctions, setFiltredFunctions] = useState(functions);

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

		const objOfFctFiltred = Object.entries(objOfIdByHierarchy).map(
			([key, value]) => functions.filter((fct) => findId(value, fct, key))
		);

		console.log(objOfFctFiltred);

		setFiltredFunctions(
			objOfFctFiltred === {}
				? objOfFctFiltred.reduce((acc, curr) =>
						concatArrayWithoutDuplicate(acc, curr)
				  )
				: []
		);
	}, [functions, objOfIdByHierarchy]);

	return [filtredFunctions, setFiltredFunctions];
};
