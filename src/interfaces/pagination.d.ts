type TPagination<T> = {
	docs: T[];
	totalDocs: number;
	limit: number;
	totalPages: number;
	page: number;
	nextPage: number | null;
	prevPage: number | null;
	hasPrevPage: boolean;
	hasNextPage: boolean;
};
