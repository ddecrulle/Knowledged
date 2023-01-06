import { useConstCallback } from 'powerhooks';
import { ArrayParam, useQueryParams, withDefault } from 'use-query-params';

const MyFiltersParam = withDefault(ArrayParam, []);

export const useTreeUrlParams = () => {
	const [searchParams, setSearchParams] = useQueryParams({
		selected: MyFiltersParam,
		expanded: MyFiltersParam,
		filtered: MyFiltersParam,
	});

	const updateParams = useConstCallback((key, value) => {
		setSearchParams({ [key]: value }, 'pushIn');
	});

	return [searchParams, updateParams];
};
