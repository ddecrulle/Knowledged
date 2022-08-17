import { useEffect } from 'react';

export const getFiltredAndOrderedFunctions = ({
	selected,
	filtered,
	functions,
}) => {
	const searchArray = (fn) => (array, nodeKey) =>
		Array.isArray(array)
			? array.length === 0
				? false
				: searchArray(fn)(array[0], nodeKey) ||
				  searchArray(fn)(array.slice(1), nodeKey)
			: fn(array, () =>
					array[nodeKey] == null
						? false
						: searchArray(fn)(array[nodeKey], nodeKey)
			  );

	const searchTree = (fn) => (obj, nodeKey) =>
		fn(obj, () =>
			obj[nodeKey] == null ? false : searchArray(fn)(obj[nodeKey], nodeKey)
		);

	const findId = (arrayTarget, obj, nodeKey) =>
		searchArray((node, next) =>
			arrayTarget.includes(node.id) ? true : next()
		)(obj, nodeKey);

	//GroupBy treeparams and go through each group to find the selected nodes (avoid repetition

	// functions.filter((fn) => findId(fn, treeParams, 'gsbpm'));

	return functions;
};
