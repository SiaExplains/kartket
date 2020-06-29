export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_EDIT = 'CATEGORY_EDIT';
export const CATEGORY_DELETE = 'CATEGORY_DELETE';

export const categoryAdd = (category) => {
    return {
        type: CATEGORY_ADD,
        category,
    };
};
