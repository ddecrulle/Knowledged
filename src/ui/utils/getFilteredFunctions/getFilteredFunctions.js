export const getFunctionsFilterer = (selected, filtered, functions) => {
	const arrayOfIdToFilter = concatArrayWithoutDuplicate(selected, filtered);

	const objOfIdWithChild = arrayOfIdToFilter.reduce((acc, curr) => {
		const keyword = curr.split('-')[0];
		return keyword in acc
			? { ...acc, [keyword]: [...acc[keyword], curr] }
			: { ...acc, [keyword]: [curr] };
	}, {});

	return Object.entries(objOfIdWithChild).reduce(
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
};
const concatArrayWithoutDuplicate = (a, b) => [...new Set(a.concat(b))];

const intersectionArrays = (first, second) =>
	first.filter((x) => second.includes(x));

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
